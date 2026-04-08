'use client'

import { useLanguage } from '@/lib/LanguageContext'
import ScrollReveal from './ScrollReveal'
import styles from './Prodotti.module.css'

export default function Prodotti() {
  const { t } = useLanguage()

  return (
    <section className="sec" id="prodotti" aria-labelledby="prodotti-heading">
      <div className="W">
        <span className="ey">{t('s2.ey')}</span>
        <h2 className="ht" id="prodotti-heading">{t('s2.h')}</h2>
        <p className="hb">{t('s2.p')}</p>

        <ScrollReveal className={styles.prodGrid}>
          {/* ARIA-OP — Live */}
          <article className={`${styles.pc} ${styles.live}`}>
            <span className={`${styles.pcSt} ${styles.stLive}`} aria-label="Stato: in produzione">
              {t('p1.st')}
            </span>
            <div className={styles.pcName}>ARIA-OP</div>
            <div className={styles.pcType}>{t('p1.type')}</div>
            <p className={styles.pcDesc}>{t('p1.desc')}</p>
            <div className={styles.pcFoot}>
              <a
                href="https://ariaop.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="arr r"
                aria-label="Vai su ariaop.ai (apre in una nuova scheda)"
              >
                <span>{t('p1.lk')}</span>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3h3v3M13 3L7 9M4 4H2v10h10v-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </article>

          {/* QARIA — In sviluppo */}
          <article className={`${styles.pc} ${styles.soon}`}>
            <span className={`${styles.pcSt} ${styles.stSoon}`}>{t('p2.st')}</span>
            <div className={styles.pcName}>QARIA</div>
            <div className={styles.pcType}>{t('p2.type')}</div>
            <p className={styles.pcDesc}>{t('p2.desc')}</p>
            <div className={styles.pcFoot}>
              <span className={styles.pcEta}>{t('p2.eta')}</span>
            </div>
          </article>

          {/* Foveans Suite — Roadmap */}
          <article className={`${styles.pc} ${styles.next}`} aria-label="Foveans Suite — in roadmap">
            <span className={`${styles.pcSt} ${styles.stNext}`}>{t('p3.st')}</span>
            <div className={styles.pcName}>{t('p3.name')}</div>
            <div className={styles.pcType}>{t('p3.type')}</div>
            <p className={styles.pcDesc}>{t('p3.desc')}</p>
            <div className={styles.pcFoot}>
              <span className={styles.pcEta} style={{ opacity: .5 }}>2027+</span>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  )
}
