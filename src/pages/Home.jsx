import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToNextSectionEnhanced } from "../utils/smoothScroll";
import Testimonial from "./Testimonial";
import { scrollToNextSection } from "../utils/smoothScroll";

// Images
const skyroImg = "/Skyro/fan5.png";
const inaraImg = "/inara-ecom/White/white-inara4.jpg"; // Updated to use inara-ecom
const evaaraImg = "/eVaara/fan3.png"; // eVaara fan image
const laraImg = "/Lara/fan1.png"; // Lara fan image
// const pedestalImg = "/pedestal.webp"; // Pedestal fan image

const Home = () => {
  return (
    <div className="w-full min-h-0 overflow-x-hidden snap-y snap-mandatory scroll-smooth smooth-scroll bg-[#1c1c1c] text-white">
      {/* ✅ Video Background Hero */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center snap-start bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover sm:object-center"
            style={{
              objectPosition: window.innerWidth < 768 ? 'center center' : 'center center'
            }}
            src="/anthem-background.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
          {/* Responsive overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 sm:bg-black/20"></div>
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="inline-block px-4 py-2 bg-[#ba6a5a]/10 border border-[#ba6a5a]/20 rounded-full text-[#ba6a5a] text-sm font-medium mb-6 backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ✨ ANTHEM BY EMSQUARE
          </motion.div>
          
         <div className="w-full px-2 sm:px-4 flex flex-col items-center">
  <motion.h1
    className="text-[clamp(1.5rem,5vw,4.5rem)] font-bold mb-4 text-white drop-shadow-2xl text-center"
    style={{ 
      fontSize: 'clamp(1.5rem, calc(100vw / 20), 4.5rem)',
      lineHeight: '1.1',
      whiteSpace: 'nowrap',
      overflow: 'visible',
      width: '100%',
      maxWidth: '100vw'
    }}
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    <span className="inline-block">The Future of </span>
    <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent inline-block">
       Motion
    </span>
    <span className="inline-block"> Now in Comfort</span>
  </motion.h1>

  <motion.p
    className="text-[clamp(0.9rem,2.5vw,1.5rem)] text-gray-200 drop-shadow-lg text-center leading-relaxed max-w-4xl px-2"
    style={{ 
      fontSize: 'clamp(0.9rem, calc(100vw / 30), 1.5rem)',
      lineHeight: '1.3'
    }}
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.8 }}
  >
    Experience ceiling fans reimagined with{" "}
    <span className="text-[#e49385] font-medium">elegance</span>,{" "}
    <span className="text-[#e49385] font-medium">intelligence</span> &{" "}
    <span className="text-[#e49385] font-medium">silent strength</span>
  </motion.p>
</div>

        {/* Scroll Down Button */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            onClick={() => {
              // Use enhanced smooth scroll to next section
              scrollToNextSectionEnhanced(null, { 
                duration: 1000, 
                easing: 'easeInOutCubic',
                offset: -80 
              });
            }}
            className="group bg-gradient-to-r from-[#ba6a5a] to-[#e49385] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 8px 30px rgba(186, 106, 90, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            aria-label="Scroll to next section"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e49385] to-[#ba6a5a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            
            {/* Icon */}
            <motion.div
              whileHover={{ y: 2 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
          </motion.button>
        </motion.div>

        </div>
      </section>

      {/* ✅ Our Top Picks */}
      <section className="py-16 bg-gradient-to-br from-[#2f2f2f] via-[#1a1a1a] to-[#2f2f2f] snap-start w-full px-4 md:px-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#e49385] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#ba6a5a] to-transparent rounded-full blur-3xl"></div>
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
              🌟 TOP COLLECTION
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover the{" "}
              <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
                Collection
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Premium ceiling fans engineered for{" "}
              <span className="text-[#e49385] font-medium">power</span>,{" "}
              <span className="text-[#e49385] font-medium">style</span> &{" "}
              <span className="text-[#e49385] font-medium">silence</span>
            </motion.p>
          </div>

          {/* Fan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
            {[
              { image: skyroImg, name: "Skyro", id: "skyro" },
              { image: inaraImg, name: "Inara", id: "inara" },
              { image: evaaraImg, name: "eVAARA", id: "evaara" },
              { image: laraImg, name: "Lara BLDC ", id: "lara" }
            ].map((fan, index) => (
              <Link key={index} to={`/fan/${fan.id}`}>
                <motion.div
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
                  
                  {/* Fan Image */}
                  <div className="relative z-10 mb-8">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6">
                      <img 
                        src={fan.image} 
                        alt={fan.name} 
                        className="h-52 w-full object-contain transform group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-[#ba6a5a] transition-colors duration-300">
                      {fan.name}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      Silent operation, smart control, superior airflow
                    </p>
                    
                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ba6a5a] to-[#e49385] text-white font-semibold rounded-full group-hover:shadow-lg group-hover:shadow-[#ba6a5a]/25 transition-all duration-300">
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tl from-[#e49385] to-[#ba6a5a] rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Ceiling Fans - Enhanced Modern Design */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#2f2f2f] to-[#1a1a1a] snap-start w-full px-4 md:px-12 relative overflow-hidden">
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
              transition={{ duration: 0.6 }}
            >
              ⭐ FEATURED COLLECTION
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ceiling{" "}
              <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
                Fans
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our premium ceiling fans engineered for{" "}
              <span className="text-[#e49385] font-medium">power</span>,{" "}
              <span className="text-[#e49385] font-medium">style</span> &{" "}
              <span className="text-[#e49385] font-medium">silence</span>
            </motion.p>
          </div>

          {/* Fan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { image: skyroImg, name: "SKYRO", id: "skyro", desc: "Premium BLDC technology with whisper-quiet operation" },
              { image: inaraImg, name: "INARA", id: "inara", desc: "Smart home ready with LED lighting integration" },
              { image: evaaraImg, name: "eVAARA", id: "evaara", desc: "Exceptional value with modern aesthetics" },
              { image: laraImg, name: "LARA", id: "lara", desc: "Elegant design with superior performance and reliability" }
            ].map((fan, index) => (
              <Link key={index} to={`/fan/${fan.id}`}>
                <motion.div
                  className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-3xl p-8 shadow-2xl border border-[#ba6a5a]/10 hover:border-[#ba6a5a]/30 transition-all duration-500 overflow-hidden"
                  whileHover={{ 
                    scale: 1.03,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ba6a5a]/20 via-transparent to-[#e49385]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Fan Image */}
                  <div className="relative z-10 mb-8">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6">
                      <img 
                        src={fan.image} 
                        alt={fan.name} 
                        className="h-52 w-full object-contain transform group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-[#ba6a5a] transition-colors duration-300">
                       {fan.name}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {fan.desc}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ba6a5a] to-[#e49385] text-white font-semibold rounded-full group-hover:shadow-lg group-hover:shadow-[#ba6a5a]/25 transition-all duration-300">
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tl from-[#e49385] to-[#ba6a5a] rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              to="/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#ba6a5a] text-[#ba6a5a] font-semibold rounded-full hover:bg-[#ba6a5a] hover:text-white transition-all duration-300 group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      

      {/* ✅ Testimonials Section */}
      <Testimonial />

      {/* ✅ Why Choose Anthem */}
      <section className="py-8 flex flex-col justify-center items-center text-center bg-[#1c1c1c] snap-start w-full px-4 md:px-12 rounded-3xl shadow-xl my-6">
        <motion.h2
          className="text-4xl font-bold mb-6 text-[#ba6a5a]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Anthem?
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-12">
          Our fans are engineered with precision to deliver unmatched efficiency, durability, and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full max-w-5xl">
          {[
            { emoji: "⚡️", title: "BLDC Motor", desc: "Only 3W–35W power usage. Saves ₹1500/year." },
            { emoji: "🌀", title: "Aerodynamic Blades", desc: "High airflow. Low noise." },
            { emoji: "🧲", title: "100% Copper Wiring", desc: "Long-lasting, safe & efficient." },
            { emoji: "🧼", title: "Anti-Dust Coating", desc: "Reduces cleaning frequency." },
            { emoji: "🎨", title: "Elegant Design", desc: "Perfectly blends with interiors." },
            { emoji: "🛡️", title: "Rust-Proof Body", desc: "Weatherproof durability." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#2f2f2f] backdrop-blur-md p-6 rounded-xl text-left border border-[#ba6a5a]/30 shadow hover:shadow-lg transition"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-3">{feature.emoji}</div>
              <h3 className="text-xl font-bold mb-2 text-[#e49385]">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Interactive Motor Comparison Section */}
      <section className="py-16 bg-gradient-to-br from-[#2f2f2f] via-[#1a1a1a] to-[#2f2f2f] snap-start w-full px-4 md:px-12 relative overflow-hidden">
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
              ⚡ TECHNOLOGY SHOWCASE
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
                Induction Motor
              </span>{" "}
              <span className="text-gray-400">&</span>{" "}
              <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
                BLDC Motor
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our diverse range of fan technologies, each engineered for specific needs with{" "}
              <span className="text-[#ba6a5a] font-medium">proven reliability</span> and{" "}
              <span className="text-[#e49385] font-medium">innovative design</span> for every home
            </motion.p>
          </div>

          {/* Interactive Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Induction Motor Card */}
            <motion.div
              className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-3xl p-8 shadow-2xl border border-[#ba6a5a]/20 hover:border-[#ba6a5a]/40 transition-all duration-500 overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                rotateX: 2,
                rotateY: 2
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ba6a5a]/10 via-transparent to-[#e49385]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Header */}
              <div className="relative z-10 text-center mb-8">
                <div className="text-6xl mb-4">⚙️</div>
                <h3 className="text-3xl font-bold text-[#ba6a5a] mb-2">Induction Motor</h3>
                <p className="text-gray-400 text-sm">Reliable & Proven Technology</p>
                <div className="inline-block px-3 py-1 bg-[#ba6a5a]/20 text-[#e49385] text-xs rounded-full mt-2 border border-[#ba6a5a]/30">
                  Time-Tested Excellence
                </div>
              </div>

              {/* Features */}
              <div className="relative z-10 space-y-4">
                {[
                  { icon: "�", label: "Powerful Performance", value: "High Torque Output", isNegative: false },
                  { icon: "�", label: "Robust Construction", value: "Built for Durability", isNegative: false },
                  { icon: "�", label: "Affordable Pricing", value: "Budget-Friendly", isNegative: false },
                  { icon: "⚡", label: "Instant Start", value: "Quick Response", isNegative: false },
                  { icon: "🏭", label: "Proven Technology", value: "Decades of Reliability", isNegative: false },
                  { icon: "�", label: "Simple Design", value: "Easy to Understand", isNegative: false },
                  { icon: "🛠️", label: "Repairable", value: "Local Service Available", isNegative: false },
                  { icon: "🌍", label: "Global Standard", value: "Widely Accepted", isNegative: false }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 group-hover:border-[#ba6a5a]/20 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-gray-300 text-sm">{feature.label}</span>
                    </div>
                    <span className="text-sm font-medium text-[#e49385]">
                      {feature.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#ba6a5a]/20 to-[#e49385]/20 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tl from-[#e49385]/10 to-[#ba6a5a]/10 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
            </motion.div>

            {/* BLDC Motor Card */}
            <motion.div
              className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-3xl p-8 shadow-2xl border border-[#ba6a5a]/20 hover:border-[#ba6a5a]/40 transition-all duration-500 overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                rotateX: 2,
                rotateY: -2
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ba6a5a]/20 via-transparent to-[#e49385]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Header */}
              <div className="relative z-10 text-center mb-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-3xl font-bold text-[#ba6a5a] mb-2">BLDC Motor</h3>
                <p className="text-gray-400 text-sm">Advanced Technology</p>
                <div className="inline-block px-3 py-1 bg-[#ba6a5a]/20 text-[#e49385] text-xs rounded-full mt-2 border border-[#ba6a5a]/30">
                  Future Ready
                </div>
              </div>

              {/* Features */}
              <div className="relative z-10 space-y-4">
                {[
                  { icon: "⚡", label: "Ultra Energy Efficient", value: "3W - 35W", isNegative: false },
                  { icon: "💰", label: "Low Operating Cost", value: "₹200-800/year", isNegative: false },
                  { icon: "🔇", label: "Whisper Silent", value: "15-25 dB", isNegative: false },
                  { icon: "🎛️", label: "Variable Speed", value: "Infinite Control", isNegative: false },
                  { icon: "🔧", label: "Low Maintenance", value: "Minimal Service", isNegative: false },
                  { icon: "📱", label: "Smart Ready", value: "Remote & App Control", isNegative: false },
                  { icon: "🌡️", label: "Cool Operation", value: "Minimal Heat", isNegative: false },
                  { icon: "🌱", label: "Eco-Friendly", value: "85-95% Efficiency", isNegative: false }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 group-hover:border-[#ba6a5a]/20 transition-colors duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-gray-300 text-sm">{feature.label}</span>
                    </div>
                    <span className="text-sm font-medium text-[#e49385]">
                      {feature.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tl from-[#e49385] to-[#ba6a5a] rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
            </motion.div>
          </div>

          {/* Key Benefits Summary */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f] rounded-2xl p-8 border border-[#ba6a5a]/20">
              <h4 className="text-2xl font-bold text-[#ba6a5a] mb-6">🏆 Both Technologies Excel in Their Own Way</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="flex flex-col items-center p-6 bg-[#ba6a5a]/5 rounded-xl border border-[#ba6a5a]/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-3">⚙️</div>
                  <h5 className="text-lg font-semibold text-[#ba6a5a] mb-3">Induction Motor Benefits</h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2"><span>💪</span> Proven durability & reliability</div>
                    <div className="flex items-center gap-2"><span>💰</span> Budget-friendly initial cost</div>
                    <div className="flex items-center gap-2"><span>🔧</span> Easy local repairs & service</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center p-6 bg-[#ba6a5a]/5 rounded-xl border border-[#ba6a5a]/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-3">🚀</div>
                  <h5 className="text-lg font-semibold text-[#e49385] mb-3">BLDC Motor Benefits</h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2"><span>⚡</span> Ultra-efficient power savings</div>
                    <div className="flex items-center gap-2"><span>🔇</span> Whisper-quiet operation</div>
                    <div className="flex items-center gap-2"><span>📱</span> Smart home ready features</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link 
              to="/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ba6a5a] to-[#e49385] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#ba6a5a]/25 transition-all duration-300 group"
            >
              <span>Explore All Our Fans</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
