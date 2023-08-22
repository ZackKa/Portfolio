import ImageHome from '../../assets/Memoji.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Banniere from '../../components/Banniere'
import About from '../../components/About'
import Contact from '../../components/Contact'

function Home() {
  return (
    <>
      <Header lien1 = {"A propos"} lien2 = {"Mes formations"} lien3 = {"Mes projets"} lien4 = {"Contacts"}/>
        <main>
          <Banniere cover = {ImageHome} />
          <About />
          <Gallery />
          <Contact />
        </main>
      <Footer />
    </>
  )
}
  
export default Home