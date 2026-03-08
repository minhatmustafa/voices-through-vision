import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const team = [
  { name: "Nura Abdilahi", title: "Co-Founder and Coach", initials: "NA" },
  { name: "Hodan Ali", title: "Co-Founder and Coach", initials: "HA" },
]

export default function OurTeam() {
  return (
    <div className="font-sans" style={{ backgroundColor: '#f5f0e8' }}>

      <Navbar />

      {/* Page Header */}
      <div className="pt-24 pb-6 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
      </div>

      {/* Team Cards */}
      <section className="px-6 md:px-16 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center gap-4">
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500">
                {member.initials}
              </div>
              <div>
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 md:px-16 py-16" style={{ backgroundColor: '#e8e4d9' }}>
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <div className="max-w-3xl text-gray-700 leading-relaxed space-y-5">
          <p>
            Our story began with a simple but powerful belief — that every child deserves the chance to dream beyond their circumstances. As two college students who had both witnessed the talent and determination of Somali youth, we wanted to do something meaningful to bridge opportunity and access.
          </p>
          <p>
            During our time teaching children in Hargeisa, we saw firsthand how eager students were to learn, even with limited resources. Their curiosity and resilience inspired us to create something that could go beyond the classroom: a way to connect Somali children at home with the Somali community abroad.
          </p>
          <p>
            What started as small lessons in English and mathematics has grown into a broader mission: to provide online education, mentorship, and life skills that build confidence, widen horizons, and nurture a sense of belonging.
          </p>
          <p>
            Through this project, we are working to open doors for the next generation of Somali youth, empowering them to see their own potential, engage with the world, and uplift their communities.
          </p>
          <p>
            We may have started as two college students with a shared dream, but today, our story belongs to every child who dares to dream bigger — and every community that believes in their future.
          </p>
        </div>
      </section>

      <Footer />

    </div>
  )
}