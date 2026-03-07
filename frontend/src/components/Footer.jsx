export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-10 mt-16 flex flex-col md:flex-row gap-8 text-sm text-gray-700" style={{ backgroundColor: '#e8e0d0' }}>
      <div className="md:w-1/2">
        <h4 className="font-semibold text-base mb-2">Voices Through Vision</h4>
        <p>1 Chapin Way</p>
        <p>Northampton, MA USA 01063</p>
      </div>
      <div className="flex flex-col gap-2">
        <a href="/our-vision" className="hover:underline">Our Vision</a>
        <a href="/our-team" className="hover:underline">Our Team</a>
      </div>
      <div className="flex flex-col gap-2">
        <a href="/volunteer-with-us" className="hover:underline">Volunteer</a>
        <a href="/donate" className="hover:underline">Donate</a>
      </div>
    </footer>
  )
}
      {/* <div>
        <p className="font-semibold mb-2">Projects</p>
        <a href="/materials-for-learning" className="block hover:underline">Materials for Learning</a>
        <a href="/education-for-teachers" className="block hover:underline">Education for Teachers</a>
        <a href="/support-for-communities" className="block hover:underline">Support for Communities</a>
      </div> */}
