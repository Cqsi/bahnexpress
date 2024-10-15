import Image from 'next/image'

export default function Hero() {
  return (
    <main className="flex-grow">
      <div className="mx-auto sm:px-12 md:px-12 lg:px-12 xl:px-16 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side with text */}
          {/*mx-auto sm:px-12 md:px-12 lg:px-12 xl:px-16*/}
          <div className="">
            <div className="flex flex-col items-start">
              <h1 className="text-5xl md:text-6xl font-customFont leading-tight mb-4">
                Nopeat, vaivattomat ja luotettavat autonsiirrot
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Tarjoamme ammattitaitoista ja luotettavaa autonsiirtopalvelua kaikkialla Suomessa.
              </p>
              <button className=" text-black text-xl border-2 border-black rounded-lg px-6 py-2 hover:bg-[#C4E0F9] transition-colors duration-300">
                Ota yhteyttä!
              </button>
            </div>
          </div>

          {/* Right side with image */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 lg:ml-16">
            <Image
              src="/placeholder.svg"
              alt="Autonsiirto"
              width={600}
              height={400}
              className="rounded-lg border bg-slate-300"
            />
          </div>
        </div>
      </div>
    </main>
  )
}