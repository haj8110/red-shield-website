import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Flame, Zap, Wrench, ArrowRight, CheckCircle, Play, Star, Users, Award } from 'lucide-react';
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

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Expert Technicians', icon: Users },
    { number: '24/7', label: 'Emergency Support', icon: Shield },
    { number: '100%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Mixed Background - Combining All Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
          
          {/* Base Geometric Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Diagonal Lines */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-500/8 to-transparent transform rotate-12"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500/8 to-transparent transform -rotate-12"></div>
              
              {/* Geometric Shapes */}
              <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-300/25 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-red-400/25 transform rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-400/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Additional Geometric Elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-red-400/20 transform rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-orange-300/10 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-red-300/20 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(206,32,41,0.08)_1px,transparent_0)] bg-[length:25px_25px]"></div>
            </div>
          </div>
          
          {/* Particle System */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
            {[...Array(10)].map((_, i) => (
              <div
                key={`orange-${i}`}
                className="absolute w-1.5 h-1.5 bg-orange-400/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Wave Effect at Bottom */}
          <svg className="absolute bottom-0 left-0 w-full h-24 text-red-200/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".2" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
          
          {/* Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/3 via-transparent to-orange-500/3"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/2 to-orange-500/2"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-red-500/1 to-transparent"></div>
          
          {/* Animated Light Rays */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-400/10 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-orange-400/10 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-300/8 to-transparent animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-red-600/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-600/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-red-400/15 rounded-full animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '3.2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-orange-400/15 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '4.8s' }}></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full h-full px-4 gap-8 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200 text-red-700 font-semibold text-sm mb-6 animate-slide-down">
              <Shield className="h-4 w-4 mr-2" />
              Leading Fire Safety Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-orange-600">
                Your Safety
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-red-700">
                Our Priority
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium leading-relaxed">
              Advanced fire safety solutions that protect lives, property, and peace of mind. 
              <span className="text-red-600 font-semibold"> Trusted by 500+ clients</span> across the region.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}>
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link 
                href="/services"
                className="group relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-red-700 to-orange-600 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Flame className="h-5 w-5 mr-2 text-white relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="h-5 w-5 ml-2 text-white relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact"
                className="group px-8 py-4 rounded-xl font-semibold text-red-600 bg-white/90 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm hover:bg-white"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Certified & Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Main Hero Image */}
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              
              {/* Glassmorphic Container */}
              <div className="relative glass-card p-8 rounded-3xl shadow-2xl border border-white/30 backdrop-blur-xl">
                <div className="relative z-10">
                  <img
                    src="/fire-prevention-animate.svg"
                    alt="Fire Safety Solutions"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain animate-float"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                
                {/* Floating Elements Around Image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-red-600/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>

            {/* Video Play Button Overlay */}
            <div className="absolute bottom-8 right-8">
              <button className="group w-16 h-16 bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:scale-110">
                <Play className="h-6 w-6 text-red-600 ml-1 group-hover:text-red-700 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-600 rounded-full mt-2 animate-pulse"></div>
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
