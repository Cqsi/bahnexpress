import React from 'react';
import { InfoBox } from './InfoBox';
import { FaMoneyCheckAlt, FaClock } from 'react-icons/fa';
import { HiLightningBolt } from "react-icons/hi";
import { useTranslation } from 'react-i18next';


export default function App() {

  const {t} = useTranslation();

  const boxes = [
    {
      title: "30%",
      description: t('percent'),
      icon: <HiLightningBolt />,
    },
    {
      title: "400€",
      description: t('money'),
      icon: <FaMoneyCheckAlt />,
    },
    {
      title: "2,2",
      description: t('time'),
      icon: <FaClock />,
    },
  ];

  return (
    <div className="bg-sky-100 min-h-screen">
      <section className="container mx-auto px-4 lg:px-16 pt-16 pb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-800 text-center mb-16">
          {t('sweden')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mx-auto mt-8">
          {boxes.map((box, index) => (
            <InfoBox key={index} title={box.title} description={box.description} icon={box.icon} />
          ))}
        </div>
      </section>
    </div>
  );
}
