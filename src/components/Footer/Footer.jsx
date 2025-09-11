import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// Footer Component
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#020A64] text-[#C4C6DE]">
      <div className="max-w-7xl mx-auto px-3 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-white tracking-wide"
        >
          <div className="font-bold text-2xl md:text-3xl text-white tracking-wide">
            SpaceOn
          </div>
        </motion.div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          {["About Us", "Terms & Conditions", "Privacy Policy", "Contact Us"].map(
            (link, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a
                  href="#"
                  className="relative group text-[#E5E7EB] hover:text-white transition duration-300"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            )
          )}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: <FaFacebookF />, href: "#" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaInstagram />, href: "#" },
            { icon: <FaLinkedinIn />, href: "#" },
            { icon: <FaYoutube />, href: "#" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#C4C6DE]/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#020A64] transition duration-300 shadow-md"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C4C6DE]/30 mt-6 py-4 text-center text-sm text-[#C4C6DE]">
        © {year} <span className="font-semibold text-white">SpaceOn</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
