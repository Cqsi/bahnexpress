export default function Pros() {

  const stats = [
    { number: "2-3", description: "Päivää keskimääräinen toimitusaika" },
    { number: "300-500€", description: "Asiakkaidemme arvioima säästö kuljetuksissa" },
    { number: "30%", description: "Nopeampi varastonkierto" },
  ]

  return (

    <div className="px-5 sm:px-6 md:px-8 lg:px-24 xl:px-24 py-12">
      <div className="bg-[#F9EDCC] rounded-lg max-w mx-auto p-8 pt-16">
          <h2 className="font-customFont text-5xl text-center mb-8">
              Auto <i>kolmessa päivässä</i> Ruotsista liikkeen pihalle
          </h2>

          
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-4 bg-background min-h-[200px]"
                >
                  <span className={`text-5xl md:text-6xl font-bold mb-2 ${
                    index === 1 ? 'text-green-500' : 'text-primary'
                  }`}>
                    {stat.number}
                  </span>
                  <p className="text-center text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}