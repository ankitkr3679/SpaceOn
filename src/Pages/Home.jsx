import React, { useState } from "react";
import Banner from "../assets/Banner.webp";

const categories = [
  "All",
  "Warehouse",
  "Yard",
  "Container",
  "Room",
  "Parking",
  "Other",
];

const HeroSearchSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div
      className="relative w-[93%] mx-auto mt-12 
                 h-[280px] sm:h-[320px] md:h-[280px] lg:h-[300px] 
                 bg-cover bg-center rounded-2xl overflow-hidden flex items-center justify-center shadow-lg"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        {/* Heading */}
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug drop-shadow-lg">
          Find Your Perfect Space
        </h1>

        {/* Search container */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl">
          {/* Categories */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-4">
            {/* Searching text (top in mobile, inline in desktop) */}
            <span className="text-white font-semibold mb-2 sm:mb-0 sm:mr-2">
              Searching in
            </span>

            {/* Scrollable categories */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm sm:text-[15px] rounded-full font-normal transition whitespace-nowrap ${activeCategory === cat
                    ? "bg-[#020A64] text-white shadow-md"
                    : "text-white hover:bg-[#020A64] hover:text-white"
                    }`}

                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Input */}
            <div className="flex-1 w-full bg-white rounded-md shadow-lg border border-gray-200">
              <input
                type="text"
                placeholder={`Search for ${activeCategory}`}
                className="w-full px-4 py-2 sm:px-5 sm:py-3 text-gray-700 outline-none text-sm sm:text-base rounded-md"
              />
            </div>

            {/* Button */}
            <button className="w-full sm:w-auto bg-[#020A64] px-6 sm:px-8 py-2 sm:py-3 rounded-md text-white font-semibold hover:bg-[#010642] transition flex items-center justify-center gap-2 shadow-lg cursor-pointer text-sm sm:text-base">
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchSection;
