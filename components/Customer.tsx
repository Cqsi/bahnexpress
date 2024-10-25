export default function Customer() {
    return (
      <div className="flex flex-col md:flex-row px-20 mx-auto my-8">
        {/* Left Column */}
        <div className="flex-1 flex items-center justify-center p-8">
          <p className="text-left text-5xl font-bold text-black">
            Kokonaisvaltainen ja ketterä kuljetusyhtiö, joka on luottamuksen arvoinen.
          </p>
        </div>
        {/* Right Column */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          {/* Top Row */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-semibold text-center text-black z-10">Asiakastyytyväisyys</p>
              <div className="flex items-center">
                <p className="text-4xl font-semibold text-black mr-2">5,0</p>
                <img src="/stars.jpg" alt="Stars rating" className="w-64 h-auto" />
              </div>
            </div>
          </div>
          {/* Bottom Row */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-semibold text-center text-black">
                Ulkomailta ajettua ajoneuvoja asiakkaille
              </p>
              <p className="text-6xl font-semibold text-center text-black mt-3">
                +450
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  