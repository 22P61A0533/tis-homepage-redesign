import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/ui/ScrollProgress'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Academics from './components/sections/Academics'
import Sports from './components/sections/Sports'
import CampusLife from './components/sections/CampusLife'
import Admissions from './components/sections/Admissions'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import Stats from './components/sections/Stats'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Academics />
        <Sports />
        <CampusLife />
        <Admissions />
        <CustomCursor />
      </main>
      <Footer />
    </>
  )
}

export default App