import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Headphones, 
  Shield, 
  Wrench, 
  Zap, 
  Star, 
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Download,
  Users,
  Award,
  Lightbulb
} from "lucide-react";

const Support = () => {
  const [activeTab, setActiveTab] = useState('warranty');

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen pt-20 pb-16 w-full" id="support">
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#2f2f2f] to-[#1a1a1a] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#ba6a5a] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#e49385] to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 text-center">
          <motion.div
            className="inline-block px-4 py-2 bg-[#ba6a5a]/10 border border-[#ba6a5a]/20 rounded-full text-[#ba6a5a] text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🛠️ PREMIUM SUPPORT
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Support{" "}
            <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
              & Service
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience support that flows as smoothly as our fans. From installation to maintenance,{" "}
            <span className="text-[#e49385] font-medium">we're with you every step</span> of the way.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-8 bg-gradient-to-r from-[#ba6a5a]/10 to-[#e49385]/10 border-y border-[#ba6a5a]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.a
              href="tel:+919930101710"
              className="group flex items-center justify-center gap-3 p-4 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-xl border border-[#ba6a5a]/20 hover:border-[#ba6a5a]/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-3 bg-[#ba6a5a]/20 rounded-full group-hover:bg-[#ba6a5a]/30 transition-colors">
                <Phone className="w-5 h-5 text-[#ba6a5a]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white group-hover:text-[#e49385] transition-colors">Call Support</div>
                <div className="text-sm text-gray-400">+91 9930101710</div>
              </div>
            </motion.a>
            
            <motion.a
              href="mailto:support@anthemfans.com"
              className="group flex items-center justify-center gap-3 p-4 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-xl border border-[#ba6a5a]/20 hover:border-[#ba6a5a]/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-3 bg-[#e49385]/20 rounded-full group-hover:bg-[#e49385]/30 transition-colors">
                <Mail className="w-5 h-5 text-[#e49385]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white group-hover:text-[#e49385] transition-colors">Email Support</div>
                <div className="text-sm text-gray-400">support@anthemfans.com</div>
              </div>
            </motion.a>
            
            <motion.a
              href="https://wa.me/919930101710"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-xl border border-[#ba6a5a]/20 hover:border-[#ba6a5a]/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-3 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white group-hover:text-[#e49385] transition-colors">WhatsApp</div>
                <div className="text-sm text-gray-400">Quick Chat</div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block px-4 py-2 bg-[#ba6a5a]/10 border border-[#ba6a5a]/20 rounded-full text-[#ba6a5a] text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🔧 OUR SERVICES
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What We{" "}
            <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
              Offer
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Wrench className="w-8 h-8" />,
              title: "Professional Installation",
              description: "Expert technicians ensure perfect setup with safety compliance and optimal performance testing.",
              features: ["Free home visit", "Safety inspection", "Performance testing"]
            },
            {
              icon: <Headphones className="w-8 h-8" />,
              title: "24/7 Technical Support",
              description: "Round-the-clock assistance for troubleshooting, remote diagnostics, and technical queries.",
              features: ["Remote diagnostics", "Live chat support", "Video assistance"]
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Comprehensive Warranty",
              description: "Extended warranty coverage with quick replacement and hassle-free claim process.",
              features: ["Quick replacements", "Free repairs", "Doorstep service"]
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Smart Usage Training",
              description: "Complete guidance on operating your fan efficiently and maximizing its lifespan.",
              features: ["User manual", "Video tutorials", "Tips & tricks"]
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Energy Optimization",
              description: "Help you achieve maximum energy savings with personalized usage recommendations.",
              features: ["Energy audit", "Savings calculator", "Optimization tips"]
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Premium Care Package",
              description: "Exclusive maintenance services with priority support and regular health checkups.",
              features: ["Priority support", "Annual maintenance", "Health checkups"]
            }
          ].map((service, index) => (
            <motion.div
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ba6a5a]/20 via-transparent to-[#e49385]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{service.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#e49385] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-[#ba6a5a]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Warranty & Technical Info */}
      <section className="py-16 bg-gradient-to-br from-[#2f2f2f] via-[#1a1a1a] to-[#2f2f2f] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#ba6a5a] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#e49385] to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <motion.div
              className="inline-block px-4 py-2 bg-[#ba6a5a]/10 border border-[#ba6a5a]/20 rounded-full text-[#ba6a5a] text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              📋 DETAILED INFORMATION
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Warranty{" "}
              <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
                & Technical
              </span>
            </motion.h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'warranty', label: 'Warranty Coverage', icon: <Shield className="w-4 h-4" /> },
              { id: 'technical', label: 'Technical Specs', icon: <Zap className="w-4 h-4" /> },
              { id: 'support', label: 'Support Hours', icon: <Clock className="w-4 h-4" /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#ba6a5a] to-[#e49385] text-white shadow-lg'
                    : 'bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a] border border-[#ba6a5a]/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-3xl p-8 border border-[#ba6a5a]/20"
          >
            {activeTab === 'warranty' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { type: "Induction Motor", period: "2 Years", icon: "⚙️", features: ["Motor replacement", "Electrical components", "Manufacturing defects"] },
                  { type: "BLDC Motor", period: "5 Years", icon: "⚡", features: ["Motor replacement", "PCB coverage", "Energy efficiency guarantee"] },
                  { type: "General Components", period: "2 Years", icon: "🔧", features: ["Blade replacement", "Light fixtures", "Remote control"] }
                ].map((warranty, index) => (
                  <div key={index} className="text-center p-6 bg-[#1c1c1c] rounded-xl border border-[#ba6a5a]/10">
                    <div className="text-4xl mb-4">{warranty.icon}</div>
                    <h3 className="text-xl font-bold text-[#e49385] mb-2">{warranty.type}</h3>
                    <div className="text-3xl font-bold text-[#ba6a5a] mb-4">{warranty.period}</div>
                    <ul className="space-y-2 text-gray-300">
                      {warranty.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2">
                          <Star className="w-4 h-4 text-[#ba6a5a]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#e49385] mb-6">BLDC Motor Specifications</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Power Consumption", value: "28W - 35W" },
                      { label: "Air Delivery", value: "230 - 250 CMM" },
                      { label: "Speed Control", value: "6 Speed Settings" },
                      { label: "Noise Level", value: "< 35dB" },
                      { label: "Energy Rating", value: "5 Star" }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-[#1c1c1c] rounded-lg">
                        <span className="text-gray-300">{spec.label}</span>
                        <span className="font-semibold text-[#ba6a5a]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#e49385] mb-6">Induction Motor Specifications</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Power Consumption", value: "70W - 80W" },
                      { label: "Air Delivery", value: "200 - 220 CMM" },
                      { label: "Speed Control", value: "3 Speed Settings" },
                      { label: "Noise Level", value: "< 45dB" },
                      { label: "Energy Rating", value: "3 Star" }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-[#1c1c1c] rounded-lg">
                        <span className="text-gray-300">{spec.label}</span>
                        <span className="font-semibold text-[#ba6a5a]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#e49385] mb-4">Customer Support Hours</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between items-center">
                      <span>Monday - Saturday</span>
                      <span className="font-semibold text-[#ba6a5a]">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sunday</span>
                      <span className="font-semibold text-gray-400">Closed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Emergency Support</span>
                      <span className="font-semibold text-[#e49385]">WhatsApp 24/7</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#e49385] to-[#ba6a5a] rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#e49385] mb-4">Service Locations</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>Head Office: Goa</div>
                    <div>Service Centers: Pan India</div>
                    <div>Response Time: 24-48 hrs</div>
                    <div className="mt-4">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Plot+No.72,+GDIC,+Bethora+Industrial+Estate,+Bethora,+Ponda,+Goa+-+403409"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#ba6a5a] text-white rounded-lg hover:bg-[#e49385] transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        Find Location
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-3xl p-8 border border-[#ba6a5a]/20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-white">
              Need Quick{" "}
              <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
                Answers?
              </span>
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Check our comprehensive FAQ section for instant solutions to common questions about installation, maintenance, and troubleshooting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/faq"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ba6a5a] to-[#e49385] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#ba6a5a]/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Browse FAQ</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="/anthem_catalog.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2f2f2f] text-white font-semibold rounded-full border border-[#ba6a5a]/30 hover:bg-[#3a3a3a] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>Download Manual</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
