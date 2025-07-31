import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const faqs = [
    {
      question: "What makes Anthem fans different from other brands?",
      answer: "Anthem fans are designed and manufactured entirely in-house by Emsquare Industries. We combine three decades of engineering excellence with elegant design and cutting-edge BLDC technology. The result? A fan that's as smart and silent as it is stylish."
    },
    {
      question: "What is a BLDC fan, and why should I choose it?",
      answer: "BLDC (Brushless Direct Current) fans use advanced motors that consume up to 65% less energy compared to traditional induction fans. Anthem's BLDC fans are quiet, remote-operated, and come with a 5-year motor warranty, making them ideal for modern, energy-conscious homes."
    },
    {
      question: "Do Anthem fans come with a remote control?",
      answer: "Yes, all Lara BLDC Series and some Inara models come with an RF (Radio Frequency) remote. It features 6-speed control, boost mode, and works from anywhere in the room—even through walls."
    },
    {
      question: "How do I choose the right Anthem fan for my room?",
      answer: "Here's a simple guide: Inara Series for designer spaces and luxury living rooms, Skyro Series for modern bedrooms and offices, Lara BLDC for energy-saving smart homes, and Eco-Deco for everyday spaces with value focus. For personalized assistance, visit our Virtual Demo Room."
    },
    {
      question: "What warranty do you offer?",
      answer: "We offer industry-leading warranties: Induction Motor Fans - 2 years, BLDC Motors - 5 years, BLDC PCB - 2 years. Service support is just a call or click away."
    },
    {
      question: "Where can I buy Anthem fans?",
      answer: "You can buy Anthem fans through authorized dealers and retail partners across India, B2B partnerships for bulk or project needs, and direct purchase from our website (coming soon)."
    },
    {
      question: "How can I become a dealer or distributor?",
      answer: "We welcome business partners who want to deliver premium products. Visit our Dealer & Distribution page or fill out the Dealer Inquiry Form to get started. We offer exclusive territories, high-margin products, and complete backend support."
    },
    {
      question: "Are your fans easy to install?",
      answer: "Absolutely. All Anthem fans are engineered for quick and seamless installation. Each product comes with an easy-to-follow guide, and our support team is ready to help if needed."
    },
    {
      question: "Do you provide service after purchase?",
      answer: "Yes. Our support doesn't stop at the sale. We offer installation help, warranty service, and spare parts & troubleshooting. Just reach us at support@emsquarefans.com or call our hotline."
    },
    {
      question: "Can I experience the fan before buying?",
      answer: "Yes, you can! Explore our Virtual Demo Room where you can view fans in 360°, compare speed, sound, and design, and visualize how a fan fits in your room setup."
    },
    {
      question: "Are your fans suitable for both residential and commercial spaces?",
      answer: "Yes. Anthem fans are designed to suit a wide range of applications – from premium homes and offices to hotels, showrooms, and institutional projects."
    },
    {
      question: "What materials are used in Anthem fans?",
      answer: "We use high-quality materials such as 100% copper winding, anti-dust coatings, and aerodynamic blades. All products undergo stringent quality checks and performance testing."
    },
    {
      question: "What makes your remote control unique?",
      answer: "Our RF remote can operate through walls and from any corner of the room. It features boost mode, sleep mode, and 6-speed control for total convenience."
    },
    {
      question: "Is after-sales service available pan-India?",
      answer: "Yes, we have a growing network of service partners and a central support team to assist customers across India. Warranty and repairs are managed seamlessly."
    },
    {
      question: "Can I place a bulk or institutional order?",
      answer: "Absolutely. We supply fans for bulk needs in real estate projects, hospitality, government, and education sectors. Visit our Dealer & Distribution page to inquire."
    },
    {
      question: "Do your fans make noise?",
      answer: "Our BLDC and premium induction models are engineered for ultra-silent performance, ensuring peace and comfort in your space."
    },
    {
      question: "Can I replace the remote if lost or damaged?",
      answer: "Yes. Replacement remotes are available. Please contact our service team with your fan model number to request one."
    },
    {
      question: "What sizes are available in your fan models?",
      answer: "Our fans are typically available in 1200 mm sweep size, which suits most room sizes. Custom or larger sweeps may be available on request."
    }
  ];

  return (
    <div className="bg-[#1c1c1c] text-white pt-20 pb-10 w-full">
      <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#2f2f2f] to-[#1a1a1a] w-full px-4 md:px-12 relative overflow-hidden">
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
              ❓ FREQUENTLY ASKED QUESTIONS
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your{" "}
              <span className="bg-gradient-to-r from-[#ba6a5a] to-[#e49385] bg-clip-text text-transparent">
                Questions
              </span>{" "}
              Answered
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Everything you need to know about Anthem ceiling fans –{" "}
              <span className="text-[#e49385] font-medium">from features to service</span>
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-2xl border border-[#ba6a5a]/10 hover:border-[#ba6a5a]/30 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-[#ba6a5a]/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ba6a5a] transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#ba6a5a] to-[#e49385] rounded-full flex items-center justify-center">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="border-t border-[#ba6a5a]/20 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact Support */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <Link 
              to="/support"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#ba6a5a] text-[#ba6a5a] font-semibold rounded-full hover:bg-[#ba6a5a] hover:text-white transition-all duration-300 group"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
