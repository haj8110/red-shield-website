'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Layers, Search } from 'lucide-react';
const projectsData = [
  { name: 'Al Noor Hospital', scope: 'Fire Fighting System, Gas Suppression', location: 'Abu Dhabi', systemType: 'Healthcare' },
  { name: 'Skyline Towers', scope: 'Fire Fighting Pumps, Low Current Systems', location: 'Dubai', systemType: 'Residential' },
  { name: 'Tech Data Center', scope: 'Gas Suppression, Software Tools', location: 'Riyadh', systemType: 'Data Center' },
  { name: 'Green Mall', scope: 'Fire Fighting System, Fire Pumps', location: 'Jeddah', systemType: 'Commercial' },
  { name: 'PetroChem Plant', scope: 'Gas Detection, Air Sampling', location: 'Dammam', systemType: 'Industrial' },
  { name: 'University Campus', scope: 'Fire Fighting System, Low Current Systems', location: 'Sharjah', systemType: 'Educational' },
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
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our <span className="text-red-600">Projects</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Showcasing our completed and ongoing projects across the region</p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 w-full md:w-auto">
              <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">All Locations</option>
                {locations.map((loc) => (<option key={loc} value={loc}>{loc}</option>))}
              </select>
              <select value={systemTypeFilter} onChange={(e) => setSystemTypeFilter(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">All System Types</option>
                {systemTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
              </select>
            </div>
            <div className="relative w-full md:w-64">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by project name..." className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Project Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Scope</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">System Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-gray-500">No projects found.</td>
                  </tr>
                ) : (
                  filteredProjects.map((project, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{project.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{project.scope}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 flex items-center gap-2"><MapPin className="h-4 w-4 text-red-500" />{project.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 flex items-center gap-2"><Layers className="h-4 w-4 text-gray-500" />{project.systemType}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 