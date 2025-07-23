'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { MapPin, Layers, Search, Filter, Award, Clock, Users, Building, ArrowRight, Shield, Flame, Zap, Droplets } from 'lucide-react';
import Link from 'next/link';

const projectsData = [
  { 
    name: 'Riyadh Metro Line 5 & 6', 
    scope: 'FM200 System', 
    location: 'Riyadh - KSA', 
    systemType: 'Transportation',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Jabal Omar Development — Phase 3', 
    scope: 'Firefighting System', 
    location: 'Makkah - KSA', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'AL Rajhi Bank HQ Tower', 
    scope: 'Firefighting System', 
    location: 'Riyadh - KSA', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'AL-FISALIAH Tower', 
    scope: 'Firefighting System', 
    location: 'Riyadh - KSA', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'AKH Tower', 
    scope: 'Firefighting System', 
    location: 'Dammam - KSA', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Madinah Hajj City (Package I & II)', 
    scope: 'Firefighting System', 
    location: 'Madinah - KSA', 
    systemType: 'Religious',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Tabuk Palace — Sharma Complex', 
    scope: 'Firefighting System & FM200 System', 
    location: 'Tabuk - KSA', 
    systemType: 'Government',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'King Khalid International Airport', 
    scope: 'Firefighting System', 
    location: 'Riyadh - KSA', 
    systemType: 'Transportation',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Almarai Dairy & Juice Plant', 
    scope: 'Foam System', 
    location: 'Al-Kharj - KSA', 
    systemType: 'Industrial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Almarai Dairy & Juice Plant', 
    scope: 'Firefighting System & FM200 System', 
    location: 'Hail - KSA', 
    systemType: 'Industrial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Almarai Dairy & Juice Plant', 
    scope: 'Firefighting System, FM200 System & Fire Alarm System', 
    location: 'Riyadh - KSA', 
    systemType: 'Industrial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Riyadh Panda Facility', 
    scope: 'Firefighting System, FM200 System & Fire Alarm System', 
    location: 'Riyadh - KSA', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Qassim Dates Factory', 
    scope: 'FM200 System', 
    location: 'Al-Kharj - KSA', 
    systemType: 'Industrial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Maersk Logistics Project', 
    scope: 'FK-5-1-12 System', 
    location: 'AL Qassim - KSA', 
    systemType: 'Industrial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Obhur Villas', 
    scope: 'Firefighting System, FM200 System & Fire Alarm System', 
    location: 'Jeddah - KSA', 
    systemType: 'Residential',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Salhia Tower', 
    scope: 'Firefighting System, FM200 System & Fire Alarm System', 
    location: 'Jeddah - KSA', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'JESCO Power Plant', 
    scope: 'Firefighting System, FM200 System & Fire Alarm System', 
    location: 'Jubail - KSA', 
    systemType: 'Industrial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Dhahran Tower', 
    scope: 'Fire Alarm System', 
    location: 'AL Khobar - KSA', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Dubai Expo-2020 (Operation Pavillion)', 
    scope: 'Firefighting System, Fire Alarm System, Emergency lighting system & FM200 System', 
    location: 'Dubai - UAE', 
    systemType: 'Exhibition',
    status: 'Completed',
    year: '2022'
  },
  { 
    name: 'Dubai Expo-2020 (Arrival Plaza)', 
    scope: 'Firefighting System, Fire Alarm System, Emergency lighting system & FM200 System', 
    location: 'Dubai - UAE', 
    systemType: 'Exhibition',
    status: 'Completed',
    year: '2022'
  },
  { 
    name: 'AL Baik- Dubai Mall', 
    scope: 'Wet Chemical Fire suppression (Kitchen Hood) system', 
    location: 'Dubai - UAE', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Fujairah Palace', 
    scope: 'Wet Chemical Fire suppression (Kitchen Hood) system', 
    location: 'Fujairah - UAE', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'AL Rehmaniyah Shopping Mall', 
    scope: 'Wet Chemical Fire suppression (Kitchen Hood) system', 
    location: 'Sharjah - UAE', 
    systemType: 'Commercial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Commercial Villa Kitchen', 
    scope: 'Wet Chemical Fire suppression (Kitchen Hood) system', 
    location: 'Jeddah - KSA', 
    systemType: 'Residential',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'G+R Central Kitchen Facility', 
    scope: 'Firefighting System, Fire Alarm System, Emergency lighting system & Wet Chemical Fire suppression (Kitchen Hood) system', 
    location: 'AL Ain — Abu Dhabi UAE', 
    systemType: 'Industrial',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'AL-RYADHIYAH 115/13.8KV SUBSTATION', 
    scope: 'Firefighting System, Fire Alarm System & FM200 System', 
    location: 'Dammam - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'DEFAA 115/13.8KV SUBSTATION', 
    scope: 'Firefighting System, Fire Alarm System & FM200 System', 
    location: 'Dhahran - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'SENAEYA-2 115/13.8KV SUBSTATION', 
    scope: 'Firefighting System, Fire Alarm System & FM200 System', 
    location: 'Dammam - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'SHERAA 115/13.8KV SUBSTATION', 
    scope: 'Firefighting System, Fire Alarm System & FM200 System', 
    location: 'Dammam - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'NIC-SOUTH CONVERTER-STATION NEOM HVDC INTERCONNECTION', 
    scope: 'Fire Alarm System', 
    location: 'NIC-South C/S - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'YNCT-CONVERTER-STATION NEOM HVDC INTERCONNECTION', 
    scope: 'Fire Alarm System', 
    location: 'YCNT C/S - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'NEW SUBSTATION FOR NAJRAN -pv 380/132KV BSP', 
    scope: 'Fire Alarm System & FM200 System', 
    location: 'Najran - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'MOWAIH pv 380/110 W BSP', 
    scope: 'Fire Alarm System & FM200 System', 
    location: 'Mowaih - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'STATCOM +300 MVAR AT ESHBILEYAH 380 KV BSP#9038', 
    scope: 'FM200 System', 
    location: 'Riyadh - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'STATCOM AT SULTANA 380 KV BSP', 
    scope: 'FM200 System', 
    location: 'Riyadh - KSA', 
    systemType: 'Infrastructure',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'RESIDENTIAL BUILDING (G+2P+12+R)', 
    scope: 'Firefighting System, Fire Alarm System & Emergency lighting system', 
    location: 'Riyadh - KSA', 
    systemType: 'Residential',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'GRANDALA RESIDENTIAL BUILDING (G+2P+8+R)', 
    scope: 'Firefighting System, Fire Alarm System & Emergency lighting system', 
    location: 'Wadi al safa 5, Dubai - UAE', 
    systemType: 'Residential',
    status: 'Completed',
    year: '2023'
  },
  { 
    name: 'Commercial Villa Kitchen', 
    scope: 'Wet Chemical Fire suppression (Kitchen Hood) system', 
    location: 'Al Satwa — Dubai UAE', 
    systemType: 'Residential',
    status: 'Completed',
    year: '2023'
  }
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
    { number: '37+', label: 'Projects Completed', icon: Award },
    { number: 'GCC', label: 'Market Coverage', icon: MapPin },
    { number: '24/7', label: 'Technical Support', icon: Clock },
    { number: '100%', label: 'Code Compliance', icon: Users }
  ];

  const getSystemIcon = (scope: string) => {
    if (scope.includes('FM200') || scope.includes('FK-5-1-12')) return Droplets;
    if (scope.includes('Firefighting')) return Flame;
    if (scope.includes('Fire Alarm')) return Zap;
    if (scope.includes('Wet Chemical')) return Shield;
    return Layers;
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Fire Protection Projects Portfolio - Red Shield Engineering"
        description="Explore our completed fire protection engineering projects including Riyadh Metro, Jabal Omar Development, AL Rajhi Bank HQ, and other major commercial and industrial installations across GCC."
        keywords="fire protection projects, completed projects, Riyadh Metro, Jabal Omar, AL Rajhi Bank, fire safety installations, GCC projects, commercial fire protection, industrial fire safety"
        ogType="website"
        canonicalUrl="https://redshieldengineering.com/projects"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6 shadow-lg">
              <Building className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg tracking-tight">
              Our <span className="text-[#CE2029]">Projects</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
              Showcasing our fire protection engineering projects across the GCC and international markets
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
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
          <div className="glass-card p-8 rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }} data-aos="fade-up" data-aos-delay="400">
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
            <div className="text-center py-16 animate-fade-in" data-aos="fade-up">
              <div className="glass-card p-12 rounded-2xl shadow-lg">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="600">
              {filteredProjects.map((project, idx) => {
                const SystemIcon = getSystemIcon(project.scope);
                return (
                  <div 
                    key={idx} 
                    className="glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group cursor-pointer border border-gray-100"
                    style={{ animationDelay: `${0.1 + idx * 0.05}s`, animationFillMode: 'both' }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
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
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <SystemIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium leading-relaxed">{project.scope}</span>
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
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.6s', animationFillMode: 'both' }} data-aos="fade-up">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 shadow-lg backdrop-blur-sm">
            <ArrowRight className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let us help you create a safer environment with our proven fire protection engineering solutions.
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