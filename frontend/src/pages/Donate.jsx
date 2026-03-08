import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Donate() {
  return (
    <div className="font-sans" style={{ backgroundColor: '#f5f0e8' }}>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your generosity can change a child's life. Every donation helps provide education, learning materials, and essential care for orphans in Hargeisa, giving them hope, opportunity, and a brighter future.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Together, we can open doors to possibility and show these children that they are never forgotten.
          </p>
        </div>
        <a
          href="#"
          className="inline-block px-12 py-4 text-white text-base font-medium transition hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: '#7d9b76' }}
        >
          Donate Now
        </a>
      </section>

      {/* Support for Communities */}
      <section className="px-6 md:px-16 py-10 max-w-3xl text-gray-700 leading-relaxed space-y-5">
        <h2 className="text-2xl font-bold">Support for Communities</h2>
        <p>
          Our work extends beyond classrooms — it's about strengthening the entire community that nurtures each child. We believe that lasting change happens when families, educators, and neighbors come together to create an environment where every child can grow, learn, and dream freely.
        </p>
        <p>
          Through local partnerships, community-led workshops, and resource sharing, we aim to support the orphans and caregivers who shape a child's world.
        </p>
        <p>
          From providing access to learning materials and technology, we're committed to creating opportunities that uplift not just individuals, but the collective spirit of the children in Hargeisa orphanage center.
        </p>
      </section>

      {/* Our Approach */}
      <section className="px-6 md:px-16 py-10" style={{ backgroundColor: '#e8e4d9' }}>
        <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
        <ul className="space-y-5 text-gray-700">
          {[
            { title: "Empower Children", desc: "Equip each child with the education, confidence, and skills they need to thrive" },
            { title: "Strengthen Schools", desc: "Collaborate with local educators to enhance classroom resources and training" },
            { title: "Foster Connection", desc: "Build bridges between communities in Somaliland and the Somali diaspora" },
            { title: "Sustainability First", desc: "Focus on long-term, community-led impact rather than short-term aid" },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="mt-1 w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#7d9b76' }}></span>
              <p><strong>{item.title}:</strong> {item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Get Involved */}
      <section className="px-6 md:px-16 py-10 max-w-3xl text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
        <p className="mb-4">
          When you support communities, you help build the foundation for every child's success.
        </p>
        <p className="mb-8">
          You can contribute by sponsoring a local initiative, donating educational materials, or helping us connect with organizations that share our mission.
        </p>
        <a
          href="#"
          className="inline-block px-12 py-4 text-white text-base font-medium transition hover:opacity-90"
          style={{ backgroundColor: '#7d9b76' }}
        >
          Donate Now
        </a>
      </section>

      <Footer />

    </div>
  )
}