import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const RATE_WINDOW_MS = 60_000
const MAX_REQUESTS_PER_WINDOW = 5
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const allowedTopics = new Set([
  'demo',
  'investimento',
  'partnership',
  'ricerca',
  'carriere',
  'stampa',
  'altro',
])

const rateStore = new Map<string, { count: number; start: number }>()

function normalizeText(value: unknown, maxLen: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLen) : ''
}

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown'
  }
  return req.headers.get('x-real-ip') ?? 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const existing = rateStore.get(ip)

  if (!existing || now - existing.start > RATE_WINDOW_MS) {
    rateStore.set(ip, { count: 1, start: now })
    return false
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }

  existing.count += 1
  rateStore.set(ip, existing)
  return false
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return Response.json({ error: 'Troppi tentativi. Riprova tra poco.' }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return Response.json({ error: 'Payload non valido' }, { status: 400 })
  }

  const nome = normalizeText((body as Record<string, unknown>).nome, 80)
  const cognome = normalizeText((body as Record<string, unknown>).cognome, 80)
  const email = normalizeText((body as Record<string, unknown>).email, 160)
  const organizzazione = normalizeText((body as Record<string, unknown>).organizzazione, 160)
  const argomento = normalizeText((body as Record<string, unknown>).argomento, 40)
  const messaggio = normalizeText((body as Record<string, unknown>).messaggio, 5000)

  if (!nome || !email || !messaggio || !argomento) {
    return Response.json({ error: 'Campi obbligatori mancanti' }, { status: 400 })
  }

  if (!emailRegex.test(email)) {
    return Response.json({ error: 'Formato email non valido' }, { status: 400 })
  }

  if (!allowedTopics.has(argomento)) {
    return Response.json({ error: 'Argomento non valido' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_EMAIL ?? 'foveans@pec.it'

  const { error } = await resend.emails.send({
    from: 'Foveans Contact <noreply@foveans.com>',
    to,
    replyTo: email,
    subject: `[Foveans] ${argomento} — ${nome} ${cognome}`,
    text: [
      `Nome: ${nome} ${cognome}`,
      `Email: ${email}`,
      `Organizzazione: ${organizzazione || '—'}`,
      `Argomento: ${argomento}`,
      '',
      messaggio,
    ].join('\n'),
  })

  if (error) {
    console.error('[contact] Resend error:', error)
    return Response.json({ error: 'Invio fallito' }, { status: 500 })
  }

  return Response.json({ ok: true })
}
