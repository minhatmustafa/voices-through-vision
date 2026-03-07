import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm px-6 py-4 flex justify-between items-center" style={{ backgroundColor: '#e8e0d0' }}>
      <Link to="/" className="text-lg font-semibold tracking-wide">Voices Through Vision</Link>
      <div className="hidden md:flex gap-6 items-center text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/our-vision" className="hover:underline">Our Vision</Link>
        <Link to="/our-team" className="hover:underline">Our Team</Link>
        <Link to="/volunteer-with-us" className="hover:underline">Volunteer</Link>        
        <a href="/donate" className="px-4 py-1.5 text-white transition" style={{ backgroundColor: '#7d9b76' }}>Donate</a>
      </div>
      <div className="md:hidden text-2xl cursor-pointer">☰</div>
    </nav>
  )
}