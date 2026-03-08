import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="font-sans" style={{ backgroundColor: '#f5f0e8' }}>

      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-end pb-16 px-6 md:px-16"
        style={{ backgroundImage: `url(/header_cropped.jpg)`, backgroundSize: 'cover', backgroundPosition: 'left center' }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Empowering Somali marginalized students for a brighter future.
          </h1>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Voices Through Vision (VTV)</h2>
          <Link to="/our-vision" className="inline-block px-5 py-2 text-sm text-white transition" style={{ backgroundColor: '#7d9b76' }}>
            Our Vision
          </Link>
        </div>
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <p>
            We are a student-led initiative founded by <strong>Hodan Ali</strong> and <strong>Nura Abdilahi</strong>, dedicated to helping students access stable educational opportunities.
          </p>
          <p className="mt-4">
            Our work focuses on supporting over <strong>400 students</strong> through <strong>scholarship guidance</strong>, <strong>academic tutoring</strong>, and efforts to <strong>improve access to technology</strong> for learning.
          </p>
          <p className="mt-4">
            We're currently developing new programs in <strong>math and English via online tutoring</strong>, and exploring ways to expand our impact through community engagement and funding support.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-16 py-16" style={{ backgroundColor: '#e8e4d9' }}>

        {/* Project 1 - Volunteer */}
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
          <div className="md:w-1/2">
            <img src="/volunteer.webp" alt="Communities" className="w-full h-72 object-cover rounded" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Volunteer With Us</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Many educational materials in local languages are often out of date. We work with school leaders and publishers to ensure that students have access to current textbooks that are age appropriate and written in their primary language.
            </p>
            <Link to="/volunteer-with-us" className="inline-block px-5 py-2 text-sm text-white transition" style={{ backgroundColor: '#7d9b76' }}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Project 2 - Communities */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Support for Communities</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Education happens within the context of a larger community. Our approach extends beyond the school to help ensure students have the necessary support to do their best learning.
            </p>
            <Link to="/donate" className="inline-block px-5 py-2 text-sm text-white transition" style={{ backgroundColor: '#7d9b76' }}>
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="/support.webp" alt="Communities" className="w-full h-72 object-cover rounded" />
          </div>
          
        </div>

      </section>

      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 text-sm">Feel free to contact us with any questions!</p>
          <p className="mt-4 text-sm"><strong>Email</strong><br />email@example.com</p>
          <p className="mt-2 text-sm"><strong>Phone</strong><br />(555) 555-5555</p>
        </div>

      </section>

      <Footer />

    </div>
  )
}