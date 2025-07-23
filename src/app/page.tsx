import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Shield, Flame, Zap, Wrench, ArrowRight, CheckCircle, Play, Star, Users, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: Flame,
      title: 'Fire Protection Engineering',
      description: 'Comprehensive fire protection system engineering and design solutions.',
      color: 'text-red-500'
    },
    {
      icon: Shield,
      title: 'Estimation & Cost Analysis',
      description: 'Detailed cost analysis and material take-offs for fire protection systems.',
      color: 'text-blue-500'
    },
    {
      icon: Zap,
      title: 'System Design & Architecture',
      description: 'Advanced fire protection system design and architectural planning.',
      color: 'text-green-500'
    },
    {
      icon: Wrench,
      title: 'Technical Drafting & CAD',
      description: 'Professional technical drawings and CAD documentation for fire protection systems.',
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
    { number: 'NFPA', label: 'Certified Engineers', icon: Award },
    { number: 'GCC', label: 'Market Coverage', icon: Users },
    { number: '24/7', label: 'Technical Support', icon: Shield },
    { number: '100%', label: 'Code Compliance', icon: Star }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <SEOHead 
        title="Red Shield Engineering - Leading Fire Protection Engineering Solutions"
        description="Expert fire protection system engineering, estimation, design, and drafting solutions. NFPA certified engineers serving System Integrators, MEP Contractors, and Consultants worldwide."
        keywords="fire protection engineering, fire safety systems, NFPA certified, fire protection design, estimation services, technical drafting, MEP contractors, system integrators"
        ogType="website"
        canonicalUrl="https://redshieldengineering.com"
      />
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-4rem)] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24">
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

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8 gap-8 lg:gap-16 mx-auto max-w-7xl py-8 sm:py-12 lg:py-16">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left" data-aos="fade-right" data-aos-duration="1000">
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200 text-red-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6" data-aos="fade-down" data-aos-delay="200">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Leading Fire Protection Engineering
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-orange-600">
                Your Safety
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-red-700">
                Our Priority
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 font-medium leading-relaxed" data-aos="fade-up" data-aos-delay="600">
              Advanced fire protection engineering solutions that protect lives, property, and peace of mind. 
              <span className="text-red-600 font-semibold"> Trusted by System Integrators, MEP Contractors, and Consultants</span> across the GCC and international markets.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={800 + index * 100}>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="1200">
              <Link 
                href="/services"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-red-700 to-orange-600 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Flame className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 text-white relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-red-600 bg-white/90 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm hover:bg-white text-sm sm:text-base"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600" data-aos="fade-up" data-aos-delay="1400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span>Certified & Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 flex justify-center items-center relative mt-8 lg:mt-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            {/* Main Hero Image */}
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              
              {/* Glassmorphic Container */}
              <div className="relative glass-card p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl border border-white/30 backdrop-blur-xl">
                <div className="relative z-10">
                  <Image
                    src="/fire-prevention-animate.svg"
                    alt="Fire Protection Engineering Solutions"
                    width={320}
                    height={320}
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain animate-float"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                
                {/* Floating Elements Around Image */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 bg-red-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-6 h-6 sm:w-12 sm:h-12 bg-orange-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-4 sm:-left-8 w-4 h-4 sm:w-8 sm:h-8 bg-red-600/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>

            {/* Video Play Button Overlay */}
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8">
              <button className="group w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:scale-110">
                <Play className="h-4 w-4 sm:h-6 sm:w-6 text-red-600 ml-1 group-hover:text-red-700 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Image Section with Real Fire Protection Engineering Images */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white image-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Images */}
            <div className="space-y-6 sm:space-y-8">
              {/* Main Image */}
              <div className="relative image-hover-container" data-aos="fade-right" data-aos-delay="200">
                <Image
                  src="/Home/engineers-are-checking-fire-extinguishers.jpg"
                  alt="Professional engineers checking fire extinguishers"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover w-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">Professional Inspection</p>
                  </div>
                </div>
              </div>
              
              {/* Secondary Image */}
              <div className="relative image-hover-container" data-aos="fade-right" data-aos-delay="400">
                <Image
                  src="/Home/engineers-pull-out-safety-pin-fire-extinguishers.jpg"
                  alt="Engineers performing safety procedures on fire extinguishers"
                  width={600}
                  height={300}
                  className="rounded-2xl shadow-xl object-cover w-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">Safety Procedures</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Content */}
            <div className="space-y-6 sm:space-y-8" data-aos="fade-left" data-aos-delay="300">
              <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#CE2029]">Protecting What Matters Most</h3>
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Our expert engineers ensure your fire protection systems are always in perfect condition. With meticulous attention to detail and industry-leading expertise, we provide comprehensive fire protection engineering solutions that protect lives and property.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Professional Installation</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Certified technicians with years of experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Regular Maintenance</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Scheduled inspections and preventive care</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">24/7 Emergency Support</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Round-the-clock emergency response</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Compliance Guaranteed</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Meet all safety standards and regulations</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link 
                    href="/services"
                    className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center text-sm sm:text-base"
                  >
                    Explore Services
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-red-600 text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#fff7f7] via-[#f7f7fa] to-[#fff] overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-4 drop-shadow-lg tracking-tight" data-aos="fade-up" data-aos-delay="200">
              Our Comprehensive Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
              From fire protection engineering to technical drafting, we provide complete fire protection solutions for System Integrators, MEP Contractors, and Consultants.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card gradient-border p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                style={{ cursor: 'pointer' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF3C3C]/90 via-[#CE2029]/90 to-[#FF7A3C]/80 shadow-lg border-4 border-white/60 floating-icon">
                  <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#CE2029] mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-medium mb-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose Red Shield Engineering?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                With years of experience and a commitment to excellence, we ensure your safety is never compromised.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay={300 + index * 100}>
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-6 sm:p-8" data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Get Your Free Consultation
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Contact us today for a comprehensive fire protection engineering assessment of your facility.
              </p>
              <Link 
                href="/contact"
                className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-red-700 shadow-lg hover:shadow-2xl transition-all duration-300 inline-block text-sm sm:text-base"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-red-600" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-xl" data-aos="fade-up" data-aos-delay="200">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-6 sm:mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Don&apos;t wait until it&apos;s too late. Contact Red Shield Engineering today for reliable fire protection engineering solutions.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 inline-block text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Get Started Today
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
