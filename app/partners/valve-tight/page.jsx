'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Shield, Monitor, AlertTriangle, Settings, Zap, Target, Award } from 'lucide-react';

export default function ValveTightPage() {
  // DBB-SAVER features
  const features = [
    {
      id: 1,
      title: "100% Leakage Prevention",
      description: "Fully prevents leakage through Double Block and Bleed valve configurations",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Automatic Monitoring",
      description: "Monitors bleed section automatically every second",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Fail-Safe Design",
      description: "Completely fail-safe operation with alarm systems",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Vacuum Technology",
      description: "Creates, maintains and monitors vacuum in bleed section",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  // Key benefits
  const benefits = [
    "Maximum safety for workers",
    "Commercial availability of installation",
    "Eliminates human factor and subjective assessment",
    "Automatic periodical checks",
    "Safe workplace without compromise",
    "Wireless remote data transfer",
    "Multiple alarm systems"
  ];

  // Alarm systems
  const alarmSystems = [
    {
      id: 1,
      location: "Local Valve Location",
      description: "Audible and visible alarm at leaking valve location"
    },
    {
      id: 2,
      location: "Safe Work Place",
      description: "Wireless remote data transfer to safe work area"
    },
    {
      id: 3,
      location: "Control Room",
      description: "Separate alarm monitor in control room"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/Useable_Images/image12.jpg"
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Valve Tight
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              DBB-SAVER Technology for Leak Prevention and Monitoring
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  DBB-SAVER Technology
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The DBB-SAVER is used to fully prevent any leakage through either a Double Block and Bleed valve 
                  configuration or through a single isolation valve. It is used when maintenance work has to be 
                  executed on a piece of equipment, whilst bordering installation parts remain pressurized and 
                  available for operations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Besides mitigating the leakage for 100%, the DBB-SAVER will monitor the bleed section automatically 
                  every second, instead of an operator checking them every shift or so. Through our technology we are 
                  able to ensure maximum safety for workers in combination with commercial availability of the installation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The human factor and the subjective assessment of the leak rate is taken out of the equation, and the 
                  DBB-SAVER does all the work with regards to the periodical checks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced vacuum technology ensuring maximum safety and operational efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced vacuum technology for comprehensive leak prevention and monitoring
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg border border-gray-200 p-8"
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                It works by creating, maintaining and monitoring of a vacuum in the bleed section in a classical 
                Double Block & Bleed configuration but also can be deployed in most Single Valve Isolations. 
                The DBB-SAVER is completely fail safe.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In case the in-line leakage exceeds the capacity of the DBB-SAVER, an alarm will be raised. 
                The alarm will be audible and visible on the location of the leaking valve, but also via wireless 
                remote data transfer on the safe work place and on a separate alarm monitor in the control room.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                So, even when the valves are not leaking, the appliance of a DBB-SAVER is beneficial to ensure 
                a safe work place for the workers on the downstream equipment without compromise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alarm Systems */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multi-Level Alarm System
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive alarm coverage ensuring immediate notification across all operational areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alarmSystems.map((alarm, index) => (
              <motion.div
                key={alarm.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center"
              >
                <div className="bg-red-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{alarm.location}</h3>
                <p className="text-gray-600">{alarm.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Approvals */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industry Approvals */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Approvals</h3>
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-900">Shell Approved</h4>
                  </div>
                  <p className="text-gray-600">
                    Our method has been Shell approved, for worldwide use on all of their assets.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-blue-600" />
                    <h4 className="text-lg font-bold text-gray-900">Major Oil & Gas Companies</h4>
                  </div>
                  <p className="text-gray-600">
                    Other major Oil and Gas companies have approved our unique method.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Interested in DBB-SAVER Technology?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to implement industry-approved leak prevention technology? Contact us for more 
              information about the DBB-SAVER system and how it can enhance safety at your facility.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us for More Information
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

