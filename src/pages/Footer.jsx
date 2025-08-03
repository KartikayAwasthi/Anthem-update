import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const anthemLogo = "/Anthem-logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full bg-white text-[#5a2f2a] border-t border-[#e7b2a6] shadow-inner"
    >
      <div className="py-10 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo Section */}
          <div>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img
                src={anthemLogo}
                alt="Anthem Logo"
                className="h-16 w-auto mb-4 cursor-pointer"
              />
            </Link>
            <p className="text-sm text-[#6b3d36]">
              Crafting elegance with every rotation. Premium fans for modern homes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#ba6a5a] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#36454F]">
              {[
                { label: "Home", to: "/" },
                { label: "Products", to: "/products" },
                { label: "About", to: "/about" },
                { label: "Support", to: "/support" },
                { label: "Dealers", to: "/dealer" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={(e) => {
                      if (link.to === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="hover:text-[#ba6a5a] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-[#ba6a5a] mb-4">Contact</h3>
            <p className="text-sm mb-2">
              📧{" "}
              <a
                href="mailto:info@emsquareglobal.com"
                className="underline hover:text-[#ba6a5a]"
              >
                info@emsquareglobal.com
              </a>
            </p>
            <p className="text-sm mb-2">
              📞{" "}
              <a href="tel:+919930101710" className="underline hover:text-[#ba6a5a]">
                +91 9930101710
              </a>
            </p>
            <p className="text-sm mb-4">
              📍{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+No.72,+GDIC,+Bethora+Industrial+Estate,+Bethora,+Ponda,+Goa+-+403409"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#ba6a5a]"
              >
                Plot No.72, GDIC, Bethora Industrial Estate, Ponda, Goa - 403409
              </a>
            </p>

            {/* Glassmorphism Social Icons */}
            <div className="flex gap-4 mt-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61564845184269",
                  title: "Facebook",
                  icon: <Facebook size={20} />,
                  hoverColor: "hover:text-[#1877f2]", // Facebook blue
                },
                {
                  href: "https://www.instagram.com/emsquareindustries/",
                  title: "Instagram",
                  icon: <Instagram size={20} />,
                  hoverColor: "hover:text-[#E4405F]", // Instagram pink
                },
                {
                  href: "https://www.linkedin.com/in/emsquare-industries-06888131b/",
                  title: "LinkedIn",
                  icon: <Linkedin size={20} />,
                  hoverColor: "hover:text-[#0077b5]", // LinkedIn blue
                },
              ].map(({ href, title, icon, hoverColor }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-[#5a2f2a] ${hoverColor} shadow-lg transition-all duration-300`}
                  title={title}
                >
                  <div className="absolute inset-0 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center text-sm text-[#a07c73] mt-10 pt-6 border-t border-[#e7b2a6]">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#ba6a5a] font-semibold">Anthem Fans</span>. All
          rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
