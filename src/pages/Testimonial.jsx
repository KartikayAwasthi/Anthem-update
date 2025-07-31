import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Inara elevated our interiors beyond imagination.",
    name: "Interior Architect, Mumbai",
  },
  {
    quote: "My electricity bill dropped by 60% after switching to Lara BLDC.",
    name: "Rajeev N., Bengaluru",
  },
  {
    quote: "As a retailer, Anthem fans have become our premium category bestsellers.",
    name: "Suraj Traders, Gujarat",
  },
];

export default function Testimonial() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#2f2f2f] to-[#1a1a1a] snap-start w-full px-4 md:px-12 relative overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#ba6a5a] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#e49385] to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block px-4 py-2 bg-[#ba6a5a]/10 border border-[#ba6a5a]/20 rounded-full text-[#ba6a5a] text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ⭐ CUSTOMER TESTIMONIALS
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
              Fans Say
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how Anthem is changing lives, homes, and businesses across India –{" "}
            <span className="text-[#e49385] font-medium">Beyond Just Air</span>
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-3xl p-8 shadow-2xl border border-[#ba6a5a]/10 hover:border-[#ba6a5a]/30 transition-all duration-500 overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: 5
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ba6a5a]/20 via-transparent to-[#e49385]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Quote Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">"</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <blockquote className="text-lg text-gray-200 leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>
                
                <footer className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#e49385] group-hover:text-[#ba6a5a] transition-colors duration-300">
                      – {testimonial.name}
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#ba6a5a] text-sm">⭐</span>
                    ))}
                  </div>
                </footer>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tl from-[#e49385] to-[#ba6a5a] rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
