import Link from 'next/link'

export default function EuAiActPolicyPage() {
  return (
    <main className="sec">
      <div className="W" style={{ maxWidth: 820 }}>
        <h1 className="ht" style={{ marginBottom: 20 }}>EU AI Act Policy</h1>
        <p className="hb" style={{ marginBottom: 24 }}>
          Foveans progetta i propri sistemi con un approccio compliance-by-design,
          in allineamento ai requisiti del quadro normativo europeo sull&apos;AI.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Principi</h2>
        <p className="hb" style={{ marginBottom: 20 }}>
          Governance, tracciabilita, gestione del rischio, sicurezza e supervisione umana.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Aggiornamenti</h2>
        <p className="hb" style={{ marginBottom: 24 }}>
          Questa policy verra aggiornata periodicamente in base all&apos;evoluzione normativa.
        </p>

        <Link href="/" className="btn-s">Torna alla home</Link>
      </div>
    </main>
  )
}
