import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const persons = [
  {
    id: 1,
    name: "Matias Blomberg",
    image: "/matias.webp",
    email: "matias@bahnexpress.fi",
    phone: "+358 400257961"
  },
  {
    id: 1,
    name: "Atte Vesala",
    image: "/atte.jpeg",
    email: "matias@bahnexpress.fi",
    phone: "+358 400257961"
  },
  {
    id: 1,
    name: "Sakari Vanhanen",
    image: "/sakari.jpeg",
    email: "matias@bahnexpress.fi",
    phone: "+358 400257961"
  },
];

export default function Persons() {
  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="py-6">
        <div className="overflow-hidden sm:rounded-lg">
          {/* Persons Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {persons.map((person) => (
              <div
                key={person.id}
                className="px-4 py-5 sm:px-6 flex flex-col items-center bg-white shadow rounded-lg"
              >
                {/* Circle Photo */}
                <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Person Info */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mt-4">
                  {person.name}
                </h2>
                <div className="mt-4 flex flex-col items-center space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-gray-700 mr-2" />
                    <a
                      href={`mailto:${person.email}`}
                      className="text-base sm:text-lg text-gray-700 hover:text-gray-900 break-all"
                    >
                      {person.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-gray-700 mr-2" />
                    <a
                      href={`tel:${person.phone.replace(/\s/g, '')}`}
                      className="text-base sm:text-lg text-gray-700 hover:text-gray-900"
                    >
                      {person.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Company Info */}
          <div className="mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              OY BAHN EXPRESS AB
            </h3>
            <p className="mt-4 text-sm sm:text-base text-gray-700">
              Y-tunnus: 3414813-4
            </p>
            <Link
              href="/pages/privacypolicy"
              className="mt-4 inline-block text-sm sm:text-base text-blue-600 hover:text-blue-800"
            >
              Rekisteri- ja tietosuojaseloste
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}