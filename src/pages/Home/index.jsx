import ImageHome from '../../assets/Memoji.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Banniere from '../../components/Banniere'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Formation from '../../components/Formation'


function Home() {
  return (
    <>
      <Header lien1 = {"A propos"} lien2 = {"Mes formations"} lien3 = {"Mes projets"} lien4 = {"Contact"} scroll = {535}/>
        <main>
          <Banniere cover = {ImageHome} />
          <About />
          <Formation />
          <Gallery />
          <Contact />
        </main>
      <Footer />
    </>
  )
}
  
export default Home