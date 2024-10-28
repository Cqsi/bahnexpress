import LogoSlider from "@/components/LogoSliderTest";

export default function HeroComputer() {
  return (
    <main>
      <div className="relative w-full h-screen flex">
        {/* Background image filling the screen */}
        <img
          src="/logos/coverphoto_dark.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="relative z-10 text-white p-4 sm:px-8 md:px-12 lg:px-20 md:text-left mt-32">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-customFont font-bold py-6">
            Nopeat ja luotettavat autonsiirrot
          </h1>
          <p className="text-2xl sm:text-xl md:text-2xl mb-6 font-customFont">
            Tarjoamme ammattitaitoista ja luotettavaa autonsiirtopalvelua kaikkialla Suomessa.
          </p>
        </div>

        {/* LogoSlider positioned at the bottom */}
        <div className="absolute bottom-0 w-full">
          <LogoSlider />
        </div>
      </div>
    </main>
  );
}
