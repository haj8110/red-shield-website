'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Flame, Shield, Zap, Wrench, Settings, Database, CheckCircle, ArrowRight, Star, Clock, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [activeTab, setActiveTab] = useState('fire-fighting');
  
  const services = [
    { 
      id: 'fire-fighting', 
      title: 'Fire Fighting Systems', 
      icon: Flame, 
      description: 'Comprehensive fire detection and suppression systems for all environments.',
      features: ['Automatic fire detection systems', 'Manual fire alarm systems', 'Sprinkler systems', 'Fire extinguishers', 'Emergency lighting', 'Exit signage systems'], 
      applications: ['Commercial buildings', 'Industrial facilities', 'Residential complexes', 'Healthcare facilities'],
      color: 'text-red-500',
      bgColor: 'from-red-500/20 to-orange-500/20'
    },
    { 
      id: 'gas-suppression', 
      title: 'Fire Gas Suppression Systems', 
      icon: Shield, 
      description: 'Advanced gas-based fire suppression for sensitive equipment areas.',
      features: ['FM-200 gas suppression', 'CO2 fire suppression', 'Inert gas systems', 'Clean agent systems', 'Pre-engineered systems', 'Total flooding systems'], 
      applications: ['Data centers', 'Server rooms', 'Telecommunications', 'Museums and archives'],
      color: 'text-blue-500',
      bgColor: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      id: 'fire-pumps', 
      title: 'Fire Fighting Pumps', 
      icon: Zap, 
      description: 'High-performance pumps for reliable water-based fire suppression.',
      features: ['Electric fire pumps', 'Diesel fire pumps', 'Jockey pumps', 'Booster pumps', 'Horizontal split case pumps', 'Vertical turbine pumps'], 
      applications: ['High-rise buildings', 'Industrial plants', 'Water supply systems', 'Fire hydrant systems'],
      color: 'text-green-500',
      bgColor: 'from-green-500/20 to-emerald-500/20'
    },
    { 
      id: 'low-current', 
      title: 'Low Current Systems', 
      icon: Wrench, 
      description: 'Specialized low-voltage systems for enhanced safety and control.',
      features: ['Access control systems', 'CCTV surveillance', 'Intercom systems', 'Public address systems', 'Building automation', 'Security systems'], 
      applications: ['Office buildings', 'Shopping centers', 'Educational institutions', 'Government facilities'],
      color: 'text-purple-500',
      bgColor: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      id: 'software-tools', 
      title: 'Software Tools', 
      icon: Settings, 
      description: 'Advanced software solutions for fire safety management and monitoring.',
      features: ['Fire safety management software', 'Real-time monitoring systems', 'Maintenance scheduling', 'Compliance tracking', 'Reporting and analytics', 'Mobile applications'], 
      applications: ['Facility management', 'Safety compliance', 'Emergency response', 'Maintenance planning'],
      color: 'text-indigo-500',
      bgColor: 'from-indigo-500/20 to-blue-500/20'
    },
    { 
      id: 'other-systems', 
      title: 'Other Systems', 
      icon: Database, 
      description: 'Specialized systems including air sampling and gas detection.',
      features: ['Air sampling smoke detection', 'Gas detection systems', 'Flame detection', 'Heat detection', 'Linear heat detection', 'Aspirating smoke detection'], 
      applications: ['Warehouses', 'Manufacturing plants', 'Chemical facilities', 'Oil and gas industry'],
      color: 'text-orange-500',
      bgColor: 'from-orange-500/20 to-red-500/20'
    },
  ];

  const currentService = services.find(service => service.id === activeTab) || services[0];

  const benefits = [
    { icon: Award, title: 'Certified & Compliant', description: 'All systems meet international safety standards and local regulations.' },
    { icon: Users, title: 'Expert Installation', description: 'Professional installation by certified technicians with years of experience.' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock maintenance and emergency support services.' },
    { icon: Star, title: 'Custom Solutions', description: 'Tailored solutions designed specifically for your facility and requirements.' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg tracking-tight">
              Our <span className="text-[#CE2029]">Services</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Comprehensive fire safety solutions tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {services.map((service) => (
              <button 
                key={service.id} 
                onClick={() => setActiveTab(service.id)} 
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === service.id 
                    ? 'bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] text-white shadow-lg shadow-red-500/30' 
                    : 'bg-white/70 text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Service Details */}
            <div className="animate-fade-in">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${currentService.bgColor} shadow-lg`}>
                  <currentService.icon className={`h-8 w-8 ${currentService.color}`} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{currentService.title}</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 font-medium leading-relaxed">
                {currentService.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.05}s`, animationFillMode: 'both' }}>
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-blue-500 mr-2" />
                  Applications
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentService.applications.map((application, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-red-50 to-orange-50 text-red-800 px-4 py-2 rounded-full text-sm font-semibold border border-red-200 shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in"
                      style={{ animationDelay: `${0.2 + index * 0.05}s`, animationFillMode: 'both' }}
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="glass-card p-8 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Our {currentService.title}?
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a comprehensive assessment and customized fire safety solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm"
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