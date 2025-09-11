import React from "react";
import { motion } from "framer-motion";

const ChoseBooking = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 px-4 sm:px-6"
        >
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#020A64] text-center mb-4 sm:mb-6 md:mb-8">
                    Choose your booking
                    <span className="block w-16 sm:w-20 h-1 bg-[#C4C6DE] mx-auto mt-3 rounded-full" />
                </h2>

                {/* ✅ Grid: 2 cols on mobile → 4 cols on md+ */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-8">
                    <label className="block">
                        <span className="sr-only">Select Date</span>
                        <select
                            className="w-full border border-gray-300 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 
                         text-gray-700 bg-white focus:outline-none focus:ring-2 
                         focus:ring-[#020A64] shadow-sm cursor-pointer"
                            aria-label="Select Date"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Date
                            </option>
                            <option>2025-08-25</option>
                            <option>2025-08-26</option>
                            <option>2025-08-27</option>
                        </select>
                    </label>

                    <label className="block">
                        <span className="sr-only">Select Time</span>
                        <select
                            className="w-full border border-gray-300 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 
                         text-gray-700 bg-white focus:outline-none focus:ring-2 
                         focus:ring-[#020A64] shadow-sm cursor-pointer"
                            aria-label="Select Time"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Time
                            </option>
                            <option>10:00 AM</option>
                            <option>12:00 PM</option>
                            <option>03:00 PM</option>
                            <option>06:00 PM</option>
                        </select>
                    </label>

                    <label className="block">
                        <span className="sr-only">Duration</span>
                        <select
                            className="w-full border border-gray-300 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 
                         text-gray-700 bg-white focus:outline-none focus:ring-2 
                         focus:ring-[#020A64] shadow-sm cursor-pointer"
                            aria-label="Duration"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Duration
                            </option>
                            <option>1 Hour</option>
                            <option>2 Hours</option>
                            <option>Half Day</option>
                            <option>Full Day</option>
                        </select>
                    </label>

                    <label className="block">
                        <span className="sr-only">Location</span>
                        <select
                            className="w-full border border-gray-300 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 
                         text-gray-700 bg-white focus:outline-none focus:ring-2 
                         focus:ring-[#020A64] shadow-sm cursor-pointer"
                            aria-label="Location"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Location
                            </option>
                            <option>Abu Dhabi</option>
                            <option>Dubai</option>
                            <option>Sharjah</option>
                            <option>Fujairah</option>
                        </select>
                    </label>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full sm:w-auto bg-[#020A64] text-white px-6 sm:px-8 py-3 rounded-xl 
                       shadow-md hover:shadow-lg transition cursor-pointer 
                       text-sm sm:text-base"
                    >
                        Book & Pay
                    </motion.button>
                </div>

                <p className="text-center mt-4 sm:mt-6">
                    <a href="#" className="text-[#020A64] text-sm font-medium hover:underline">
                        View cancellation policy
                    </a>
                </p>
            </div>
        </motion.div>
    );
};

export default ChoseBooking;
