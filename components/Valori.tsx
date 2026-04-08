'use client'

import { useLanguage } from '@/lib/LanguageContext'
import ScrollReveal from './ScrollReveal'
import styles from './Valori.module.css'

const icons = [
  <svg key="1" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 13h12M4 13V7l4-5 4 5v6" stroke="#CC2719" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 13v-3h4v3" stroke="#CC2719" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  <svg key="2" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.5" stroke="#CC2719" strokeWidth="1.2"/><path d="M8 5v2.5l1.5 1.5" stroke="#CC2719" strokeWidth="1.2" strokeLinecap="round"/><path d="M5 3L3 1M11 3l2-2M8 2V1" stroke="#CC2719" strokeWidth="1.1" strokeLinecap="round" opacity=".5"/></svg>,
  <svg key="3" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2l1.5 3.5H13l-2.8 2.1 1 3.4L8 9.2l-3.2 1.8 1-3.4L3 5.5h3.5L8 2z" stroke="#CC2719" strokeWidth="1.2" strokeLinejoin="round"/></svg>,
  <svg key="4" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="10" width="12" height="4" rx="1" stroke="#CC2719" strokeWidth="1.2"/><rect x="4" y="6" width="8" height="4" rx="1" stroke="#CC2719" strokeWidth="1.2"/><rect x="6" y="2" width="4" height="4" rx="1" stroke="#CC2719" strokeWidth="1.2"/></svg>,
]

const valori = [
  { n: '01', hKey: 'v1.h', pKey: 'v1.p' },
  { n: '02', hKey: 'v2.h', pKey: 'v2.p' },
  { n: '03', hKey: 'v3.h', pKey: 'v3.p' },
  { n: '04', hKey: 'v4.h', pKey: 'v4.p' },
]

export default function Valori() {
  const { t } = useLanguage()

  return (
    <section className="sec" id="valori" aria-labelledby="valori-heading">
      <div className="W">
        <span className="ey">{t('s3.ey')}</span>
        <h2 className="ht" id="valori-heading">{t('s3.h')}</h2>
        <div className={styles.valGrid}>
          {valori.map(({ n, hKey, pKey }, i) => (
            <ScrollReveal key={n}>
              <article className={styles.vc}>
                <span className={styles.vcN} aria-hidden="true">{n}</span>
                <div className={styles.vcIco}>{icons[i]}</div>
                <h3>{t(hKey)}</h3>
                <p>{t(pKey)}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
