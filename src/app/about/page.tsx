import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Target, Eye, Heart, Users, Award, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Shield, title: 'Safety First', description: 'We prioritize safety in everything we do, ensuring the highest standards of protection.' },
    { icon: Target, title: 'Excellence', description: 'We strive for excellence in every project, delivering superior quality and performance.' },
    { icon: Heart, title: 'Integrity', description: 'We operate with honesty, transparency, and ethical business practices.' },
    { icon: Users, title: 'Teamwork', description: 'We collaborate effectively to achieve the best results for our clients.' }
  ];
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Technicians' },
    { number: '24/7', label: 'Emergency Support' },
    { number: '100%', label: 'Client Satisfaction' }
  ];
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg">About <span className="text-[#CE2029]">Red Shield</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Leading the way in fire safety innovation and protection</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Trusted Fire Safety Partner</h2>
              <p className="text-lg text-gray-600 mb-6">Red Shield Engineering has been at the forefront of fire safety innovation for over a decade. We specialize in designing, installing, and maintaining comprehensive fire safety systems that protect lives and property across various industries.</p>
              <p className="text-lg text-gray-600 mb-6">Our team of certified professionals combines technical expertise with practical experience to deliver solutions that meet the highest safety standards and regulatory requirements.</p>
              <p className="text-lg text-gray-600">From small businesses to large industrial facilities, we provide customized fire safety solutions that ensure peace of mind and regulatory compliance.</p>
            </div>
            <div className="glass-card p-8 animate-slide-up">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-4 drop-shadow-lg">Our Vision, Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 animate-slide-up">
              <div className="text-[#CE2029] mb-4 floating-icon"><Eye className="h-12 w-12" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the leading provider of innovative fire safety solutions, creating safer environments for communities and businesses worldwide.</p>
            </div>
            <div className="glass-card p-8 animate-slide-up">
              <div className="text-[#CE2029] mb-4 floating-icon"><Target className="h-12 w-12" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">To deliver exceptional fire safety solutions through innovation, expertise, and unwavering commitment to protecting lives and property.</p>
            </div>
            <div className="glass-card p-8 animate-slide-up">
              <div className="text-[#CE2029] mb-4 floating-icon"><Award className="h-12 w-12" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
              <p className="text-gray-600">To provide reliable, compliant, and innovative fire safety solutions that exceed expectations and ensure complete peace of mind.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center animate-slide-up">
                <div className="text-[#CE2029] mb-4 flex justify-center floating-icon"><value.icon className="h-10 w-10" /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-4 drop-shadow-lg">Our Organization Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A dedicated team of professionals committed to your safety</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Team</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>CEO & Founder</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Technical Director</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Operations Manager</span></li>
              </ul>
            </div>
            <div className="glass-card p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Team</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Fire Safety Engineers</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Installation Technicians</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Maintenance Specialists</span></li>
              </ul>
            </div>
            <div className="glass-card p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Team</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Customer Service</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Emergency Response</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Quality Assurance</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 