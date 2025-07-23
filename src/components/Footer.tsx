import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">Red Shield Engineering</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">Your Partner in Fire Protection Engineering. Comprehensive fire protection system engineering, estimation, design, and drafting solutions for System Integrators, MEP Contractors, and Consultants.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-red-500 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-red-500 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">12-1-17, Vinayagar Street, Surandai – 627859, Tenkasi District, Tamil Nadu, India.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-300 text-sm">+91 8015019219</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-300 text-sm">sales@redshieldengineering.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-red-500" />
                <span className="text-gray-300 text-sm">www.redshieldengineering.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Red Shield Engineering. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer; 