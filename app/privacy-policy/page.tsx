import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <main className="sec">
      <div className="W" style={{ maxWidth: 820 }}>
        <h1 className="ht" style={{ marginBottom: 20 }}>Privacy Policy</h1>
        <p className="hb" style={{ marginBottom: 24 }}>
          Questa pagina descrive in modo sintetico il trattamento dei dati personali.
          Il testo completo verra pubblicato nella versione legale definitiva.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Dati raccolti</h2>
        <p className="hb" style={{ marginBottom: 20 }}>
          Tramite il form contatti raccogliamo nome, cognome, email, organizzazione,
          argomento e messaggio inviato volontariamente dall&apos;utente.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Finalita</h2>
        <p className="hb" style={{ marginBottom: 20 }}>
          I dati sono usati esclusivamente per rispondere alle richieste ricevute e
          gestire i contatti commerciali o istituzionali.
        </p>

        <h2 className="ht" style={{ fontSize: 28, marginBottom: 10 }}>Contatti</h2>
        <p className="hb" style={{ marginBottom: 24 }}>
          Per richieste privacy puoi scrivere a foveans@pec.it.
        </p>

        <Link href="/" className="btn-s">Torna alla home</Link>
      </div>
    </main>
  )
}
