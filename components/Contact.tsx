'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import styles from './Contact.module.css'

interface FormData {
  nome: string
  cognome: string
  email: string
  organizzazione: string
  argomento: string
  messaggio: string
}

const emptyForm: FormData = {
  nome: '', cognome: '', email: '',
  organizzazione: '', argomento: '', messaggio: '',
}

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormData>(emptyForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.ctWrap} id="contatti">
      <div className={styles.ctIn}>
        <div>
          <span className="ey">{t('s8.ey')}</span>
          <h2 className={styles.ctH}>{t('s8.h')}</h2>
          <p className={styles.ctP}>{t('s8.p')}</p>

          <div className={styles.ctInfo}>
            <div className={styles.ci}>
              <div className={styles.ciIc} aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="#CC2719" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.ciLb}>Email</p>
                <a href="mailto:foveans@pec.it" className={styles.ciVlR}>foveans@pec.it</a>
              </div>
            </div>
            <div className={styles.ci}>
              <div className={styles.ciIc} aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="#CC2719" strokeWidth="1.2"/>
                  <circle cx="8" cy="6" r="1.5" stroke="#CC2719" strokeWidth="1.2"/>
                </svg>
              </div>
              <div>
                <p className={styles.ciLb}>{t('ci.l')}</p>
                <p className={styles.ciVl}>{t('ci.lv')}</p>
              </div>
            </div>
            <div className={styles.ci}>
              <div className={styles.ciIc} aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#CC2719" strokeWidth="1.2"/>
                  <path d="M5 7h6M5 10h4" stroke="#CC2719" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.ciLb}>{t('ci.c')}</p>
                <p className={styles.ciVl}>Foveans S.r.l. — Startup Innovativa</p>
              </div>
            </div>
          </div>
        </div>

        <form className={styles.cform} onSubmit={handleSubmit} noValidate>
          <div className={styles.fr2}>
            <div className={styles.fg}>
              <label htmlFor="nome">{t('cf.fn')}</label>
              <input id="nome" type="text" placeholder="Mario" value={form.nome} onChange={set('nome')} required />
            </div>
            <div className={styles.fg}>
              <label htmlFor="cognome">{t('cf.ln')}</label>
              <input id="cognome" type="text" placeholder="Rossi" value={form.cognome} onChange={set('cognome')} required />
            </div>
          </div>
          <div className={styles.fg}>
            <label htmlFor="email">{t('cf.em')}</label>
            <input id="email" type="email" placeholder="mario@azienda.it" value={form.email} onChange={set('email')} required />
          </div>
          <div className={styles.fg}>
            <label htmlFor="organizzazione">{t('cf.co')}</label>
            <input id="organizzazione" type="text" placeholder="Azienda / Fondo / Università" value={form.organizzazione} onChange={set('organizzazione')} />
          </div>
          <div className={styles.fg}>
            <label htmlFor="argomento">{t('cf.su')}</label>
            <select id="argomento" value={form.argomento} onChange={set('argomento')} required>
              <option value="">{t('cf.o0')}</option>
              <option value="demo">{t('cf.o1')}</option>
              <option value="investimento">{t('cf.o2')}</option>
              <option value="partnership">{t('cf.o3')}</option>
              <option value="ricerca">{t('cf.o4')}</option>
              <option value="carriere">{t('cf.o5')}</option>
              <option value="stampa">{t('cf.o6')}</option>
              <option value="altro">{t('cf.o7')}</option>
            </select>
          </div>
          <div className={styles.fg}>
            <label htmlFor="messaggio">{t('cf.ms')}</label>
            <textarea id="messaggio" rows={4} placeholder="Raccontaci cosa hai in mente..." value={form.messaggio} onChange={set('messaggio')} required />
          </div>

          <button type="submit" className={styles.bsend} disabled={status === 'loading'}>
            {status === 'loading' ? '...' : t('cf.sb')}
          </button>

          {status === 'success' && (
            <p className={styles.successMsg} role="status">
              ✓ Messaggio inviato. Ti risponderemo entro 24 ore.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.errorMsg} role="alert">
              Errore nell&apos;invio. Riprova o scrivi a foveans@pec.it
            </p>
          )}

          <p className={styles.cnote}>
            {t('cf.nt')} <a href="#">{t('cf.pp')}</a>.
          </p>
        </form>
      </div>
    </div>
  )
}
