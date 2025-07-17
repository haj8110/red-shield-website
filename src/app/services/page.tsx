'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Flame, Shield, Zap, Wrench, Settings, Database, CheckCircle, ArrowRight } from 'lucide-react';
export default function Services() {
  const [activeTab, setActiveTab] = useState('fire-fighting');
  const services = [
    { id: 'fire-fighting', title: 'Fire Fighting Systems', icon: Flame, description: 'Comprehensive fire detection and suppression systems for all environments.', features: ['Automatic fire detection systems', 'Manual fire alarm systems', 'Sprinkler systems', 'Fire extinguishers', 'Emergency lighting', 'Exit signage systems'], applications: ['Commercial buildings', 'Industrial facilities', 'Residential complexes', 'Healthcare facilities'] },
    { id: 'gas-suppression', title: 'Fire Gas Suppression Systems', icon: Shield, description: 'Advanced gas-based fire suppression for sensitive equipment areas.', features: ['FM-200 gas suppression', 'CO2 fire suppression', 'Inert gas systems', 'Clean agent systems', 'Pre-engineered systems', 'Total flooding systems'], applications: ['Data centers', 'Server rooms', 'Telecommunications', 'Museums and archives'] },
    { id: 'fire-pumps', title: 'Fire Fighting Pumps', icon: Zap, description: 'High-performance pumps for reliable water-based fire suppression.', features: ['Electric fire pumps', 'Diesel fire pumps', 'Jockey pumps', 'Booster pumps', 'Horizontal split case pumps', 'Vertical turbine pumps'], applications: ['High-rise buildings', 'Industrial plants', 'Water supply systems', 'Fire hydrant systems'] },
    { id: 'low-current', title: 'Low Current Systems', icon: Wrench, description: 'Specialized low-voltage systems for enhanced safety and control.', features: ['Access control systems', 'CCTV surveillance', 'Intercom systems', 'Public address systems', 'Building automation', 'Security systems'], applications: ['Office buildings', 'Shopping centers', 'Educational institutions', 'Government facilities'] },
    { id: 'software-tools', title: 'Software Tools', icon: Settings, description: 'Advanced software solutions for fire safety management and monitoring.', features: ['Fire safety management software', 'Real-time monitoring systems', 'Maintenance scheduling', 'Compliance tracking', 'Reporting and analytics', 'Mobile applications'], applications: ['Facility management', 'Safety compliance', 'Emergency response', 'Maintenance planning'] },
    { id: 'other-systems', title: 'Other Systems', icon: Database, description: 'Specialized systems including air sampling and gas detection.', features: ['Air sampling smoke detection', 'Gas detection systems', 'Flame detection', 'Heat detection', 'Linear heat detection', 'Aspirating smoke detection'], applications: ['Warehouses', 'Manufacturing plants', 'Chemical facilities', 'Oil and gas industry'] },
  ];
  const currentService = services.find(service => service.id === activeTab) || services[0];
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our <span className="text-red-600">Services</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive fire safety solutions tailored to your specific needs</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => (
              <button key={service.id} onClick={() => setActiveTab(service.id)} className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === service.id ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{service.title}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-red-600"><currentService.icon className="h-12 w-12" /></div>
                <h2 className="text-3xl font-bold text-gray-900">{currentService.title}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">{currentService.description}</p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">{feature}</span></div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {currentService.applications.map((application, index) => (
                    <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">{application}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our {currentService.title}?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3"><CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-gray-900">Certified & Compliant</h4><p className="text-gray-600">All systems meet international safety standards and local regulations.</p></div></div>
                <div className="flex items-start space-x-3"><CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-gray-900">Expert Installation</h4><p className="text-gray-600">Professional installation by certified technicians with years of experience.</p></div></div>
                <div className="flex items-start space-x-3"><CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-gray-900">24/7 Support</h4><p className="text-gray-600">Round-the-clock maintenance and emergency support services.</p></div></div>
                <div className="flex items-start space-x-3"><CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-gray-900">Custom Solutions</h4><p className="text-gray-600">Tailored solutions designed specifically for your facility and requirements.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">Contact us today for a comprehensive assessment and customized fire safety solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"><span>Request Quote</span><ArrowRight className="h-5 w-5" /></button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200">Schedule Consultation</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 