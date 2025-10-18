import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      position: "Project Manager",
      company: "Shell Nigeria",
      content: "Calaya Engineering has been our trusted partner for over 8 years. Their technical expertise and commitment to quality have been instrumental in the success of our offshore projects.",
      rating: 5,
      project: "Offshore Platform Development"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Operations Director",
      company: "Chevron Angola",
      content: "The team at Calaya consistently delivers exceptional results. Their innovative approach to pipeline construction and maintenance has significantly improved our operational efficiency.",
      rating: 5,
      project: "Pipeline Infrastructure"
    },
    {
      id: 3,
      name: "Aisha Hassan",
      position: "Engineering Lead",
      company: "TotalEnergies Malaysia",
      content: "Working with Calaya Engineering has been a game-changer for our facilities management. Their ISO-certified processes and attention to detail are unmatched in the industry.",
      rating: 5,
      project: "Facilities Management"
    },
    {
      id: 4,
      name: "James Thompson",
      position: "Procurement Head",
      company: "ExxonMobil Equatorial Guinea",
      content: "Calaya's procurement services have streamlined our supply chain operations. Their global network and quality assurance processes ensure we get the best equipment and materials.",
      rating: 5,
      project: "Equipment Procurement"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-red-500 text-2xl font-bold mr-3">|</span>
            <h2 className="text-red-500 text-sm font-semibold uppercase tracking-wide">
              Client Testimonials
            </h2>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our clients about their experience working with Calaya Engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-xl  hover: transition-shadow duration-300 p-6 lg:p-8 relative"
            >
              <Quote className="absolute top-4 right-4 text-red-100 w-8 h-8" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-base lg:text-lg">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-red-500 font-medium text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
