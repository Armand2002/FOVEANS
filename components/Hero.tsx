'use client'

import { useLanguage } from '@/lib/LanguageContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section aria-label="Hero">
      <div className={styles.hero}>
        <div className={`${styles.hKicker} fu`}>
          <span className={styles.hkD} aria-hidden="true" />
          <span>{t('h.k')}</span>
        </div>

        <h1 className={`${styles.h1} fu d1`}>
          <span>{t('h.a')}</span><br />
          <span className={styles.r}>{t('h.b')}</span><br />
          <span className={styles.g}>{t('h.c')}</span>
        </h1>

        <p className={`${styles.heroLead} fu d2`}>{t('h.lead')}</p>

        <div className={`${styles.heroActs} fu d3`}>
          <a href="#prodotti" className="btn-p">
            {t('h.b1')}
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#storia" className="btn-s">{t('h.b2')}</a>
        </div>

        <div className={`${styles.hPills} fu d4`} role="list" aria-label="Statistiche chiave">
          <div className={styles.hp} role="listitem">
            <div className={styles.hpN}>2026</div>
            <div className={styles.hpL}>{t('hp.1')}</div>
          </div>
          <div className={styles.hp} role="listitem">
            <div className={styles.hpN}><span className={styles.r}>EU</span></div>
            <div className={styles.hpL}>{t('hp.2')}</div>
          </div>
          <div className={styles.hp} role="listitem">
            <div className={styles.hpN}>3<span className={styles.r}>+</span></div>
            <div className={styles.hpL}>{t('hp.3')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
