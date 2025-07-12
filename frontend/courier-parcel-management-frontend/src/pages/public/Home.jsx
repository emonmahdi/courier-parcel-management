export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-8 bg-white shadow-md">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          📦 Courier Parcel Management System
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          Seamlessly book, track, and manage your parcels with ease and speed.
        </p>
        <div className="mt-6">
          <a
            href="/book"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Book a Parcel
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="p-8 bg-blue-50 mt-4">
        <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">
          ✨ Features
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Book Parcels",
              desc: "Easily schedule and manage parcel bookings in a few clicks.",
            },
            {
              title: "Track Delivery",
              desc: "Track your parcel's journey in real-time with live updates.",
            },
            {
              title: "Secure Login",
              desc: "User authentication and secure dashboard for privacy.",
            },
            {
              title: "History & Reports",
              desc: "View your delivery history, invoices, and parcel summaries.",
            },
            {
              title: "Cash on Delivery",
              desc: "Enable COD option for recipients with seamless handling.",
            },
            {
              title: "Responsive UI",
              desc: "Optimized for all devices: mobile, tablet, and desktop.",
            },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-10 p-8 bg-white text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Ready to send your parcel?
        </h2>
        <p className="text-gray-600 mt-2">Start by booking it online in seconds.</p>
        <div className="mt-4">
          <a
            href="/book"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Book Now
          </a>
        </div>
      </section>

      <footer className="bg-gray-100 mt-auto p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Courier Parcel Management. All rights reserved.
      </footer>
    </div>
  );
}
