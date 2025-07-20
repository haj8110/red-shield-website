'use client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '12-1-17, Vinayagar Street, Surandai – 627859, Tenkasi District, Tamil Nadu, India.', color: 'text-red-500' },
    { icon: Phone, label: 'Phone', value: '+91 8015019219', color: 'text-green-500' },
    { icon: Mail, label: 'Email', value: 'sales@reshieldengineering.com', color: 'text-blue-500' },
    { icon: Clock, label: 'Website', value: 'www.redshieldengineering.com', color: 'text-purple-500' }
  ];

  const features = [
    { icon: Users, title: 'NFPA Certified Engineers', description: 'Highly qualified engineers with deep industry knowledge' },
    { icon: Award, title: 'Code Compliance', description: 'All designs meet NFPA standards and local fire codes' },
    { icon: Clock, title: '24/7 Technical Support', description: 'Round-the-clock technical support and consultation' },
    { icon: Send, title: 'Quick Response', description: 'Get back to you within 2 hours' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] mb-6 drop-shadow-lg tracking-tight">
              Contact <span className="text-[#CE2029]">Us</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Get in touch for fire protection engineering consultations, quotes, or technical support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'both' }}>
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-${info.color.split('-')[1]}-500/20 to-${info.color.split('-')[1]}-600/20 mb-4`}>
                  <info.icon className={`h-6 w-6 ${info.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.label}</h3>
                <p className="text-gray-600 font-medium">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }} data-aos="fade-right">
              <div className="glass-card p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="glass-card p-8 rounded-2xl text-center animate-fade-in" data-aos="fade-up">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500/20">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">Thank you for contacting us. We will get back to you within 2 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={form.name} 
                          onChange={handleChange} 
                          required 
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={form.email} 
                          onChange={handleChange} 
                          required 
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={form.phone} 
                          onChange={handleChange} 
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200" 
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Company</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          value={form.company} 
                          onChange={handleChange} 
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={form.message} 
                        onChange={handleChange} 
                        required 
                        rows={5} 
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 resize-none" 
                        placeholder="Tell us about your fire protection engineering needs..."
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#FF3C3C] via-[#CE2029] to-[#FF7A3C] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Company Info & Map */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }} data-aos="fade-left">
              
              {/* Features */}
              <div className="glass-card p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Red Shield Engineering?</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'both' }}>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="glass-card p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps?q=Surandai,+Tenkasi+District,+Tamil+Nadu,+India&output=embed" 
                    width="100%" 
                    height="250" 
                    className="border-0" 
                    loading="lazy" 
                    title="Company Location" 
                    allowFullScreen
                  />
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="glass-card p-6 rounded-2xl shadow-xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Chat</h3>
                <p className="text-gray-600 mb-4">Need immediate assistance? Chat with us on WhatsApp!</p>
                <a 
                  href="https://wa.me/918015019219" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Chat</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }} data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until it&apos;s too late. Contact Red Shield Engineering today for reliable fire protection engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918015019219"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Call Now</span>
            </a>
            <a 
              href="mailto:sales@reshieldengineering.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 