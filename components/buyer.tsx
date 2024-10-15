import { Car, ShoppingCart, Truck } from "lucide-react"

export default function Buyer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
            <ShoppingCart className="text-primary-foreground w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Ostajille</h2>
          <p className="text-muted-foreground">
            Voit luottaa siihen, että saat autosi nopeasti, helposti ja varmasti perille. Katteesi eivät ehdi sulaa nopean toimituksen aikana ja saat varastosi kiertämään nopeammin.
          </p>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
            <Car className="text-primary-foreground w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Myyjille</h2>
          <p className="text-muted-foreground">
            Saat käyttöösi nopeasti laadukkaat myyntikuvat ja pääset aloittamaan myynnin heti.
          </p>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
            <Truck className="text-primary-foreground w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Kuskeille</h2>
          <p className="text-muted-foreground">
            Aikataulujesi mukaisesti joustavaa lisätuloa, laadukkaita autoja ja reilut palkkiot.
          </p>
        </div>
      </div>
    </div>
  )
}