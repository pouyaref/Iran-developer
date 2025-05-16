import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import HeroSection from './components/Hero'
import LearningPath from './components/LearningPath'

import LibraryComponent from './components/LibraryComponent'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <HeroSection/>
    <LearningPath/>
    <LibraryComponent />
    <Footer />
    </>
  )
}

export default App
