import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Volunteer() {
  return (
    <div className="font-sans" style={{ backgroundColor: '#f5f0e8' }}>

      <Navbar />

      {/* Page Header */}
      <div className="pt-24 pb-6 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold">Volunteer With Us</h1>
      </div>

      {/* Intro */}
      <section className="px-6 md:px-16 py-10 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2 text-gray-700 leading-relaxed space-y-5">
          <p>
            Every child deserves someone who believes in them. By volunteering with our initiative, you become part of a growing movement to empower orphans and vulnerable children in Hargeisa through learning, mentorship, and care.
          </p>
          <p>
            Whether you're teaching English online, helping with math lessons, sharing digital skills, or simply offering encouragement, your time can change a child's story. Volunteers are the bridge that connects hope with opportunity.
          </p>
          <p>
            Join us to make a lasting impact — not just through lessons, but through love, connection, and community. Together, we can nurture confidence, open doors to education, and show every child that they are seen, valued, and capable of greatness.
          </p>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="px-6 md:px-16 py-10" style={{ backgroundColor: '#e8e4d9' }}>
        <h2 className="text-2xl font-bold mb-6">How You Can Help</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#7d9b76' }}></span>
            <p><strong>Tutor Online:</strong> Share your knowledge in English or Math</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#7d9b76' }}></span>
            <p><strong>Support Our Programs:</strong> Lend your professional skills in design, communications, or outreach</p>
          </li>
        </ul>
      </section>

      {/* Volunteer Commitment */}
      <section className="px-6 md:px-16 py-10 max-w-3xl text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">Volunteer Commitment</h2>
        <p>
          We welcome volunteers of all backgrounds and skill levels. You can contribute remotely or in person if you are in Hargeisa, depending on your availability. Even a few hours a week can make a meaningful difference. Every effort counts toward building a brighter future for these children.
        </p>
      </section>

      {/* Join Us CTA */}
      {/* <section className="px-6 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">Join Us</h2>
        <p className="text-gray-600 mb-8">Be part of something bigger.</p>
        <a
          href="#"
          className="inline-block px-8 py-3 text-white text-sm font-medium transition hover:opacity-90"
          style={{ backgroundColor: '#7d9b76' }}
        >
          Sign Up to Volunteer
        </a>
      </section> */}

      <Footer />

    </div>
  )
}