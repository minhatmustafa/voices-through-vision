import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const visionImage = "https://images.squarespace-cdn.com/content/v1/69039ec8c66fab554f2b8f4e/121d5e35-b03c-48fc-a4ec-d1b99bb906b2/or.jpeg"

export default function OurVision() {
  return (
    <div className="font-sans" style={{ backgroundColor: '#f5f0e8' }}>

      <Navbar />

      {/* Page Header */}
      <div className="pt-24 pb-6 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Vision</h1>
      </div>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-10 flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2 text-gray-700 leading-relaxed space-y-5">
          <p>
            Our vision is to open doors of opportunity for children in Hargeisa who deserve a chance to dream bigger and reach farther. We strive to connect Somali children at home with the Somali community abroad, building bridges of learning, hope, and belonging that span across borders.
          </p>
          <p>
            Through online education in English, mathematics, and essential life skills, we aim to give a voice to children whose stories often go unheard—helping them see their own potential and believe in their ability to shape their future.
          </p>
          <p>
            By widening their horizons and nurturing their confidence, we hope to inspire a generation of Somali youth who can engage with the world, uplift their communities, and carry forward a vision of unity, knowledge, and possibility.
          </p>
        </div>
      </section>

      <Footer />

    </div>
  )
}