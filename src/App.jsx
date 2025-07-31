import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Home from './pages/home'
import Experience from './pages/experience'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

/**
 * Componente principal da aplicação
 * @returns {JSX.Element} Aplicação com rotas configuradas
 */
function App() {
  return (
    <LanguageProvider>
      <Router basename="/Portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App