import ImageHome from '../../assets/Memoji.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Banniere from '../../components/Banniere'
import About from '../../components/About'

function Home() {
  return (
    <>
      <Header />
        <main>
          <Banniere cover = {ImageHome} />
          <About />
          <Gallery />
        </main>
      <Footer />
    </>
  )
}
  
export default Home