import LogoSlider from "@/components/LogoSliderTest";
import { useTranslation } from 'react-i18next';

export default function HeroComputer() {

  const { t } = useTranslation();

  return (
    <main>
      <div className="relative w-full h-[80vh] flex">
        {/* Background image filling the screen */}
        <img
          src="/logos/coverphoto_dark.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="relative z-10 text-white p-4 sm:px-8 md:px-12 lg:px-20 md:text-left mt-28 md:mt-32">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-customFont font-bold py-6">
            {t('hero-title')}
          </h1>
          <p className="text-2xl sm:text-xl md:text-2xl mb-6 font-customFont">
            {t('hero-text')}
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
