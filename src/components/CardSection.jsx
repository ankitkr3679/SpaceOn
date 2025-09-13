import React from "react";
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
  // 🟦 Containers (5 items)
  { id: 1, link: "/Booking", image: img1, title: "Containers", location: "Abu Dhabi", price: "AED 4,500 / month", rating: 4.8 },
  { id: 2, link: "/Booking", image: img4, title: "Containers", location: "Ajman", price: "AED 6,000 / month", rating: 4.7 },
  { id: 3, link: "/Booking", image: img5, title: "Containers", location: "Fujairah", price: "AED 7,200 / month", rating: 3.9 },
  { id: 4, link: "/Booking", image: img9, title: "Containers", location: "Abu Dhabi", price: "AED 4,500 / month", rating: 4.8 },
  { id: 5, link: "/Booking", image: img12, title: "Containers", location: "Ajman", price: "AED 6,000 / month", rating: 4.7 },

  // 🟩 Yards (5 items)
  { id: 6, link: "/Booking", image: img2, title: "Yards", location: "Dubai", price: "AED 7,200 / month", rating: 3.6 },
  { id: 7, link: "/Booking", image: img8, title: "Yards", location: "Umm Al Quwain", price: "AED 5,200 / month", rating: 4.8 },
  { id: 8, link: "/Booking", image: img10, title: "Yards", location: "Dubai", price: "AED 7,200 / month", rating: 3.6 },
  { id: 9, link: "/Booking", image: img14, title: "Yards", location: "Umm Al Quwain", price: "AED 5,200 / month", rating: 4.8 },
  { id: 10, link: "/Booking", image: img16, title: "Yards", location: "Sharjah", price: "AED 6,800 / month", rating: 4.1 },

  // 🟥 Warehouses (5 items)
  { id: 11, link: "/Booking", image: img3, title: "Warehouses", location: "Sharjah", price: "AED 5,000 / month", rating: 4.9 },
  { id: 12, link: "/Booking", image: img7, title: "Warehouses", location: "Ras Al Khaimah", price: "AED 4,500 / month", rating: 4.6 },
  { id: 13, link: "/Booking", image: img11, title: "Warehouses", location: "Sharjah", price: "AED 5,000 / month", rating: 4.9 },
  { id: 14, link: "/Booking", image: img13, title: "Warehouses", location: "Abu Dhabi", price: "AED 7,500 / month", rating: 4.2 },
  { id: 15, link: "/Booking", image: img15, title: "Warehouses", location: "Ras Al Khaimah", price: "AED 4,500 / month", rating: 4.6 },
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

/* 📦 Card (no shadow by default; shadow + lift on hover) */
const Card = ({ listing }) => (
  <div className="h-full min-w-0">
    <Link to={listing.link} className="block h-full">
      <div className=" rounded-xl hover:p-2  hover:bg-white shadow-none h-full transition-all hover:shadow-lg hover:-translate-y-0.5 hover:border-indigo-200 flex flex-col">
        {/* Image with fixed aspect ratio for stability */}
        <div className="relative overflow-hidden rounded-md">
          <div className="w-full aspect-[4/3] sm:aspect-[16/10]">
            <img
              src={listing.image}
              alt={`${listing.title} in ${listing.location}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1280px) 20vw, 20vw"
            />
          </div>
        </div>

        {/* Info */}
        <div className="pt-3 sm:pt-4 flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-[13px] sm:text-sm md:text-base font-semibold text-[#111827] truncate">
              {listing.title}
            </h3>
            <p className="flex items-center text-[10.5px] sm:text-[11.5px] text-gray-600 ml-2 min-w-0">
              <FaMapMarkerAlt className="mr-1 text-red-500 shrink-0" />
              <span className="truncate">{listing.location}</span>
            </p>
          </div>

          <p className="text-sm sm:text-[12px]  text-[#020A64] mt-2">
            {listing.price}
          </p>
          <div className="mt-2 flex flex-row items-center gap-2">
            <StarRating rating={listing.rating} />
            <span className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 block">
              {Math.max(0, Math.min(5, Number(listing.rating) || 0)).toFixed(1)} / 5
            </span>
          </div>

        </div>

      </div>
    </Link>
  </div>
);

/* 🧱 Row Section (5 per row on lg+) */
const RowSection = ({ title, items }) => (
  <section className="py-3 sm:py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-[clamp(1.1rem,2vw,1.6rem)]   mb-4">
        {title}
      </h2>
      <div className="grid gap-3.5 sm:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {items.map((listing) => (
          <Card key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  </section>
);

/* 🔁 Group listings by type (to mimic: “Popular in …” per row) */
const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = item[key] ?? "Others";
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});

/* 🚀 Page */
const CardSection = () => {
  const grouped = groupBy(listings, "title"); // "Containers", "Yards", "Warehouses", …

  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#EEF2FF]">
      {Object.entries(grouped).map(([name, items]) => (
        <RowSection key={name} title={`Popular in ${name}`} items={items} />
      ))}
    </div>
  );
};

export default CardSection;
