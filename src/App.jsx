
import './App.css'
import About from './components/About/About'
import Certification from './components/Certification/Certification'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Projects from './components/MyProjects/Projects'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
