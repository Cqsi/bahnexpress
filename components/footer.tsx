import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
            <Image
                src="/be_logo.png"
                alt="Company Logo"
                width={40}
                height={40}
                className="mr-2"
            />
          <span className="text-xl font-bold">Bahn Express</span>
        </div>
        <div className="text-sm">
          <p>&copy; 2024 Bahn Express</p>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}