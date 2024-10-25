import React from 'react';
import { InfoBox } from './InfoBox';
import { FaMoneyCheckAlt, FaClock } from 'react-icons/fa'; // Importing icons

import { HiLightningBolt } from "react-icons/hi";

function App() {
  const boxes = [
    {
      title: "30%",
      description: "Nopeampi varastonkierto",
      icon: <HiLightningBolt/>, // Icon for stock turnover
    },
    {
      title: "300-500€",
      description: "Asiakkaidemme arvioima säästö kuljetuksissa",
      icon: <FaMoneyCheckAlt />, // Icon for delivery savings
    },
    {
      title: "2,2",
      description: "Päivää keskimääräinen toimitusaika",
      icon: <FaClock />, // Icon for delivery time
    },
  ];

  return (
    <div className="bg-sky-100">
      <section className="container mx-auto px-4 lg:px-24 pt-16 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-800 text-center mb-16">
          Auto kolmessa päivässä Ruotsista liikkeen pihalle
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto mt-20">
          {boxes.map((box, index) => (
            <div key={index} className="flex flex-col">
              <InfoBox title={box.title} description={box.description} icon={box.icon} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;