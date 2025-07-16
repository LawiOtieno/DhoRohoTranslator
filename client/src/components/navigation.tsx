import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, Info } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <a href="https://maps.app.goo.gl/n83SKs5SGdsrvZse6" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.imgur.com/BUxE9oF.jpg" 
                  alt="Ruwe Holy Ghost Church Logo" 
                  className="h-10 w-10 rounded-full shadow-md"
                />
              </a>
              <div className="hidden sm:block">
                <a href="https://dho-roho-translator.vercel.app/" rel="noopener noreferrer">
                  <h1 className="text-xl font-bold text-gray-800">Dho Roho</h1>
                </a>
                <a href="https://dho-roho-translator.vercel.app/" rel="noopener noreferrer">
                  <p className="text-xs text-gray-500">Translator</p>
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-red-600 hover:bg-gray-50 ${
                isActive("/") ? "text-red-600 bg-red-50" : "text-gray-700"
              }`}>
                <Home className="inline mr-2" size={16} />
                Home
              </Link>
              <Link href="/about" className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-red-600 hover:bg-gray-50 ${
                isActive("/about") ? "text-red-600 bg-red-50" : "text-gray-700"
              }`}>
                <Info className="inline mr-2" size={16} />
                About Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <a href="https://maps.app.goo.gl/n83SKs5SGdsrvZse6" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.imgur.com/UkrjXEc.jpg" 
                  alt="Ruwe Holy Ghost Church Logo" 
                  className="h-8 w-8 rounded-full"
                />
              </a>
              <span className="font-semibold text-gray-800">Dho Roho</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="px-4 py-6 space-y-4">
            <Link href="/" onClick={closeMobileMenu} className={`mobile-nav-link w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-red-600 hover:bg-gray-50 flex items-center ${
              isActive("/") ? "text-red-600 bg-red-50" : "text-gray-700"
            }`}>
              <Home className="mr-3" size={20} />
              Home
            </Link>
            <Link href="/about" onClick={closeMobileMenu} className={`mobile-nav-link w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-red-600 hover:bg-gray-50 flex items-center ${
              isActive("/about") ? "text-red-600 bg-red-50" : "text-gray-700"
            }`}>
              <Info className="mr-3" size={20} />
              About Us
            </Link>
          </nav>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}
