import { Link } from 'react-router-dom'

const heroImage = "https://images.squarespace-cdn.com/content/v1/69039ec8c66fab554f2b8f4e/d877c19e-eae6-427a-8631-d6f5d910a38c/ChatGPT+Image+Oct+30%2C+2025%2C+01_43_32+PM.png"
const volunteerImage = "https://images.squarespace-cdn.com/content/v1/69039ec8c66fab554f2b8f4e/121d5e35-b03c-48fc-a4ec-d1b99bb906b2/or.jpeg"
const teacherImage = "https://images.squarespace-cdn.com/content/v1/69039ec8c66fab554f2b8f4e/cb19d2b1-413a-49bf-a446-40065f488b4d/ChatGPT+Image+Oct+30%2C+2025%2C+01_59_40+PM.png"
const communityImage = "https://images.squarespace-cdn.com/content/v1/69039ec8c66fab554f2b8f4e/a6d94dfb-d7d6-479d-9016-ccba21e050a0/ChatGPT+Image+Oct+30%2C+2025%2C+02_18_35+PM.png"

export default function HomePage() {
  return (
    <div className="font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold tracking-wide">Voices Through Vision</Link>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/about" className="hover:underline">Our Vision</Link>
          <Link to="/about" className="hover:underline">Our Team</Link>
          <Link to="/about" className="hover:underline">Projects</Link>
          <Link to="/about" className="hover:underline">Blog</Link>
          <a href="/donate" className="border border-black px-4 py-1.5 hover:bg-black hover:text-white transition">Donate</a>
        </div>
        {/* Mobile hamburger placeholder */}
        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-end pb-16 px-6 md:px-16"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
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
          <Link to="/about" className="inline-block border border-black px-5 py-2 text-sm hover:bg-black hover:text-white transition">
            Our Vision
          </Link>
        </div>
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <p>
            We're a student-led initiative founded by <strong>Hodan Ali</strong> and <strong>Nura Abdilahi</strong>, dedicated to helping students access stable educational opportunities.
          </p>
          <p className="mt-4">
            Our work focuses on supporting over <strong>400 students</strong> through <strong>scholarship guidance</strong>, <strong>academic tutoring</strong>, and efforts to <strong>improve access to technology</strong> for learning.
          </p>
          <p className="mt-4">
            We're currently developing new programs in <strong>math, English, and online tutoring</strong>, and exploring ways to expand our impact through community engagement and funding support.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-900 text-white px-6 md:px-16 py-16">

        {/* Project 1 - Volunteer */}
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
          <div className="md:w-1/2">
            <img src={volunteerImage} alt="Volunteer" className="w-full h-72 object-cover rounded" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Volunteer With Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Many educational materials in local languages are often out of date. We work with school leaders and publishers to ensure that students have access to current textbooks that are age appropriate and written in their primary language.
            </p>
            <a href="/volunteer-with-us" className="inline-block border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Project 2 - Teachers */}
        <div className="flex flex-col md:flex-row-reverse gap-10 mb-16 items-center">
          <div className="md:w-1/2">
            <img src={teacherImage} alt="Teachers" className="w-full h-72 object-cover rounded" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Continuing Education for Teachers</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              We create bespoke continuing education programs to address the needs of teachers and their student communities. From training on the latest technology to new pedagogical methods, we help teachers make their classrooms engaging and successful.
            </p>
            <a href="/education-for-teachers" className="inline-block border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Project 3 - Communities */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img src={communityImage} alt="Communities" className="w-full h-72 object-cover rounded" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Support for Communities</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Education happens within the context of a larger community. Our approach extends beyond the school to help ensure students have the necessary support to do their best learning.
            </p>
            <a href="/support-for-communities" className="inline-block border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition">
              Learn More
            </a>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 text-sm">Feel free to contact us with any questions.</p>
          <p className="mt-4 text-sm"><strong>Email</strong><br />email@example.com</p>
          <p className="mt-2 text-sm"><strong>Phone</strong><br />(555) 555-5555</p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="border border-gray-300 px-4 py-3 w-full text-sm focus:outline-none focus:border-black" />
            <input type="email" placeholder="Email" className="border border-gray-300 px-4 py-3 w-full text-sm focus:outline-none focus:border-black" />
            <textarea placeholder="Message" rows={5} className="border border-gray-300 px-4 py-3 w-full text-sm focus:outline-none focus:border-black"></textarea>
            <button className="bg-black text-white px-6 py-3 text-sm w-fit hover:bg-gray-800 transition">Submit</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-6 md:px-16 py-10 flex flex-col md:flex-row gap-8 text-sm text-gray-700">
        <div className="md:w-1/2">
          <h4 className="font-semibold text-base mb-2">Voices Through Vision</h4>
          <p>1 Chapin Way</p>
          <p>Northampton, MA USA 01063</p>
        </div>
        <div>
          <p className="font-semibold mb-2">About</p>
          <a href="/our-vision" className="block hover:underline">Our Vision</a>
          <a href="/donate" className="block hover:underline">Donate</a>
        </div>
        <div>
          <p className="font-semibold mb-2">Projects</p>
          <a href="/materials-for-learning" className="block hover:underline">Materials for Learning</a>
          <a href="/education-for-teachers" className="block hover:underline">Education for Teachers</a>
          <a href="/support-for-communities" className="block hover:underline">Support for Communities</a>
        </div>
      </footer>

    </div>
  )
}