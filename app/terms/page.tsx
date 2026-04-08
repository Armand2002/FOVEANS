import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="sec">
      <div className="W" style={{ maxWidth: 820 }}>
        <h1 className="ht" style={{ marginBottom: 20 }}>Termini e condizioni</h1>
        <p className="hb" style={{ marginBottom: 24 }}>
          Questi termini disciplinano l&apos;uso del sito Foveans.
          La versione legale completa verra pubblicata a breve.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Uso del sito</h2>
        <p className="hb" style={{ marginBottom: 20 }}>
          I contenuti hanno finalita informativa e possono essere aggiornati senza preavviso.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Limitazioni</h2>
        <p className="hb" style={{ marginBottom: 24 }}>
          E vietato utilizzare il sito per finalita illecite o in violazione della normativa applicabile.
        </p>

        <Link href="/" className="btn-s">Torna alla home</Link>
      </div>
    </main>
  )
}
