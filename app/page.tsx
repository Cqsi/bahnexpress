'use client'

import { NavbarComponent } from "@/components/navbar";
import HeroComputer from "@/components/HeroComputer";
import Customer from "@/components/Customer";
import Stats from "@/components/pros";
import Quote from "@/components/quote";
import Footer from "@/components/foot";

import '../lib/i18n';

/*
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Pros from "@/components/pros";
import LogoSlider from "@/components/LogoSlider";
import Hero from "@/components/hero2";
import Buyer from "@/components/buyer";
import HeroComputer from "@/components/HeroComputer";
import Footer from "@/components/Footer";
import Quote from "@/components/quote";
import LogoSlider from "@/components/LogoSliderTest";
import HeroMobile from "@/components/HeroMobile";
*/

export default function Home() {

  return (
    <div className="overflow-x-hidden w-full">
      <NavbarComponent></NavbarComponent>
      <HeroComputer></HeroComputer>
      <Customer></Customer>
      <Stats></Stats>
      <Quote></Quote>
      <Footer></Footer>
    </div>
  );
}
