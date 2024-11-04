'use client'

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'

const languages = [
  { code: 'fi', name: 'Suomi' },
  { code: 'en', name: 'English' },
]

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('fi')
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    setIsLangDropdownOpen(false)
    // Here you would typically also change the language in your i18n setup
  }

  const closeNavbar = () => {
    setIsOpen(false);
  }

  const handleLinkClick = (href: string) => {
    if (href === window.location.pathname) {
      window.location.reload(); // Reload the page if the link is active
    } else {
      closeNavbar(); // Close the navbar if the link is different
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false) // Hide navbar on scroll down
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true) // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsVisible(true); // Reveal navbar on first scroll after delay
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, 2000); // Adjust the delay (e.g., 2000ms for 2 seconds)
  
    return () => clearTimeout(delay); // Clear the delay if component unmounts
  }, []);

  return (
    <nav
      className={`fixed top-0 w-[100%] bg-white z-50 border-b-2 border-b-gray-700 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="mx-auto px-6 sm:px-12 md:px-12 lg:px-20 xl:px-20">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/">
              <img src="/be_logo.png" alt="Bahn Express Logo" className="h-16 w-auto" />
            </Link>

            <div className="hidden md:block font-customFont">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" onClick={() => handleLinkClick('/')} className="text-black hover:bg-[#e6effa] px-8 py-2 rounded-md text-xl font-medium">Etusivu</Link>
                {/* <Link href="/pages/palvelut" onClick={() => handleLinkClick('/pages/palvelut')} className="text-black hover:bg-[#e6effa] px-8 py-2 rounded-md text-xl font-medium">Palvelut</Link> */}
                <Link href="/pages/yhteistiedot" onClick={() => handleLinkClick('/pages/yhteistiedot')} className="text-black hover:bg-[#e6effa] px-8 py-2 rounded-md text-xl font-medium">Yhteistiedot</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center text-black hover:bg-[#e6effa] px-3 py-2 rounded-md text-xl font-medium"
                aria-haspopup="true"
                aria-expanded={isLangDropdownOpen}
              >
                <Globe className="mr-2" />
                {languages.find(lang => lang.code === currentLang)?.name}
                <ChevronDown className="ml-2" />
              </button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none hover-blue-on-hover"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => handleLinkClick('/')} className="text-black hover:bg-[#e6effa] block px-3 py-2 rounded-md text-base font-medium">Etusivu</Link>
            {/* <Link href="/pages/palvelut" onClick={() => handleLinkClick('/pages/palvelut')} className="text-black hover:bg-[#e6effa] block px-3 py-2 rounded-md text-base font-medium">Palvelut</Link> */}
            <Link href="/pages/yhteistiedot" onClick={() => handleLinkClick('/pages/yhteistiedot')} className="text-black hover:bg-[#e6effa] block px-3 py-2 rounded-md text-base font-medium">Yhteistiedot</Link>
            <div className="mt-4 border-t pt-4">
              <p className="px-3 text-sm font-medium text-gray-500">Select Language</p>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left text-black hover:bg-[#e6effa] block px-3 py-2 rounded-md text-base font-medium ${currentLang === lang.code ? 'bg-[#e6effa]' : ''}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
