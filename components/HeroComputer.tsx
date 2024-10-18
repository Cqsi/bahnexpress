import LogoSlider from "@/components/LogoSliderTest";

export default function HeroComputer() {
  return (
    <main>
      <div className="relative w-full mx-auto mt-24 flex flex-col md:flex-row">
        <img
          src="/logos/coverphoto_dark.webp"
          alt=""
          className="w-full h-auto max-h-[80vh] object-cover"
        />
        {/*
          <div className="absolute inset-0 text-white p-4 sm:px-12 md:px-12 lg:px-20 xl:px-20 text-center md:text-left md:mt-10 lg:text-left lg:mt-20"> 
          <h1 className="text-white text-3xl md:text-5xl font-customFont font-bold py-6">
            Nopeat ja luotettavat autonsiirrot
          </h1>
          <p className="text-xl text-white mb-6 md:order-1">
            Tarjoamme ammattitaitoista ja luotettavaa autonsiirtopalvelua kaikkialla Suomessa.
          </p>
          <button className="text-black text-xl border-2 px-6 py-2 mt-2 bg-white hover:bg-[#C4E0F9] transition-colors duration-300 md:order-2">
            Ota yhteyttä!
          </button>
        </div>
        */}
        

        {/* LogoSlider positioned at the bottom of the image */}
        <div className="absolute bottom-0 w-full max-h-[px] order-3 md:order-1">
          <LogoSlider />
        </div>

      </div>
    </main>
  );
}

