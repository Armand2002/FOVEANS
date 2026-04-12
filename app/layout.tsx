import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { getThemeCss, currentTheme } from '@/lib/themes';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeCss = getThemeCss(currentTheme);

  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCss }} />
      </head>
      <body className="min-h-full flex flex-col bg-(--bg) text-(--text)">
        {children}
      </body>
    </html>
  );
}
