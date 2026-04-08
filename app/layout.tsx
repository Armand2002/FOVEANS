import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Foveans — Il sistema operativo per gli agenti AI enterprise',
  description:
    "Foveans costruisce l'infrastruttura che manca. Piattaforme software che portano gli agenti AI dalla demo alla produzione — affidabili, conformi alle normative europee, progettate per durare decenni.",
  keywords: [
    'AI agents', 'enterprise AI', 'AI orchestration', 'EU AI Act', 'ARIA-OP',
    'Foveans', 'startup italiana', 'Foggia', 'AI governance', 'infrastruttura AI',
  ],
  authors: [{ name: 'Foveans S.r.l.' }],
  creator: 'Foveans S.r.l.',
  publisher: 'Foveans S.r.l.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://foveans.com',
    title: 'Foveans — Il sistema operativo per gli agenti AI enterprise',
    description:
      "Foveans costruisce l'infrastruttura AI enterprise. Piattaforme software affidabili, conformi all'EU AI Act, progettate per durare decenni.",
    siteName: 'Foveans',
    locale: 'it_IT',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Foveans — Il sistema operativo per gli agenti AI enterprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foveans — Il sistema operativo per gli agenti AI enterprise',
    description:
      "Foveans costruisce l'infrastruttura AI enterprise. Affidabile, EU AI Act compliant, production-ready.",
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://foveans.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
