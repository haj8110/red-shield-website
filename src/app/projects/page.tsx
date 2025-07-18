'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Layers, Search, Filter, Award, Clock, Users, Building, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projectsData = [
  { 
    name: 'Al Noor Hospital', 
    scope: 'Fire Fighting System, Gas Suppression', 
    location: 'Abu Dhabi', 
    systemType: 'Healthcare',
    status: 'Completed',
    year: '2023',
    description: 'Comprehensive fire safety system for a major healthcare facility'
  },
  { 
    name: 'Skyline Towers', 
    scope: 'Fire Fighting Pumps, Low Current Systems', 
    location: 'Dubai', 
    systemType: 'Residential',
    status: 'Completed',
    year: '2023',
    description: 'High-rise residential complex with advanced fire protection'
  },
  { 
    name: 'Tech Data Center', 
    scope: 'Gas Suppression, Software Tools', 
    location: 'Riyadh', 
    systemType: 'Data Center',
    status: 'Ongoing',
    year: '2024',
    description: 'State-of-the-art data center with gas suppression systems'
  },
  { 
    name: 'Green Mall', 
    scope: 'Fire Fighting System, Fire Pumps', 
    location: 'Jeddah', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023',
    description: 'Large commercial mall with integrated fire safety systems'
  },
  { 
    name: 'PetroChem Plant', 
    scope: 'Gas Detection, Air Sampling', 
    location: 'Dammam', 
    systemType: 'Industrial',
    status: 'Completed',
    year: '2023',
    description: 'Industrial facility with specialized gas detection systems'
  },
  { 
    name: 'University Campus', 
    scope: 'Fire Fighting System, Low Current Systems', 
    location: 'Sharjah', 
    systemType: 'Educational',
    status: 'Ongoing',
    year: '2024',
    description: 'Educational institution with comprehensive safety systems'
  },
];

const locations = [...new Set(projectsData.map((p) => p.location))];
const systemTypes = [...new Set(projectsData.map((p) => p.systemType))];

export default function Projects() {
  const [locationFilter, setLocationFilter] = useState('');
  const [systemTypeFilter, setSystemTypeFilter] = useState('');
  const [search, setSearch] = useState('');

  const filteredProjects = projectsData.filter((project) => {
    return (
      (locationFilter === '' || project.location === locationFilter) &&
      (systemTypeFilter === '' || project.systemType === systemTypeFilter) &&
      (search === '' || project.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Cities Served', icon: MapPin },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '100%', label: 'Client Satisfaction', icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg tracking-tight">
              Our <span className="text-[#CE2029]">Projects</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Showcasing our completed and ongoing projects across the region
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both' }}>
                <div className="glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20">
                    <stat.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-[#CE2029] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select 
                    value={locationFilter} 
                    onChange={(e) => setLocationFilter(e.target.value)} 
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">All Locations</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select 
                    value={systemTypeFilter} 
                    onChange={(e) => setSystemTypeFilter(e.target.value)} 
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">All System Types</option>
                    {systemTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  placeholder="Search by project name..." 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="glass-card p-12 rounded-2xl shadow-lg">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${0.1 + idx * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {project.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Layers className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-700 font-medium">{project.scope}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-700">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-700">{project.systemType}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                    <div className="flex items-center space-x-1 text-red-600 group-hover:text-red-700 transition-colors">
                      <span className="text-sm font-semibold">View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let us help you create a safer environment with our proven fire safety solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 