'use client'

import { useLanguage } from '@/lib/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={styles.ft}>
        <div className={styles.ftTop}>
          <div className={styles.fb}>
            <a href="/" className={styles.nlogo} aria-label="Foveans home">
              <div className={styles.nm} aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              Foveans
            </a>
            <p>{t('ft.tl')}</p>
          </div>

          <div className={styles.fcol}>
            <h5>{t('ft.h1')}</h5>
            <ul>
              <li><a href="https://ariaop.ai" target="_blank" rel="noopener noreferrer">ARIA-OP ↗</a></li>
              <li><a href="#prodotti">{t('ft.p2')}</a></li>
              <li><a href="#prodotti">{t('ft.p3')}</a></li>
            </ul>
          </div>

          <div className={styles.fcol}>
            <h5>{t('ft.h2')}</h5>
            <ul>
              <li><a href="#storia">{t('ft.a1')}</a></li>
              <li><a href="#team">{t('ft.a2')}</a></li>
              <li><a href="#blog">{t('ft.a3')}</a></li>
              <li><a href="#investitori">{t('ft.a4')}</a></li>
              <li><a href="#lavora">{t('ft.a5')}</a></li>
            </ul>
          </div>

          <div className={styles.fcol}>
            <h5>{t('ft.h3')}</h5>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/cookie-policy">Cookie Policy</a></li>
              <li><a href="/terms">{t('ft.l1')}</a></li>
              <li><a href="/eu-ai-act-policy">EU AI Act Policy</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.ftBot}>
          <div className={styles.ftLegal}>
            <span>© 2026 Foveans S.r.l. · P.IVA 04588150716 · REA FG-340217</span>
            <span>Sede legale: Viale Leone XIII 247, 71121 Foggia (FG) · <a href="mailto:foveans@pec.it">foveans@pec.it</a></span>
            <span>Startup Innovativa iscritta nella sezione speciale del Registro delle Imprese dal 25/02/2026</span>
          </div>
          <div className={styles.ftl}>
            <a href="https://www.linkedin.com/company/foveans" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com/foveans" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
            <a href="https://x.com/foveans" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
