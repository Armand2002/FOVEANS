'use client'

import { useLanguage } from '@/lib/LanguageContext'
import styles from './CtaBanner.module.css'

export default function CtaBanner() {
  const { t } = useLanguage()

  return (
    <div className={styles.ctaWrap}>
      <div className={styles.ctaBg} aria-hidden="true">FOVEANS</div>
      <h2>{t('cta.h')}</h2>
      <p>{t('cta.p')}</p>
      <a href="#contatti" className={styles.btnInv}>
        {t('cta.b')}
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}
