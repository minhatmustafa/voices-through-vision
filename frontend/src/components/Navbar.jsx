import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm px-6 py-4" style={{ backgroundColor: '#e8e0d0' }}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold tracking-wide">Voices Through Vision</Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/our-vision" className="hover:underline">Our Vision</Link>
          <Link to="/our-team" className="hover:underline">Our Team</Link>
          <Link to="/volunteer-with-us" className="hover:underline">Volunteer</Link>
          <Link to="/donate" className="px-4 py-1.5 text-white transition" style={{ backgroundColor: '#7d9b76' }}>Donate</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-sm pb-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
          <Link to="/our-vision" onClick={() => setMenuOpen(false)} className="hover:underline">Our Vision</Link>
          <Link to="/our-team" onClick={() => setMenuOpen(false)} className="hover:underline">Our Team</Link>
          <Link to="/volunteer-with-us" onClick={() => setMenuOpen(false)} className="hover:underline">Volunteer</Link>
          <a href="/donate" className="px-4 py-1.5 text-white text-center transition w-full" style={{ backgroundColor: '#7d9b76' }}>Donate</a>
        </div>
      )}
    </nav>
  )
}