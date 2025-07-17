import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Flame, Zap, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: Flame,
      title: 'Fire Fighting Systems',
      description: 'Comprehensive fire detection and suppression systems for all environments.',
      color: 'text-red-500'
    },
    {
      icon: Shield,
      title: 'Gas Suppression Systems',
      description: 'Advanced gas-based fire suppression for sensitive equipment areas.',
      color: 'text-blue-500'
    },
    {
      icon: Zap,
      title: 'Fire Fighting Pumps',
      description: 'High-performance pumps for reliable water-based fire suppression.',
      color: 'text-green-500'
    },
    {
      icon: Wrench,
      title: 'Low Current Systems',
      description: 'Specialized low-voltage systems for enhanced safety and control.',
      color: 'text-purple-500'
    }
  ];

  const features = [
    '24/7 Emergency Response',
    'Certified Technicians',
    'Custom Solutions',
    'Maintenance Services',
    'Compliance Guaranteed',
    'Warranty Coverage'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section with Neumorphism Style */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f7f7f7] overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 gap-8 md:gap-16">
          {/* Glassmorphic Text/CTA Card (left, larger) */}
          <div className="flex-[1.5] max-w-2xl glassmorph rounded-2xl p-12 md:p-16 text-center md:text-left mx-auto md:mx-0 border border-white/30 shadow-2xl animate-fade-in" style={{backdropFilter: 'blur(18px) saturate(160%)', WebkitBackdropFilter: 'blur(18px) saturate(160%)'}}>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#CE2029] mb-6 tracking-tight drop-shadow-sm">
              Your Partner in <span className="text-[#CE2029]">Fire Safety Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
              Innovative Fire Safety Solutions for a Safer Tomorrow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/services"
                className="relative px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] shadow-lg border-none transition-all duration-200 flex items-center justify-center space-x-2 overflow-hidden group"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-glow" style={{boxShadow: '0 0 32px 8px #FF3C3C55'}}></span>
                <Flame className="h-5 w-5 mr-2 text-white drop-shadow" />
                <span>Explore Our Services</span>
                <ArrowRight className="h-5 w-5 ml-2 text-white drop-shadow" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-lg font-semibold text-[#CE2029] bg-white/70 border border-[#CE2029]/30 shadow-md hover:bg-[#FFF0F0] hover:text-[#B81B22] transition-all duration-200 backdrop-blur-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Neumorphic SVG Illustration (right) */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Neumorphic platform behind SVG */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-56 md:w-[28rem] md:h-72 rounded-3xl bg-[#f7f7f7] shadow-neumorph-inset" style={{ zIndex: 1 }} />
            <img
              src="/fire-prevention-animate.svg"
              alt="Fire Prevention Illustration"
              className="w-48 h-48 md:w-96 md:h-96 object-contain relative z-10"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <Image
              src="https://picsum.photos/400/300?random=2"
              alt="Fire safety illustration"
              width={400}
              height={300}
              className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-[#CE2029] mb-4">Protecting What Matters Most</h3>
              <p className="text-lg text-gray-700 mb-2">Our solutions are designed to safeguard your people, property, and peace of mind. We combine technology and expertise to deliver the highest standards in fire safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-[#fff7f7] via-[#f7f7fa] to-[#fff] animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-4 drop-shadow-lg tracking-tight animate-fade-in" style={{ animationDelay: '0.65s', animationFillMode: 'both' }}>
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              From fire detection to suppression systems, we provide complete fire safety solutions tailored for every environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card gradient-border p-8 rounded-2xl flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both', cursor: 'pointer' }}
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF3C3C]/90 via-[#CE2029]/90 to-[#FF7A3C]/80 shadow-lg border-4 border-white/60 floating-icon">
                  <service.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-[#CE2029] mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Red Shield Engineering?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience and a commitment to excellence, we ensure your safety is never compromised.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}>
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Free Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today for a comprehensive fire safety assessment of your facility.
              </p>
              <Link 
                href="/contact"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 shadow-lg hover:shadow-2xl transition-all duration-300 inline-block"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until it&apos;s too late. Contact Red Shield Engineering today for reliable fire safety solutions.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
