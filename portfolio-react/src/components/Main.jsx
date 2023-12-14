import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Main = () => {
  const projectsRef = useRef(null)

  return (
    <div className="routesContainer">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Main