'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Instagram, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Flag images from public folder
const nigeriaFlag = "/assets/flags/Flag_of_Nigeria.png";
const malaysiaFlag = "/assets/flags/Flag_of_Malaysia.svg.png";
const mozambiqueFlag = "/assets/flags/Flag_of_Mozambique.svg.png";
const equatorialGuineaFlag = "/assets/flags/first_flag_of_equatorial_guinea.png";
const congoFlag = "/assets/flags/Flag_of_the_Republic_of_the_Congo.svg.png";
const spainFlag = "/assets/flags/Flag_of_Spain.svg.png";
const angolaFlag = "/assets/flags/Flag-Angola (1).png";
const ukFlag = "/assets/flags/Flag_of_the_United_Kingdom_(1-2).svg.webp";
const ghanaFlag = "/assets/flags/Flag_of_Ghana.svg.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Sending email via Resend API...');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Contact email sent successfully:', result);
        
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        const errorData = await response.json().catch(() => null);
        console.error('Contact API error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });
        throw new Error(`Email sending failed: ${errorData?.error || 'Unknown error'}`);
      }

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-200 to-blue-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Collaborate
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We are open to collaborate with leading oil and gas providers worldwide. 
              Reach out to discuss how we can support your next project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Contact us if you have any questions. Our lines are open Monday to Friday.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(+234) 9028219836</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@calayaengineering.com</p>
                    <p className="text-gray-600">calayaengineering@yahoo.co.uk</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/calaya-engineering-services-limited/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://twitter.com/calayaengineering" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-lg transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://instagram.com/calayaengineering" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 lg:p-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800">Message sent successfully!</h4>
                      <p className="text-sm text-green-600">Thank you for contacting us! Our team has been notified and will get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-red-800">Failed to send message</h4>
                      <p className="text-sm text-red-600">Please try again or contact us directly.</p>
                    </div>
                  </motion.div>
                )}
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
    <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-500 hover:bg-red-600 transform hover:-translate-y-1'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Various Locations Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-red-500 text-3xl font-bold mr-3">|</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Global Presence
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Operating across multiple countries to serve the oil and gas industry worldwide
            </p>
          </motion.div>

          {/* 3x3 Grid of Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Nigeria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={nigeriaFlag} alt="Nigeria Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nigeria</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Headquarters</p>
                  <p>Plot 194B, 23 Fiddil Avenue, Off Ordinance Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria</p>
                  <p>P.O Box 4738</p>
                  <p className="font-medium text-red-500">info@calayaengineering.com</p>
                  <p className="font-medium text-red-500">calayaengineering@yahoo.co.uk</p>
                  <p>Tel: (+234) 84301123</p>
                  <p>(+234) 9028219836</p>
                </div>
              </div>
            </motion.div>

            {/* Malaysia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={malaysiaFlag} alt="Malaysia Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Malaysia</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Asia Pacific Office</p>
                  <p>4806-11-3 Jalan CBD Perdana 2, Cyberjaya 6300, Selangor</p>
                  <p className="font-medium text-red-500">info@calayaengineering.com</p>
                  <p className="font-medium text-red-500">calayaengineering@yahoo.co.uk</p>
                  <p>Tel: +968-95221083</p>
                  <p>+968-24501499</p>
                  <p>FAX: +968-24501288</p>
                </div>
              </div>
            </motion.div>

            {/* Mozambique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={mozambiqueFlag} alt="Mozambique Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mozambique</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Operations Center</p>
                  <p>Av Olof Oalm, 244-2 Andar 402, Maputo</p>
                  <p className="font-medium text-red-500">info@calayaengineering.com</p>
                  <p className="font-medium text-red-500">calayaengineering@yahoo.co.uk</p>
                  <p>Tel: 00258823165166</p>
                </div>
              </div>
            </motion.div>

            {/* Equatorial Guinea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={equatorialGuineaFlag} alt="Equatorial Guinea Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Equatorial Guinea</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Regional Office</p>
                  <p>Carreterra Malabo, Sampaka S/N Bioko Norte, R.G.E.</p>
                  <p className="font-medium text-red-500">info@calayaengineering.com</p>
                  <p className="font-medium text-red-500">calayaengineering@yahoo.co.uk</p>
                  <p>Tel: (+240) 222 267 366</p>
                  <p>(+240) 551 632 846</p>
                </div>
              </div>
            </motion.div>

            {/* Congo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={congoFlag} alt="Congo Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Congo Brazzaville</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Operations Center</p>
                  <p>Congo (Gc Congosarl) Quarter Cq, 118 Tchimbamba Arrondissement E.P Lumumba Pointe-Noire</p>
                  <p className="font-medium text-red-500">info@calayaengineering.com</p>
                  <p className="font-medium text-red-500">calayaengineering@yahoo.co.uk</p>
                  <p>Tel: (+240) 66406541</p>
                </div>
              </div>
            </motion.div>

            {/* Spain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={spainFlag} alt="Spain Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spain</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">European Office</p>
                  <p>C/Martin Fierro – 3, 30, 1a; 50012 Zaragoza, Espana</p>
                  <p className="font-medium text-red-500">info@calayaengineering.com</p>
                  <p className="font-medium text-red-500">calayaengineering@yahoo.co.uk</p>
                  <p>Tel: (+34) 671418761</p>
                </div>
              </div>
            </motion.div>

            {/* Angola */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={angolaFlag} alt="Angola Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Angola</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Regional Office</p>
                  <p>CITEC, Bairro Simulabuco-Cabinda</p>
                  <p className="font-medium text-red-500">info@calayaengineering.com</p>
                  <p className="font-medium text-red-500">calayaengineering@yahoo.co.uk</p>
                  <p>Tel: (+244) 933515530</p>
                  <p>(+244) 930614514</p>
                </div>
              </div>
            </motion.div>

            {/* United Kingdom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={ukFlag} alt="UK Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">United Kingdom</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">UK Office</p>
                  <p>Bradwell And Partners 219 Titan Court, 3 Bishop Square, Hatfield Business Park, AL10 9NA</p>
                  <p className="font-medium text-red-500">info@calayaengineering.com</p>
                  <p className="font-medium text-red-500">calayaengineering@yahoo.co.uk</p>
                  <p>Tel: (+44) 161 460 5756</p>
                </div>
              </div>
            </motion.div>

            {/* Ghana */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <img src={ghanaFlag} alt="Ghana Flag" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ghana</h3>
                <div className="text-left text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Regional Office</p>
                  <p>KWAME Asante Avenue, House Number 104, Kwame Asante Avenue, Westlands, Accra, Ghana</p>
                  <p className="font-medium text-red-500">info.ghana@calayaengineering.com</p>
                  <p className="font-medium text-red-500">Kwadwo.Poku@calayaengineering.com</p>
                  <p>Tel: (+233) 244636563</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              With operations spanning across multiple continents, we bring local expertise 
              and global standards to every project, ensuring consistent quality and service delivery worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-red-500 text-3xl font-bold mr-3">|</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Headquarters Location
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visit us at our main office in Port Harcourt, Nigeria
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden"
          >
            {/* Map Container */}
            <div className="relative w-full h-96 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2!2d7.032328756053624!3d4.802818303115847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnMTAuMSJOIDfCsDAxJzU2LjQiRQ!5e0!3m2!1sen!2sng!4v1640995200000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Calaya Engineering Headquarters Location - Plot 194B, 23 Fiddil Avenue, Off Ordinance Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Address Info */}
            <div className="p-6 lg:p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Calaya Engineering Headquarters</h3>
                  <p className="text-blue-100">
                    Plot 194B, 23 Fiddil Avenue, Off Ordinance Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria
                  </p>
                  <p className="text-blue-100">P.O Box 4738</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 mb-1">Port Harcourt, Nigeria</p>
                  <p className="text-blue-100">info@calayaengineering.com</p>
                  <p className="text-blue-100">calayaengineering@yahoo.co.uk</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

