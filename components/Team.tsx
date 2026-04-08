'use client'

import { useLanguage } from '@/lib/LanguageContext'
import ScrollReveal from './ScrollReveal'
import styles from './Team.module.css'

export default function Team() {
  const { t } = useLanguage()

  return (
    <section className="sec" id="team" aria-labelledby="team-heading">
      <div className="W">
        <span className="ey">{t('s4.ey')}</span>
        <div className={styles.teamLayout}>
          <ScrollReveal className={styles.teamIntro}>
            <h2 id="team-heading">{t('s4.h')}</h2>
            <p>{t('s4.p1')}</p>
            <p>{t('s4.p2')}</p>
          </ScrollReveal>

          <ScrollReveal>
            {/* Armando Anselmi */}
            <article className={styles.tc}>
              <div className={styles.tcIn}>
                <div className={`${styles.tcAv} ${styles.r}`} aria-hidden="true">AA</div>
                <div className={styles.tcB}>
                  <div className={styles.tcNm}>Armando Anselmi</div>
                  <div className={`${styles.tcRl} ${styles.r}`}>{t('t1.r')}</div>
                  <p className={styles.tcBio}>{t('t1.b')}</p>
                  <div className={styles.tcTags} aria-label="Competenze">
                    <span className={styles.tg}>{t('t1.t1')}</span>
                    <span className={styles.tg}>{t('t1.t2')}</span>
                    <span className={styles.tg}>{t('t1.t3')}</span>
                    <span className={styles.tg}>UniBa</span>
                    <span className={styles.tg}>YC Startup School</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Valerio S. Di Maggio */}
            <article className={styles.tc}>
              <div className={styles.tcIn}>
                <div className={`${styles.tcAv} ${styles.d}`} aria-hidden="true">VS</div>
                <div className={styles.tcB}>
                  <div className={styles.tcNm}>Valerio S. Di Maggio</div>
                  <div className={`${styles.tcRl} ${styles.d}`}>{t('t2.r')}</div>
                  <p className={styles.tcBio}>{t('t2.b')}</p>
                  <div className={styles.tcTags} aria-label="Competenze">
                    <span className={styles.tg}>Architecture</span>
                    <span className={styles.tg}>AI/ML</span>
                    <span className={styles.tg}>Kubernetes</span>
                    <span className={styles.tg}>Poliba</span>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
