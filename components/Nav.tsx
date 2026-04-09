'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import styles from './Nav.module.css'

export default function Nav() {
  const { lang, setLang, t } = useLanguage()
  const [mobOpen, setMobOpen] = useState(false)

  const closeMob = () => setMobOpen(false)

  return (
    <>
      <nav className={styles.nav}>
        <a href="/" className={styles.nlogo} aria-label="Foveans home">
          <div className={styles.nm} aria-hidden="true">F</div>
          Foveans
        </a>

        <ul className={styles.nls} role="list">
          <li><a href="#storia">{t('n.s')}</a></li>
          <li><a href="#prodotti">{t('n.p')}</a></li>
          <li><a href="#valori">{t('n.v')}</a></li>
          <li><a href="#team">{t('n.t')}</a></li>
          <li><a href="#investitori">{t('n.i')}</a></li>
          <li><a href="#lavora">{t('n.l')}</a></li>
          <li><a href="#contatti">{t('n.c')}</a></li>
        </ul>

        <div className={styles.ne}>
          <div className={styles.lsw} role="group" aria-label="Seleziona lingua">
            <button
              className={`${styles.lb} ${lang === 'it' ? styles.on : ''}`}
              onClick={() => setLang('it')}
              aria-pressed={lang === 'it'}
            >IT</button>
            <button
              className={`${styles.lb} ${lang === 'en' ? styles.on : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >EN</button>
          </div>
          <a href="#contatti" className={styles.ncta}>{t('n.cta')}</a>
          <button
            className={`${styles.burg} ${mobOpen ? styles.x : ''}`}
            onClick={() => setMobOpen(v => !v)}
            aria-label={mobOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={mobOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {mobOpen && (
        <div className={styles.mob} role="navigation" aria-label="Menu mobile">
          <a href="#storia"   onClick={closeMob}>{t('n.s')}</a>
          <a href="#prodotti" onClick={closeMob}>{t('n.p')}</a>
          <a href="#valori"   onClick={closeMob}>{t('n.v')}</a>
          <a href="#team"     onClick={closeMob}>{t('n.t')}</a>
          <a href="#investitori" onClick={closeMob}>{t('n.i')}</a>
          <a href="#lavora"   onClick={closeMob}>{t('n.l')}</a>
          <a href="#contatti" onClick={closeMob}>{t('n.c')}</a>
          <a href="#contatti" className={styles.mct} onClick={closeMob}>{t('n.cta')}</a>
        </div>
      )}
    </>
  )
}
