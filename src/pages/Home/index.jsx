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
      <Header lien1 = {"À propos"} lien2 = {"Formations"} lien3 = {"Projets"} lien4 = {"Contact"} scroll = {535}/>
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