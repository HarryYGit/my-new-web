import Navbar from "./NavBar"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { Route, Routes } from 'react-router-dom'

import Project01 from "./pages/projects/Project01"
import Project02 from "./pages/projects/Project02"

function App() {
  return (
    <>
      <Navbar />
   
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project01" element={<Project01 />} />
          <Route path="/projects/project02" element={<Project02 />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App

