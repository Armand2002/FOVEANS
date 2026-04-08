import { Resend } from 'resend'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { nome, cognome, email, organizzazione, argomento, messaggio } = await req.json()

  if (!nome || !email || !messaggio || !argomento) {
    return Response.json({ error: 'Campi obbligatori mancanti' }, { status: 400 })
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
