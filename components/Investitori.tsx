'use client'

import { useLanguage } from '@/lib/LanguageContext'
import ScrollReveal from './ScrollReveal'
import styles from './Investitori.module.css'

export default function Investitori() {
  const { t } = useLanguage()

  return (
    <section className="sec" id="investitori" aria-labelledby="inv-heading">
      <div className="W">
        <span className="ey">{t('s5.ey')}</span>
        <h2 className="ht" id="inv-heading">{t('s5.h')}</h2>
        <p className="hb">{t('s5.p')}</p>

        <div className={styles.siBadge}>
          <span className={styles.siDot} aria-hidden="true" />
          {t('inv.si')}
        </div>

        <ScrollReveal className={styles.invWrap}>
          <div className={styles.invStat}>
            <div className={styles.n}>$73<span className={styles.r}>B</span></div>
            <div className={styles.l}>{t('inv.s1')}</div>
          </div>
          <div className={styles.invSep} aria-hidden="true" />
          <div className={styles.invStat}>
            <div className={styles.n}>€8<span className={styles.r}>M</span></div>
            <div className={styles.l}>{t('inv.s2')}</div>
          </div>
          <div className={styles.invSep} aria-hidden="true" />
          <div className={styles.invStat}>
            <div className={styles.nSmall}>{t('inv.s3n')}</div>
            <div className={styles.l}>{t('inv.s3')}</div>
          </div>
          <div className={styles.invCta}>
            <a href="#contatti" className="btn-p" style={{ justifyContent: 'center' }}>
              {t('inv.cta')}
            </a>
            <span className={styles.invSub}>{t('inv.sub')}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
