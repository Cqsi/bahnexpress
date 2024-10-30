import { Phone, Mail} from 'lucide-react'

export default function Person() {
  return (
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-20">
        <div className="px-4 py-6 sm:px-0">
          <div className="overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex flex-col items-center">
              {/* Circle Photo */}
              <div className="w-44 h-44 rounded-full overflow-hidden mb-4">
                <img
                  src="/matias.webp"
                  alt="Person"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Person Info */}
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center mt-4">
              Matias Blomberg</h2>
              <div className="mt-2 flex flex-col items-center sm:flex-row sm:justify-center">
                <div className="flex items-center mt-2 sm:mt-0 sm:mr-4">
                  <Mail className="h-7 w-7 text-gray-700 mr-2" />
                  <a href="mailto:john@example.com" className="text-gray-700 hover:text-gray-900 text-xl">
                  matias@bahnexpress.fi
                  </a>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <Phone className="h-7 w-7 text-gray-700 mr-2" />
                  <a href="tel:+358123456789" className="text-gray-700 hover:text-gray-900 text-xl">
                  +358 400257961
                  </a>
                </div>
              </div>

              {/* Company Info */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-2xl">OY BAHN EXPRESS AB</h3>
                <p className="mt-4 text-xl text-sm text-gray-700">Y-tunnus: 3414813-4</p>
                <a
                  href="#"
                  className="mt-4 text-xl inline-block text-sm text-blue-600 hover:text-blue-800"
                >
                  Rekisteri- ja tietosuojaseloste
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}