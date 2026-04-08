'use client'

import { useLanguage } from '@/lib/LanguageContext'
import ScrollReveal from './ScrollReveal'
import styles from './Blog.module.css'

const posts = [
  {
    cKey: 'b1.c', hKey: 'b1.h', pKey: 'b1.p', mKey: 'b1.m',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="#CC2719" strokeWidth="1.5"/>
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="#4A2E2C" strokeWidth="1.5"/>
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="#4A2E2C" strokeWidth="1.5"/>
        <rect x="18" y="18" width="10" height="10" rx="2" stroke="#2A1414" strokeWidth="1.5"/>
      </svg>
    ),
    bgIcon: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
        <rect x="43" y="5" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
        <rect x="5" y="43" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
        <rect x="43" y="43" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    cKey: 'b2.c', hKey: 'b2.h', pKey: 'b2.p', mKey: 'b2.m',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 25L16 7l8 18H8z" stroke="#CC2719" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 19h10" stroke="#4A2E2C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bgIcon: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="2"/>
        <circle cx="40" cy="40" r="16" stroke="currentColor" strokeWidth="2"/>
        <circle cx="40" cy="40" r="4"  stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    cKey: 'b3.c', hKey: 'b3.h', pKey: 'b3.p', mKey: 'b3.m',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4z" stroke="#CC2719" strokeWidth="1.5"/>
        <path d="M16 10v6l4 4" stroke="#CC2719" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgIcon: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M40 10L70 65H10L40 10z" stroke="currentColor" strokeWidth="2"/>
        <path d="M40 35v15M40 55v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Blog() {
  const { t } = useLanguage()

  return (
    <section className="sec" id="blog" aria-labelledby="blog-heading">
      <div className="W">
        <div className={styles.blogHdr}>
          <div>
            <span className="ey">{t('s7.ey')}</span>
            <h2 className="ht" id="blog-heading" style={{ marginBottom: 0 }}>{t('s7.h')}</h2>
          </div>
          <ScrollReveal>
            <a href="/blog" className="arr d" aria-label="Vedi tutti gli articoli del blog">
              <span>{t('s7.all')}</span>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal className={styles.bg}>
          {posts.map(({ cKey, hKey, pKey, mKey, icon, bgIcon }) => (
            <article key={hKey} className={styles.bc}>
              <div className={styles.bth}>
                <div className={styles.bthBg}>{bgIcon}</div>
                <div className={styles.bthIco}>{icon}</div>
              </div>
              <div className={styles.bb}>
                <p className={styles.bcat}>{t(cKey)}</p>
                <h3>{t(hKey)}</h3>
                <p>{t(pKey)}</p>
                <p className={styles.bm}>{t(mKey)}</p>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
