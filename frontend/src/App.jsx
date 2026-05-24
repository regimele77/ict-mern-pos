import Footer from './components/Footer'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/Aboutsection'
import PosFeatures from './components/PosFeatures'
import Pricing from './components/Pricing'

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <div id='about'>
        <AboutSection/>
      </div>
      <div id='features'>
        <PosFeatures/>
      </div>
      <div id='pricing'>
        <Pricing/>
      </div>
      <Footer/>
    </>
  )
}

export default App
