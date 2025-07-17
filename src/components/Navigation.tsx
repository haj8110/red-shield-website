'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Shield } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-900">Red Shield</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">{item.name}</Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600">
              {isOpen ? (<X className="h-6 w-6" />) : (<Menu className="h-6 w-6" />)}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>{item.name}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation; 