import Footer from "@/components/foot";
import { NavbarComponent } from "@/components/navbar";
import Image from "next/image";

export default function Palvelut() {
  const sections = [
    {
      title: "Ostajille",
      content:
        "Saat autosi nopeasti ja varmasti perille ilman, että katteet ehtivät sulaa. Näin varastosi kiertää tehokkaammin ja toimintasi pysyy sujuvana.",
      image: "/car.webp",
    },
    {
      title: "Myyjille",
      content:
        "Saat nopeasti laadukkaat myyntikuvat käyttöösi, jolloin myynnin aloittaminen on nopeaa ja vaivatonta.",
      image: "/dealership.webp",
    },
    {
      title: "Kuskeille",
      content:
        "Lisätuloa aikataulujesi mukaan ja laadukkaat autot sekä reilut palkkiot varmistavat, että saat ansaitsemasi korvauksen.",
      image: "/driver.webp",
    },
  ];

  return (
    <div className="w-full">
      <NavbarComponent />
      <div className="flex flex-col space-y-4 mb-24 mt-28 md:px-12 lg:px-28 xl:px-36">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8 bg-white rounded-lg p-6 lg:p-10"
          >
            {/* Text Content */}
            <div className="md:w-1/2 lg:w-3/5 flex flex-col justify-center space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">{section.title}</h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">{section.content}</p>
            </div>
            {/* Image Content */}
            <div className="w-full md:w-1/2 lg:w-2/5 relative aspect-[8/4] md:aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-lg shadow-md">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
