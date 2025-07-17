'use client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contact <span className="text-red-600">Us</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get in touch for fire safety consultations, quotes, or support</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-red-500" /><span className="text-gray-700">123 Fire Safety Ave, Dubai, UAE</span></div>
              <div className="flex items-center space-x-3"><Phone className="h-5 w-5 text-red-500" /><span className="text-gray-700">+971 4 123 4567</span></div>
              <div className="flex items-center space-x-3"><Mail className="h-5 w-5 text-red-500" /><span className="text-gray-700">info@redshield.com</span></div>
            </div>
            <div className="mb-8">
              <iframe src="https://www.google.com/maps?q=Dubai,+UAE&output=embed" width="100%" height="220" className="rounded-lg border border-gray-200 shadow-sm" loading="lazy" title="Company Location" allowFullScreen></iframe>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <a href="https://wa.me/97141234567" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"><MessageCircle className="h-5 w-5 mr-2" /> WhatsApp Chat</a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">Thank you for contacting us! We will get back to you soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <button type="submit" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"><Send className="h-5 w-5" /> Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 