import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sites/Hero'
import About from './sites/About'
import WebSkills from './sites/Webskills'
import Projects from './sites/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <WebSkills />
      <Projects />
    </div>
  )
}

export default App
