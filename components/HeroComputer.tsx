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
        <div className="absolute inset-0 text-white p-4 sm:px-12 md:px-12 lg:px-20 xl:px-20 text-center md:text-left md:mt-10 lg:text-left lg:mt-20"> 
          <h1 className="text-white text-6xl font-customFont font-bold py-6">
            Nopeat ja luotettavat autonsiirrot
          </h1>
          <p className="text-2xl text-white mb-6 md:order-1 font-customFont">
            Tarjoamme ammattitaitoista ja luotettavaa autonsiirtopalvelua kaikkialla Suomessa.
          </p>
          
        </div>

        {/* LogoSlider positioned at the bottom of the image */}
        <div className="absolute bottom-0 w-full max-h-[px] order-3 md:order-1">
          <LogoSlider />
        </div>

      </div>
    </main>
  );
}

