import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BecomeHost = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center py-16 px-6 flex-grow bg-gradient-to-br from-[#EEF2FF] via-[#F9FAFB] to-white overflow-hidden">
                {/* Content */}
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-5xl font-bold text-[#020A64] mb-6 relative z-10"
                >
                    Become a Host
                    <span className="block w-20 h-1 bg-[#C4C6DE] mx-auto mt-3 rounded-full"></span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-700 mb-2 relative z-10"
                >
                    Have a space to list?
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-700 mb-8 relative z-10"
                >
                    Earn by renting it to others
                </motion.p>

                <Link to="https://spaceon-host.bitcodehub.in/" target="_blank" rel="noopener noreferrer">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-8 py-3 rounded-lg font-semibold text-white bg-[#020A64] shadow-lg hover:shadow-xl transition duration-300 relative z-10 cursor-pointer"
                    >
                        Become a Host
                    </motion.button>
                </Link>
            </section>
        </div>
    );
};

export default BecomeHost;
