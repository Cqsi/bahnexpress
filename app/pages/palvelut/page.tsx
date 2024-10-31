import Footer from "@/components/foot";
import { NavbarComponent } from "@/components/navbar";
import Image from "next/image";


export default function Palvelut() {

    const sections = [
      {
        title: "Ostajille",
        content: "Saat autosi nopeasti ja varmasti perille ilman, että katteet ehtivät sulaa. Näin varastosi kiertää tehokkaammin ja toimintasi pysyy sujuvana.",
        image: "/car.jpg"
      },
      {
        title: "Myyjille",
        content: "Saat nopeasti laadukkaat myyntikuvat käyttöösi, jolloin myynnin aloittaminen on nopeaa ja vaivatonta.",
        image: "/dealership.jpg"
      },
      {
        title: "Kuskeille",
        content: "Lisätuloa aikataulujesi mukaan ja laadukkaat autot sekä reilut palkkiot varmistavat, että saat ansaitsemasi korvauksen.",
        image: "/driver.jpg"
      }
    ]

    return ( 
      <div className="w-full">
        <NavbarComponent></NavbarComponent>
        <div className="flex flex-col space-y-16 mb-24">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-full relative aspect-[8/4]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 mt-4">
                <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                <p className="text-lg text-gray-600">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer></Footer>
      </div>   
    );
  }