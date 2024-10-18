import LogoSlider from "@/components/LogoSliderTest";

export default function HeroMobile() {
  return (
    <main>
      <div className="mt-10 flex flex-col items-start mt-24">
        <h1 className="text-black text-4xl font-customFont px-5 py-6">
          Nopeat ja luotettavat autonsiirrot
        </h1>
        <p className="text-xl text-black px-5">
          Tarjoamme ammattitaitoista ja luotettavaa autonsiirtopalvelua kaikkialla Suomessa.
        </p>
        <button className="bg-[#acd1fc] text-black text-2xl border-2 border-black px-8 py-2 mt-8 mx-5 hover:hover:bg-[#C4E0F9] transition-colors duration-200">
        Ota yhteyttä!
        </button>
      </div>
      <div className="relative w-full mx-auto mt-10">
        <img
          src="/logos/coverphoto_dark.webp"
          alt=""
          className="w-full h-auto max-h-[80vh] object-cover"
        />

        <div className="absolute inset-0 text-white p-4 sm:px-12 md:px-12 lg:px-20 xl:px-20 text-center md:text-left md:mt-10 lg:text-left lg:mt-20"> 
          {/* Other content can go here */}
        </div>
        
        {/* Use flexbox to center the LogoSlider vertically */}
        <div className="absolute inset-0 flex items-center justify-center">
          <LogoSlider />
        </div>
      </div>

      
    </main>
  );
}

