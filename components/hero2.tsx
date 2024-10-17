export default function Hero2() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:min-h-[72vh] max-w-8xl mx-auto mt-24">
      {/* Text Column */}
      <div className="lg:w-1/2 p-6 mt-10 lg:pl-16 lg:pr-8 lg:mt-0">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-5xl text-[#33485C] md:text-6xl font-customFont leading-tight mb-4 text-center lg:text-left">
              Nopeat ja luotettavat autonsiirrot
            </h1>
            <p className="text-xl text-gray-600 mb-6 text-center lg:text-left">
              Tarjoamme ammattitaitoista ja luotettavaa autonsiirtopalvelua kaikkialla Suomessa.
            </p>
              <button className="text-black text-xl border-2 border-black rounded-lg px-6 py-2 mt-2 hover:hover:bg-[#C4E0F9] transition-colors duration-300">
                Ota yhteyttä!
              </button>

          </div>
      </div>

      {/* Image Column */}
      <div className="lg:w-1/2 p-6">
        <img src="/bluecar.png" alt="Hero Image" className="w-full object-cover" />
      </div>
    </div>
  )
}