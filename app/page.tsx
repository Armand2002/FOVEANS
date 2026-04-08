import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Storia from '@/components/Storia'
import Prodotti from '@/components/Prodotti'
import Valori from '@/components/Valori'
import Team from '@/components/Team'
import Investitori from '@/components/Investitori'
import Lavora from '@/components/Lavora'
import Blog from '@/components/Blog'
import CtaBanner from '@/components/CtaBanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="hr" />
        <Storia />
        <div className="hr" />
        <Prodotti />
        <div className="hr" />
        <Valori />
        <div className="hr" />
        <Team />
        <div className="hr" />
        <Investitori />
        <div className="hr" />
        <Lavora />
        <div className="hr" />
        <Blog />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
