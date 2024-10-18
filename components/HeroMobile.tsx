import LogoSlider from "@/components/LogoSliderTest";

export default function HeroMobile() {
  return (
    <main>
      <div className="relative w-full mx-auto mt-24">
        <img
          src="/logos/coverphoto_dark.webp"
          alt=""
          className="w-full h-auto max-h-[80vh] object-cover"
        />

        <div className="absolute inset-0 text-white p-4 sm:px-12 md:px-12 lg:px-20 xl:px-20 text-center md:text-left md:mt-10 lg:text-left lg:mt-20"> 
          <h1 className="text-white text-4xl font-customFont font-bold px-5 py-6">
            Nopeat ja luotettavat autonsiirrot
          </h1>
        </div>
        <div className="absolute bottom-0 w-full max-h-[px] order-3 md:order-1">
          <LogoSlider />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
            <p className="text-2xl font-bold text-black text-center px-10">
              Tarjoamme ammattitaitoista ja luotettavaa autonsiirtopalvelua kaikkialla Suomessa.
            </p>
            <button className="text-black text-2xl border-2 border-black rounded-lg px-6 py-2 mt-8 hover:hover:bg-[#C4E0F9] transition-colors duration-200">
            Ota yhteyttä!
            </button>
        </div>
    </main>
  );
}

