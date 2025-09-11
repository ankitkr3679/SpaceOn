import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";

const listings = [
  { id: 1, link: "/Booking", image: img1, title: "Containers", location: "Abu Dhabi", price: "AED 4,500 / month", rating: 4.8 },
  { id: 2, link: "/Booking", image: img2, title: "Yards", location: "Dubai", price: "AED 7,200 / month", rating: 3.6 },
  { id: 3, link: "/Booking", image: img3, title: "Warehouses", location: "Sharjah", price: "AED 5,000 / month", rating: 4.9 },
  { id: 4, link: "/Booking", image: img6, title: "Containers", location: "Ajman", price: "AED 6,000 / month", rating: 4.7 },
  { id: 5, link: "/Booking", image: img7, title: "Warehouses", location: "Abu Dhabi", price: "AED 7,500 / month", rating: 4.2 },
  { id: 6, link: "/Booking", image: img8, title: "Yards", location: "Umm Al Quwain", price: "AED 5,200 / month", rating: 4.8 },
  { id: 7, link: "/Booking", image: img4, title: "Warehouses", location: "Ras Al Khaimah", price: "AED 4,500 / month", rating: 4.6 },
  { id: 8, link: "/Booking", image: img5, title: "Containers", location: "Fujairah", price: "AED 7,200 / month", rating: 3.9 },
  { id: 9, link: "/Booking", image: img9, title: "Containers", location: "Abu Dhabi", price: "AED 4,500 / month", rating: 4.8 },
  { id: 10, link: "/Booking", image: img10, title: "Yards", location: "Dubai", price: "AED 7,200 / month", rating: 3.6 },
  { id: 11, link: "/Booking", image: img11, title: "Warehouses", location: "Sharjah", price: "AED 5,000 / month", rating: 4.9 },
  { id: 12, link: "/Booking", image: img12, title: "Containers", location: "Ajman", price: "AED 6,000 / month", rating: 4.7 },
  { id: 13, link: "/Booking", image: img13, title: "Warehouses", location: "Abu Dhabi", price: "AED 7,500 / month", rating: 4.2 },
  { id: 14, link: "/Booking", image: img14, title: "Yards", location: "Umm Al Quwain", price: "AED 5,200 / month", rating: 4.8 },
  { id: 15, link: "/Booking", image: img15, title: "Warehouses", location: "Ras Al Khaimah", price: "AED 4,500 / month", rating: 4.6 },
  { id: 16, link: "/Booking", image: img16, title: "Containers", location: "Fujairah", price: "AED 7,200 / month", rating: 3.9 },
];

/* ⭐ Star Rating (clamped 0–5) */
const StarRating = ({ rating }) => {
  const safe = Math.max(0, Math.min(5, Number(rating) || 0));
  const stars = [];
  const full = Math.floor(safe);
  const half = safe % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= full) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (i === full + 1 && half) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-gray-300" />);
  }
  return <div className="flex items-center gap-[2px] text-sm">{stars}</div>;
};

/* 📦 Card */
const Card = ({ listing, index, reduceMotion }) => (
  <motion.div
    initial={reduceMotion ? false : { opacity: 0, y: 40 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={reduceMotion ? undefined : { delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    className="h-full min-w-0"
  >
    <Link to={listing.link} className="block h-full">
      <div className="bg-white/90 backdrop-blur rounded-xl border border-gray-200 shadow-sm h-full transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-indigo-200 flex flex-col">
        {/* Image with fixed aspect ratio for mobile stability */}
        <div className="relative overflow-hidden rounded-t-xl">
          <div className="w-full aspect-[4/3] sm:aspect-[16/10]">
            <motion.img
              src={listing.image}
              alt={`${listing.title} in ${listing.location}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </div>

        {/* Info */}
        <div className="p-3 sm:p-4 flex flex-col min-w-0">
          <h3 className="text-[13px] sm:text-sm md:text-base font-semibold text-[#111827] truncate">
            {listing.title}
          </h3>
          <p className="flex items-center text-[10.5px] sm:text-[11.5px] text-gray-600 mt-1 min-w-0">
            <FaMapMarkerAlt className="mr-1 text-red-500 shrink-0" />
            <span className="truncate">{listing.location}</span>
          </p>
          <p className="text-sm sm:text-[15px] font-medium text-[#020A64] mt-2">
            {listing.price}
          </p>
          <div className="mt-2">
            <StarRating rating={listing.rating} />
            <span className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 block">
              {Math.max(0, Math.min(5, Number(listing.rating) || 0)).toFixed(1)} / 5
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

/* 🧱 Section */
const CardSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-[#F9FAFB] to-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-[clamp(1.25rem,2.5vw,2.25rem)] font-bold text-[#020A64] mb-6 sm:mb-8 md:mb-10 text-center relative">
          Popular Listings
          <span className="block w-16 sm:w-20 h-1 bg-[#C4C6DE] mx-auto mt-3 rounded-full" />
        </h2>

        {/* ✅ 2 cards on phones, 3 on md, 4 on lg+ */}
        <div className="grid gap-3.5 sm:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listings.map((listing, index) => (
            <Card key={listing.id} listing={listing} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
