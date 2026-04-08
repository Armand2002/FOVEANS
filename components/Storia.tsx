'use client'

import { useLanguage } from '@/lib/LanguageContext'
import ScrollReveal from './ScrollReveal'
import styles from './Storia.module.css'

const timeline = [
  { ghost: '01', nKey: 's1.c1n', tKey: 's1.c1t' },
  { ghost: '02', nKey: 's1.c2n', tKey: 's1.c2t' },
  { ghost: '03', nKey: 's1.c3n', tKey: 's1.c3t' },
  { ghost: '→',  nKey: 's1.c4n', tKey: 's1.c4t' },
]

export default function Storia() {
  const { t } = useLanguage()

  const pullText = t('s1.pull')
  const em = t('s1.pullEm')
  const [before, rest] = pullText.split(em)

  return (
    <section className="sec" id="storia" aria-labelledby="storia-heading">
      <div className="W">
        <span className="ey">{t('s1.ey')}</span>
        <ScrollReveal className={styles.storiaWrap}>
          <div className={styles.storiaLeft}>
            <div className={styles.pull}>
              {before}
              <em className={styles.em}>{em}</em>
              {rest}
            </div>
            <p>{t('s1.p1')}</p>
            <p>{t('s1.p2')}</p>
            <p>{t('s1.p3')}</p>
          </div>
          <div className={styles.storiaRight}>
            {timeline.map(({ ghost, nKey, tKey }) => (
              <div key={nKey} className={styles.sc}>
                <span className={styles.scGhost} aria-hidden="true">{ghost}</span>
                <div className={styles.scN}>{t(nKey)}</div>
                <div className={styles.scT}>{t(tKey)}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
