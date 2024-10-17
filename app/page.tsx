import { NavbarComponent } from "@/components/navbar";
import Hero2 from "@/components/hero2";

/*
import Hero from "@/components/hero2";
import Pros from "@/components/pros";
import Buyer from "@/components/buyer";
import Quote from "@/components/quote";
*/

export default function Home() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Hero2></Hero2>   
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center">Next Section</h2>
        {/* More content */}
      </div>
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center">Next Section</h2>
        {/* More content */}
      </div>
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center">Next Section</h2>
        {/* More content */}
      </div>
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center">Next Section</h2>
        {/* More content */}
      </div>
    </div>
  );
}
