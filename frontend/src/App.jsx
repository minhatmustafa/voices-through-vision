import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OurVision from './pages/OurVision'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<OurVision />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App