'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Flame, Shield, Zap, CheckCircle, ArrowRight, Star, Clock, Users, Award, Droplets, Cpu, Gauge, Building, Factory } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [activeTab, setActiveTab] = useState('fire-fighting');
  
  const engineeringServices = {
    overview: "We provide the following engineering services in compliance with NFPA standards, SBC codes, KSA Civil Defense, HCIS regulations, SEC standards, Dubai Civil Defense, Indian standards, and other international codes, serving commercial, industrial, and government sectors.",
    systems: [
      {
        id: 'fire-fighting',
        title: 'FIRE FIGHTING SYSTEMS',
        icon: Flame,
        color: 'text-red-500',
        bgColor: 'from-red-500/20 to-orange-500/20',
        description: 'Comprehensive fire fighting systems including extinguishers, sprinklers, hydrants, and specialized suppression systems.',
        features: [
          'Fire Extinguishers (CO, Dry Powder, Foam, Water, Wet Chemical and Clean agent)',
          'Dry & Wet Standpipe Systems',
          'Fire Hydrants (All Types)',
          'Wet and Dry Sprinkler System',
          'Deluge Medium Velocity Water Spray System',
          'Deluge High Velocity Water Spray System',
          'Pre-Action System',
          'Foam System (Fuel Storage, Aircraft Hanger, Chemical Rack Storage & Generator)',
          'Water Mist System'
        ],
        applications: ['Commercial buildings', 'Industrial facilities', 'High-rise structures', 'Shopping centers']
      },
      {
        id: 'gas-suppression',
        title: 'FIRE GAS SUPPRESSION SYSTEM',
        icon: Droplets,
        color: 'text-blue-500',
        bgColor: 'from-blue-500/20 to-cyan-500/20',
        description: 'Advanced gas-based fire suppression systems for sensitive equipment and critical areas.',
        features: [
          'HFC-227ea Clean Agent System',
          'FK-5-1-12 Clean Agent System',
          'High Pressure Carbon Dioxide System',
          'Inert Gas System',
          'Wet Chemical (Kitchen Hood) Suppression System',
          'Aerosol System',
          'Automatic Tubing System'
        ],
        applications: ['Data centers', 'Server rooms', 'Telecommunications', 'Museums and archives']
      },
      {
        id: 'fire-pumps',
        title: 'FIRE FIGHTING PUMPS',
        icon: Gauge,
        color: 'text-orange-500',
        bgColor: 'from-orange-500/20 to-red-500/20',
        description: 'Specialized fire pump system design and engineering for water-based fire suppression.',
        features: [
          'Horizontal Split Case Fire pump',
          'Vertical Turbine Fire Pump',
          'End Suction Fire Pump',
          'Skid Fire Pump'
        ],
        applications: ['High-rise buildings', 'Industrial plants', 'Water supply systems', 'Fire hydrant systems']
      },
      {
        id: 'low-current',
        title: 'LOW CURRENT SYSTEM',
        icon: Zap,
        color: 'text-purple-500',
        bgColor: 'from-purple-500/20 to-pink-500/20',
        description: 'Advanced fire alarm and detection systems for comprehensive building protection.',
        features: [
          'Addressable Fire Alarm System',
          'Addressable Releasing System',
          'Conventional Fire Alarm System',
          'Conventional Releasing System',
          'Linear Heat Detection System',
          'Air Sampling System',
          'Fire Rated Cable',
          'Gas Detection System',
          'Battery Operated Detector',
          'Voice Evacuation System'
        ],
        applications: ['Office buildings', 'Healthcare facilities', 'Educational institutions', 'Hotels']
      },
      {
        id: 'software-tools',
        title: 'SOFTWARE TOOLS',
        icon: Cpu,
        color: 'text-green-500',
        bgColor: 'from-green-500/20 to-emerald-500/20',
        description: 'Professional software tools for fire protection system design and analysis.',
        features: [
          'PIPENET & HASS Fire pump Software',
          'HYGOOD Clean Agent Software',
          'SAPPHIRE/SAPPHIRE PLUS Clean Agent Software',
          'ANSUL Clean Agent Software',
          'SIEX Clean Agent Software',
          'SIEX CO2 Software',
          'KIDDE Clean Agent Software',
          'KIDDE CO2 Software',
          'VIKING Clean Agent Software',
          'VIKING CO2 Software'
        ],
        applications: ['System Integrators', 'MEP Contractors', 'Consultants', 'Design Engineers']
      }
    ]
  };

  const currentService = engineeringServices.systems.find(service => service.id === activeTab) || engineeringServices.systems[0];

  const benefits = [
    { icon: Award, title: 'NFPA Certified', description: 'All designs meet NFPA standards and local fire codes.' },
    { icon: Users, title: 'Expert Engineers', description: 'Highly qualified NFPA-certified engineers with deep industry knowledge.' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock technical support and consultation services.' },
    { icon: Star, title: 'Cost-Efficient', description: 'Reliable, cost-efficient solutions that adhere to all relevant codes and standards.' }
  ];

  const sectors = [
    { icon: Building, title: 'Commercial', description: 'Office buildings, shopping centers, hotels' },
    { icon: Factory, title: 'Industrial', description: 'Manufacturing plants, warehouses, processing facilities' },
    { icon: Shield, title: 'Government', description: 'Public buildings, military facilities, government offices' }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Fire Protection Engineering Services - Red Shield Engineering"
        description="Comprehensive fire protection engineering services including fire fighting systems, gas suppression, fire pumps, and low current systems. NFPA certified solutions for commercial and industrial applications."
        keywords="fire protection services, fire fighting systems, gas suppression, fire pumps, low current systems, NFPA certified, fire safety engineering, sprinkler systems, fire alarm systems"
        ogType="website"
        canonicalUrl="https://redshieldengineering.com/services"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6 shadow-lg">
              <Flame className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg tracking-tight">
              Our <span className="text-[#CE2029]">Services</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
              Comprehensive fire protection engineering solutions for System Integrators, MEP Contractors, and Consultants
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6 shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg">
              ENGINEERING SERVICES
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {engineeringServices.overview}
            </p>
          </div>

          {/* Services Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="200">
            {engineeringServices.systems.map((service) => (
              <button 
                key={service.id} 
                onClick={() => setActiveTab(service.id)} 
                className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === service.id 
                    ? 'bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] text-white shadow-xl shadow-red-500/30 ring-2 ring-red-200' 
                    : 'bg-white/80 text-gray-700 hover:bg-gray-50 border-2 border-gray-200 shadow-lg hover:shadow-xl backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <service.icon className={`h-5 w-5 ${activeTab === service.id ? 'text-white' : 'text-gray-600'}`} />
                  <span className="text-sm sm:text-base">{service.title}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Service Details */}
            <div className="animate-fade-in" data-aos="fade-right" data-aos-delay="400">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${currentService.bgColor} shadow-xl ring-4 ring-white`}>
                  <currentService.icon className={`h-10 w-10 ${currentService.color}`} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{currentService.title}</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 font-medium leading-relaxed bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                {currentService.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  System Features
                </h3>
                <div className="space-y-4">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 animate-fade-in p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200" style={{ animationDelay: `${0.1 + index * 0.05}s`, animationFillMode: 'both' }}>
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-blue-500 mr-3" />
                  Applications
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentService.applications.map((application, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-red-50 to-orange-50 text-red-800 px-4 py-3 rounded-full text-sm font-semibold border-2 border-red-200 shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in hover:scale-105"
                      style={{ animationDelay: `${0.2 + index * 0.05}s`, animationFillMode: 'both' }}
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="glass-card p-8 rounded-2xl shadow-xl animate-fade-in border border-gray-100" style={{ animationDelay: '0.3s', animationFillMode: 'both' }} data-aos="fade-left" data-aos-delay="600">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4 shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Choose Our {currentService.title}?
                </h3>
              </div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200" style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex-shrink-0 shadow-lg">
                      <benefit.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6 shadow-lg">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg">
              Sectors We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="glass-card p-8 text-center rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in border border-gray-100 hover:border-red-200"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="text-red-600 mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center shadow-lg">
                    <sector.icon className="h-8 w-8" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{sector.title}</h4>
                <p className="text-gray-600 leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.7s', animationFillMode: 'both' }} data-aos="fade-up">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 shadow-lg backdrop-blur-sm">
            <ArrowRight className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today for comprehensive fire protection engineering solutions tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group transform hover:scale-105"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 