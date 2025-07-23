'use client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Shield, Target, Eye, Users, Award, Zap, ChevronDown, ChevronRight, Building, Users2, Calculator, FileText, Phone, TrendingUp, Wrench, Zap as ZapIcon, Star } from 'lucide-react';
import { useState } from 'react';

interface OrgNode {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  children: OrgNode[];
}

export default function About() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['ceo', 'gm', 'hr', 'accounts', 'payroll', 'sales', 'bdm', 'eng-manager', 'firefighting-tl', 'fire-alarm-tl']));

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const orgStructure = {
    id: 'ceo',
    title: 'Chief Executive Officer (CEO)',
    subtitle: 'Executive Leadership',
    icon: Shield,
    color: 'from-red-600 to-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    children: [
      {
        id: 'gm',
        title: 'General Manager',
        subtitle: 'Senior Management',
        icon: Building,
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        children: [
          {
            id: 'hr',
            title: 'HR Department',
            subtitle: 'Human Resources',
            icon: Users,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            children: [
              {
                id: 'accounts',
                title: 'Accounts Department',
                subtitle: 'Financial Management',
                icon: Calculator,
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50',
                borderColor: 'border-green-200',
                children: [
                  {
                    id: 'payroll',
                    title: 'Payroll Team',
                    subtitle: 'Compensation Management',
                    icon: FileText,
                    color: 'from-purple-500 to-purple-600',
                    bgColor: 'bg-purple-50',
                    borderColor: 'border-purple-200',
                    children: [
                      {
                        id: 'it',
                        title: 'IT Department',
                        subtitle: 'Technology Support',
                        icon: ZapIcon,
                        color: 'from-indigo-500 to-indigo-600',
                        bgColor: 'bg-indigo-50',
                        borderColor: 'border-indigo-200',
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'sales',
            title: 'Sales Team',
            subtitle: 'Business Development',
            icon: Phone,
            color: 'from-teal-500 to-teal-600',
            bgColor: 'bg-teal-50',
            borderColor: 'border-teal-200',
            children: []
          },
          {
            id: 'bdm',
            title: 'Business Development Manager',
            subtitle: 'Strategic Growth',
            icon: TrendingUp,
            color: 'from-pink-500 to-pink-600',
            bgColor: 'bg-pink-50',
            borderColor: 'border-pink-200',
            children: [
              {
                id: 'eng-manager',
                title: 'Engineering Manager',
                subtitle: 'Firefighting & Fire Alarm',
                icon: Wrench,
                color: 'from-red-500 to-red-600',
                bgColor: 'bg-red-50',
                borderColor: 'border-red-200',
                children: [
                  {
                    id: 'firefighting-tl',
                    title: 'Team Leader – Firefighting',
                    subtitle: 'Mechanical Systems',
                    icon: Shield,
                    color: 'from-orange-500 to-orange-600',
                    bgColor: 'bg-orange-50',
                    borderColor: 'border-orange-200',
                    children: [
                      {
                        id: 'mech-designer',
                        title: 'Mechanical Designer',
                        subtitle: '5 positions',
                        icon: Users2,
                        color: 'from-blue-500 to-blue-600',
                        bgColor: 'bg-blue-50',
                        borderColor: 'border-blue-200',
                        children: []
                      },
                      {
                        id: 'mech-estimation',
                        title: 'Mechanical Estimation Engineer',
                        subtitle: '3 positions',
                        icon: Calculator,
                        color: 'from-green-500 to-green-600',
                        bgColor: 'bg-green-50',
                        borderColor: 'border-green-200',
                        children: []
                      }
                    ]
                  },
                  {
                    id: 'fire-alarm-tl',
                    title: 'Team Leader – Fire Alarm',
                    subtitle: 'Electrical Systems',
                    icon: Zap,
                    color: 'from-yellow-500 to-yellow-600',
                    bgColor: 'bg-yellow-50',
                    borderColor: 'border-yellow-200',
                    children: [
                      {
                        id: 'electrical-designer',
                        title: 'Electrical Designer',
                        subtitle: '3 positions',
                        icon: Users2,
                        color: 'from-purple-500 to-purple-600',
                        bgColor: 'bg-purple-50',
                        borderColor: 'border-purple-200',
                        children: []
                      },
                      {
                        id: 'electrical-estimation',
                        title: 'Electrical Estimation Engineer',
                        subtitle: '2 positions',
                        icon: Calculator,
                        color: 'from-indigo-500 to-indigo-600',
                        bgColor: 'bg-indigo-50',
                        borderColor: 'border-indigo-200',
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };


  const stats = [
    { number: 'NFPA', label: 'Certified Engineers', icon: Award },
    { number: 'GCC', label: 'Market Coverage', icon: Users },
    { number: '24/7', label: 'Technical Support', icon: Shield },
    { number: '100%', label: 'Code Compliance', icon: Star }
  ];

  // Desktop/Laptop Tree Structure
  const renderDesktopNode = (node: OrgNode, level: number = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const IconComponent = node.icon;

    return (
      <div key={node.id} className="relative">
        {/* Node Card - Centered */}
        <div className="flex justify-center mb-8">
          <div 
            className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 max-w-sm ${
              hasChildren ? 'hover:border-gray-400' : ''
            } ${node.bgColor} ${node.borderColor} border-dashed shadow-lg`}
            onClick={() => hasChildren && toggleNode(node.id)}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${node.color} flex items-center justify-center shadow-xl`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{node.title}</h4>
                  <p className="text-sm text-gray-600 font-medium mt-2">{node.subtitle}</p>
                </div>
                {hasChildren && (
                  <div className="flex items-center space-x-2 bg-white/50 px-3 py-1 rounded-full">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-gray-600" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-600" />
                    )}
                    <span className="text-xs text-gray-600 font-medium">
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Connection Line from Parent to Children */}
        {hasChildren && isExpanded && (
          <div className="flex justify-center mb-6">
            <div className="w-px h-12 bg-gradient-to-b from-gray-300 to-gray-200"></div>
          </div>
        )}

        {/* Children Container - Tree Structure */}
        {hasChildren && isExpanded && (
          <div className="relative">
            {/* Horizontal line connecting children */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            {/* Children in a row */}
            <div className="flex justify-center space-x-8 lg:space-x-16 xl:space-x-20">
              {node.children.map((child: OrgNode) => (
                <div key={child.id} className="relative flex-1 max-w-sm">
                  {/* Vertical connection line to child */}
                  <div className="absolute top-0 left-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-gray-200 transform -translate-x-1/2"></div>
                  
                  {/* Child node */}
                  <div className="pt-6">
                    {renderDesktopNode(child, level + 1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Mobile List Structure
  const renderMobileNode = (node: OrgNode, level: number = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const IconComponent = node.icon;

    return (
      <div key={node.id} className="mb-3">
        {/* Node Card */}
        <div 
          className={`group relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
            hasChildren ? 'hover:border-gray-400' : ''
          } ${node.bgColor} ${node.borderColor} border-dashed shadow-sm`}
          onClick={() => hasChildren && toggleNode(node.id)}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${node.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight truncate">{node.title}</h4>
                <p className="text-xs text-gray-600 font-medium mt-0.5 truncate">{node.subtitle}</p>
              </div>
              {hasChildren && (
                <div className="flex items-center space-x-1 flex-shrink-0">
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  )}
                  <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                    {isExpanded ? 'Hide' : 'Show'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Children Container */}
        {hasChildren && isExpanded && (
          <div className={`ml-4 sm:ml-6 mt-3 space-y-2 border-l-2 border-gray-200 pl-3 sm:pl-4`}>
            {node.children.map((child: OrgNode) => (
              <div key={child.id}>
                {renderMobileNode(child, level + 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About Us - Red Shield Engineering Team & Expertise"
        description="Learn about Red Shield Engineering's expert team, NFPA certified engineers, and our commitment to fire protection engineering excellence. Discover our organizational structure and industry expertise."
        keywords="about Red Shield Engineering, fire protection team, NFPA certified engineers, organizational structure, fire safety expertise, engineering company"
        ogType="website"
        canonicalUrl="https://redshieldengineering.com/about"
      />
      <Navigation />
      <section className="pt-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg">About <span className="text-[#CE2029]">Red Shield</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Leading the way in fire protection system engineering and design</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Trusted Fire Protection Engineering Partner</h2>
              <p className="text-lg text-gray-600 mb-6">Red Shield Engineering specializes in delivering comprehensive fire protection system engineering, estimation, design, and drafting solutions to leading fire protection System Integrators, MEP Contractors, and Consultants across the GCC and international markets.</p>
              <p className="text-lg text-gray-600 mb-6">Renowned for excellence in fire protection design, Red Shield Engineering is driven by a highly qualified team of NFPA-certified engineers and designers. With deep industry knowledge and hands-on experience, we provide reliable, cost-efficient solutions that adhere to all relevant codes and standards.</p>
              <p className="text-lg text-gray-600">We offer a professional management and technical framework supported by a team of highly qualified and experienced designers, and a steadfast commitment to partnership, ensuring the successful delivery of your project.</p>
            </div>
            <div className="glass-card p-8 animate-slide-up" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both' }}>
                    <div className="text-3xl font-bold text-[#CE2029] mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-4 drop-shadow-lg">Our Vision, Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 animate-slide-up" data-aos="fade-up" data-aos-delay="200">
              <div className="text-[#CE2029] mb-4 floating-icon"><Eye className="h-12 w-12" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">Our vision is to be the world's leading provider of innovative firefighting engineering solutions, dedicated to protecting life, property, and the environment through advanced fire protection design and technology that fully complies with applicable codes and international standards.</p>
            </div>
            <div className="glass-card p-8 animate-slide-up" data-aos="fade-up" data-aos-delay="400">
              <div className="text-[#CE2029] mb-4 floating-icon"><Target className="h-12 w-12" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">We are committed to safeguarding life, property, and the environment through the sustainable and precise execution of our engineering services, prioritizing the trust and confidence of our clients by delivering solutions with the highest standards of professionalism, integrity, and transparency.</p>
            </div>
            <div className="glass-card p-8 animate-slide-up" data-aos="fade-up" data-aos-delay="600">
              <div className="text-[#CE2029] mb-4 floating-icon"><Award className="h-12 w-12" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">We deliver fire protection solutions with meticulous accuracy, sustainable practices, teamwork, unwavering integrity, a client-focused approach, and a commitment to professional excellence.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-4 drop-shadow-lg">Our Organization Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A well-structured team of professionals committed to delivering excellence in fire protection engineering</p>
          </div>
          
          {/* Interactive Organization Chart */}
          <div className="glass-card p-8 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }} data-aos="fade-up" data-aos-delay="200">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Red Shield Engineering - Organizational Hierarchy</h3>
              <p className="text-gray-600 text-center mb-6">Click on any department to expand or collapse the structure</p>
            </div>
            
            {/* Desktop View - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="overflow-x-auto">
                <div className="min-w-max p-6 flex justify-center">
                  <div className="w-full max-w-7xl">
                    {renderDesktopNode(orgStructure)}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View - Hidden on desktop */}
            <div className="lg:hidden">
              <div className="max-w-full mx-auto">
                <div className="px-2 sm:px-4">
                  {renderMobileNode(orgStructure)}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Department Legend</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-red-50 border border-red-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">Executive Level</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-orange-50 border border-orange-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">Management Level</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">Department Level</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">Team Level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 