import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import VideoBackground from './components/VideoBackground'
import Home from './pages/Home'
import Work from './pages/Work'
import Category from './pages/Category'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <VideoBackground />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:categorySlug" element={<Category />} />
          <Route path="/work/:categorySlug/:projectSlug" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App