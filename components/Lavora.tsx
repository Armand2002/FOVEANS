'use client'

import { useLanguage } from '@/lib/LanguageContext'
import ScrollReveal from './ScrollReveal'
import styles from './Lavora.module.css'

const pills = [
  { hKey: 'j1.h', pKey: 'j1.p', tKey: 'j1.t' },
  { hKey: 'j2.h', pKey: 'j2.p', tKey: 'j2.t' },
  { hKey: 'j3.h', pKey: 'j3.p', tKey: 'j3.t' },
  { hKey: 'j4.h', pKey: 'j4.p', tKey: 'j4.t' },
]

export default function Lavora() {
  const { t } = useLanguage()

  return (
    <section className="sec" id="lavora" aria-labelledby="lavora-heading">
      <div className="W">
        <span className="ey">{t('s6.ey')}</span>
        <ScrollReveal className={styles.jobsGrid}>
          <div className={styles.jobsLeft}>
            <h2 id="lavora-heading">{t('s6.h')}</h2>
            <p>{t('s6.p1')}</p>
            <p>{t('s6.p2')}</p>
            <p>{t('s6.p3')}</p>
            <div style={{ marginTop: '24px' }}>
              <a href="#contatti" className="btn-p">
                {t('s6.cta')}
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.jobsPills}>
            {pills.map(({ hKey, pKey, tKey }) => (
              <article key={hKey} className={styles.jp}>
                <h3>{t(hKey)}</h3>
                <p>{t(pKey)}</p>
                <span className={styles.jpTag}>{t(tKey)}</span>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
