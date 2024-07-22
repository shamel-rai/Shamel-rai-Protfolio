
import './App.css'
import About from './components/About/About'
import Certification from './components/Certification/Certification'
import Contact from './components/Contact/Contact'
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
    </div>
  )
}

export default App
