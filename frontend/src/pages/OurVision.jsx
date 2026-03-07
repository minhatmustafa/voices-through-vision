const visionImage = "https://images.squarespace-cdn.com/content/v1/69039ec8c66fab554f2b8f4e/121d5e35-b03c-48fc-a4ec-d1b99bb906b2/or.jpeg"

export default function OurVision() {
  return (
    <div className="font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-lg font-semibold tracking-wide">Voices Through Vision</a>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <a href="/our-vision" className="hover:underline">Our Vision</a>
          <a href="/our-team" className="hover:underline">Our Team</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/donate" className="border border-black px-4 py-1.5 hover:bg-black hover:text-white transition">Donate</a>
        </div>
        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </nav>

      {/* Page Header */}
      <div className="pt-24 pb-6 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Vision</h1>
      </div>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-10 flex flex-col md:flex-row gap-12 items-start">

        {/* Text */}
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

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={visionImage}
            alt="Children in Hargeisa"
            className="w-full h-auto rounded shadow-md object-cover"
          />
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-6 md:px-16 py-10 mt-16 flex flex-col md:flex-row gap-8 text-sm text-gray-700">
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