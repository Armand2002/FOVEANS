import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="sec">
      <div className="W" style={{ maxWidth: 820 }}>
        <h1 className="ht" style={{ marginBottom: 20 }}>Blog</h1>
        <p className="hb" style={{ marginBottom: 24 }}>
          La sezione blog completa e in preparazione.
          A breve pubblicheremo articoli su architettura, governance e infrastruttura AI enterprise.
        </p>

        <Link href="/#blog" className="btn-p">Vedi anteprima nella home</Link>
      </div>
    </main>
  )
}
