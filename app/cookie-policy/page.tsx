import Link from 'next/link'

export default function CookiePolicyPage() {
  return (
    <main className="sec">
      <div className="W" style={{ maxWidth: 820 }}>
        <h1 className="ht" style={{ marginBottom: 20 }}>Cookie Policy</h1>
        <p className="hb" style={{ marginBottom: 24 }}>
          Questa pagina riassume l&apos;uso dei cookie sul sito Foveans.
          Il documento completo verra pubblicato nella versione legale definitiva.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Cookie tecnici</h2>
        <p className="hb" style={{ marginBottom: 20 }}>
          Usiamo cookie tecnici strettamente necessari al funzionamento della piattaforma.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Cookie di terze parti</h2>
        <p className="hb" style={{ marginBottom: 24 }}>
          Eventuali integrazioni esterne saranno indicate in questa pagina con finalita e durata.
        </p>

        <Link href="/" className="btn-s">Torna alla home</Link>
      </div>
    </main>
  )
}
