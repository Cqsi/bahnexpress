import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1F2335] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-3xl">
          {/* Navigation Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Navigointi</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/palvelut" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center justify-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-white transition-colors duration-200"></span>
                    Palvelut
                  </a>
                </li>
                <li>
                  <a 
                    href="/yhteistiedot" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center justify-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-white transition-colors duration-200"></span>
                    Yhteistiedot
                  </a>
                </li>
                <li>
                  <a 
                    href="/tietosuoja" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center justify-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-white transition-colors duration-200"></span>
                    Rekisteri- ja tietosuojaseloste
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Ota yhteyttä</h3>
            <div className="text-gray-300 space-y-2">
              <p>Puhelin: +358 (0)9 123 4567</p>
              <p>Sähköposti: info@bahnexpress.fi</p>
              <p>Ma-Pe: 9:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with logo and company name */}
      <div className="border-t border-gray-700 w-full">
        <div className="container mx-auto px-4 py-6 flex flex-col items-center text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <img 
              src="/be_logo.png" 
              alt="Bahn Express Logo" 
              className="h-10 w-auto"
            />
            <span className="text-lg font-medium tracking-wide">Oy Bahn express AB</span>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} Oy Bahn express AB. Kaikki oikeudet pidätetään.
          </div>
        </div>
      </div>
    </footer>
  );
}