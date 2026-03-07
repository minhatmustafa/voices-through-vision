import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OurVision from './pages/OurVision'
import OurTeam from './pages/OurTeam'
import Volunteer from './pages/Volunteer'
import Donate from './pages/Donate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/volunteer-with-us" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App