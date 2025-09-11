// import React, { useState } from "react";
// import {
//     Menu, X, Bell, Heart, Megaphone,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const BookingNavbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const links = [
//         { name: "Notification", href: "/", icon: Bell },
//         { name: "Favorites", href: "#", icon: Heart },
//         { name: "My Ads", href: "#", icon: Megaphone },
//     ];

//     const navVariants = {
//         hidden: { opacity: 0, y: -20 },
//         show: {
//             opacity: 1,
//             y: 0,
//             transition: { staggerChildren: 0.15, duration: 0.5 },
//         },
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: -15 },
//         show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//     };

//     return (
//         <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl shadow-md border-b">
//             <motion.nav
//                 variants={navVariants}
//                 initial="hidden"
//                 animate="show"
//                 className="container mx-auto flex items-center justify-between px-4 py-3"
//             >
//                 {/* Logo */}
//                 <motion.div variants={itemVariants}>
//                     <Link to="/" className="flex items-center">
//                         <div className="font-bold text-2xl md:text-3xl text-[#020A64] tracking-wide">
//                             SpaceOn
//                         </div>
//                     </Link>
//                 </motion.div>

//                 {/* Desktop Nav */}
//                 <motion.ul
//                     className="hidden md:flex flex-1 justify-center items-center gap-10 text-gray-700 font-medium"
//                     variants={navVariants}
//                 >
//                     {links.map((link) => (
//                         <motion.li key={link.name} variants={itemVariants} className="relative">
//                             <Link
//                                 to={link.href}
//                                 className="flex items-center gap-2 group relative"
//                             >
//                                 <link.icon className="w-5 h-5 text-[#020A64]" />
//                                 <span className="relative">
//                                     {link.name}
//                                     <span
//                                         className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#020A64]
//                        transition-all duration-300 group-hover:w-full"
//                                     />
//                                 </span>
//                             </Link>
//                         </motion.li>
//                     ))}
//                 </motion.ul>

//                 {/* Right Section */}
//                 <div className="flex items-center gap-4">
//                     {/* Desktop Profile Button */}
//                     <Link to="/dashboard">
//                         <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#020A64] text-white font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer">
//                             A
//                         </div>
//                     </Link>

//                     {/* Mobile Hamburger */}
//                     <motion.button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="md:hidden text-gray-700 hover:text-blue-900 transition"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         {isOpen ? <X size={26} /> : <Menu size={26} />}
//                     </motion.button>
//                 </div>
//             </motion.nav>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
//                             {links.map((link, index) => (
//                                 <motion.li
//                                     key={link.name}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                 >
//                                     <Link
//                                         to={link.href}
//                                         onClick={() => setIsOpen(false)}
//                                         className="flex items-center gap-3 hover:text-blue-900 transition"
//                                     >
//                                         <link.icon className="w-5 h-5 text-[#020A64]" />
//                                         <span>{link.name}</span>
//                                     </Link>
//                                 </motion.li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };

// export default BookingNavbar;


import React, { useState } from "react";
import { Menu, X, Bell, Heart, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const BookingNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Notification", href: "/", icon: Bell },
        { name: "Favorites", href: "#", icon: Heart },
        { name: "My Ads", href: "#", icon: Megaphone },
    ];

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl shadow-md ">
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="show"
                className="w-[93%] mx-auto flex items-center justify-between py-3"
            >
                {/* Logo */}
                <motion.div variants={itemVariants}>
                    <Link to="/" className="flex items-center">
                        <div className="font-bold text-xl md:text-2xl text-[#020A64] tracking-wide">
                            SpaceOn
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <motion.ul
                    className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm text-gray-700 font-medium"
                    variants={navVariants}
                >
                    {links.map((link) => (
                        <motion.li key={link.name} variants={itemVariants} className="relative">
                            <Link
                                to={link.href}
                                className="flex items-center gap-2 group relative"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.25, rotate: 7 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <link.icon className="w-4 h-4 text-gray-700" aria-hidden="true" />
                                </motion.div>
                                <span className="relative">
                                    {link.name}
                                    <span
                                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"
                                    />
                                </span>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Desktop Profile Button */}
                    <Link to="/dashboard">
                        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#020A64] text-white font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer">
                            A
                        </div>
                    </Link>

                    {/* Mobile Hamburger */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="md:hidden text-gray-700 hover:text-blue-900 transition"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col gap-4 p-4 text-sm text-gray-700 font-medium">
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 hover:text-blue-900 transition"
                                    >
                                        <link.icon className="w-4 h-4 text-[#020A64]" aria-hidden="true" />
                                        <span>{link.name}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default BookingNavbar;
