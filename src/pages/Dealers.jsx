import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, PackageCheck } from "lucide-react";

const amazonLogo = "/amazon.png";
const flipkartLogo = "/flipkart.png";

const Dealer = () => {
  return (
    <div className="bg-[#1c1c1c] text-white py-16 w-full" id="dealer">
      <div className="px-4 md:px-12 max-w-6xl mx-auto space-y-16">

        {/* Headline */}
        <section aria-labelledby="dealer-heading">
          <motion.h2
            id="dealer-heading"
            className="text-4xl font-bold text-center text-[#ba6a5a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Distribute Excellence – Partner with Anthem
          </motion.h2>

          <motion.p
            className="text-gray-300 text-center max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Business with Anthem means dealing in products that don’t just sell, but delight.
          </motion.p>
        </section>

        {/* For Dealers */}
        <section aria-labelledby="dealer-benefits">
          <motion.div
            className="bg-[#2f2f2f] border border-[#ba6a5a]/30 rounded-xl p-6 shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3
              id="dealer-benefits"
              className="text-2xl font-semibold text-[#e49385] mb-4 flex items-center gap-2"
            >
              <BriefcaseBusiness className="w-6 h-6" />
              For Dealers
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Exclusive Premium Rights</li>
              <li>Eye-Catching Products, Easy to Sell</li>
              <li>Marketing Tools & Training Support</li>
            </ul>
          </motion.div>
        </section>

        {/* For B2B & Corporates */}
        <section aria-labelledby="b2b-benefits">
          <motion.div
            className="bg-[#2f2f2f] border border-[#ba6a5a]/30 rounded-xl p-6 shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3
              id="b2b-benefits"
              className="text-2xl font-semibold text-[#e49385] mb-4 flex items-center gap-2"
            >
              <PackageCheck className="w-6 h-6" />
              For B2B & Corporates
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Bulk Orders for Projects, Hotels, Real Estate</li>
              <li>Co-Branding & Custom Solutions</li>
              <li>Expert Technical Consulting</li>
            </ul>
          </motion.div>
        </section>

        {/* Online Links */}
        <section aria-labelledby="online-links">
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="https://www.amazon.in/s?k=anthem+fan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition flex items-center gap-4"
            >
              <img src={amazonLogo} alt="Buy Anthem Fan on Amazon" className="h-10" />
            </a>

            <a
              href="https://www.flipkart.com/search?q=anthem+fan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition flex items-center gap-4"
            >
              <img src={flipkartLogo} alt="Buy Anthem Fan on Flipkart" className="h-10" />
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Dealer;
