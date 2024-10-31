import { Quote } from "lucide-react";

export default function CustomerQuote() {
  return (
    <div className="mx-auto px-8 sm:px-12 md:px-12 lg:px-24 xl:px-24 py-4 md:py-20 bg-[#2E4571] text-foreground">
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        <div className="flex-1 space-y-4 font-customFont">
          <Quote className="w-16 h-16 text-white" />
          <blockquote className="space-y-4">
            <p className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Ylivertaisen helppo ja nopea palvelu kuljettaa autoja
            </p>
            <footer className="text-2xl text-white">
              – Ostojohtaja, asiakasyritys
            </footer>
          </blockquote>
        </div>
        <div className="flex-1 bg-slate-400">
          <img 
            src="/placeholder.svg?height=400&width=400" 
            alt="Placeholder image" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Three Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 mb-10">
        {[
          {
            title: "Ostajille",
            content: "Saat autosi nopeasti ja varmasti perille ilman, että katteet ehtivät sulaa. Näin varastosi kiertää tehokkaammin ja toimintasi pysyy sujuvana."
          },
          {
            title: "Myyjille",
            content: "Saat nopeasti laadukkaat myyntikuvat käyttöösi, jolloin myynnin aloittaminen on nopeaa ja vaivatonta."
          },
          {
            title: "Kuskeille",
            content: "Lisätuloa aikataulujesi mukaan ja laadukkaat autot sekä reilut palkkiot varmistavat, että saat ansaitsemasi korvauksen."
          }
        ].map((box, index) => (
          <div 
            key={index} 
            className="relative pl-4 group hover-scale-on-hover transition-transform duration-300"
          >
            {/* Solid line */}
            <div className="absolute left-0 top-0 h-full w-[2.5px] bg-white"></div>
            
            <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">
              {box.title}
            </h3>
            <p className="text-xl text-white/80 leading-relaxed">
              {box.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}