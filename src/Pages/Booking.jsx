import React, { useState, useCallback, useId, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaRulerCombined,
  FaBolt,
  FaCar,
  FaStar,
  FaWarehouse,
  FaTruck,
  FaFireExtinguisher,
  FaShieldAlt,
  FaClock,
  FaBan,
  FaCheckCircle,
  FaStarHalfAlt,
  FaRegStar,
  FaSnowflake,
  FaVideo,
  FaHeadset,
} from "react-icons/fa";
import {
  ChevronDown,
  Square,
  MapPin,
  Heart,
  Share2,
  Mail,
  Phone,
  User,
  Power,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import Event1 from "../assets/Event1.jpg";
import Event2 from "../assets/Event2.jpg";
import Event3 from "../assets/Event3.jpg";
import Event4 from "../assets/Event4.jpg";
import Event5 from "../assets/Event5.jpg";
import { BsWhatsapp } from "react-icons/bs";
import { SiZebpay } from "react-icons/si";

const today = new Date().toISOString().split("T")[0];

/* ---------- Data ---------- */
const AMENITIES = [
  { label: "Climate controlled", icon: <FaSnowflake /> },
  { label: "24/7 CCTV", icon: <FaVideo /> },
  { label: "Loading dock", icon: <FaTruck /> },
  { label: "High ceilings", icon: <FaWarehouse /> },
];

const SIMILAR_LISTINGS = [
  { size: "49,464 sq ft", price: "AED 2,300,000 / yr", location: "Dubai Investment Park", rating: 4.6 },
  { size: "45,000 sq ft", price: "AED 2,500,000 / yr", location: "Sharjah Industrial Area", rating: 4.9 },
  { size: "46,000 sq ft", price: "AED 2,500,000 / yr", location: "Al Quoz, Dubai", rating: 4.7 },
];

const FAQS = [
  { question: "What types of warehouses are available?", answer: "We provide access to a wide range of warehouses, including cold storage, dry storage, bulk storage, and flexible shared spaces. Whether you need short-term or long-term storage, you’ll find tailored options that fit your business needs." },
  { question: "Can I rent open yards for containers and vehicles?", answer: "Yes, we offer secure open yards suitable for storing shipping containers, trucks, trailers, and other heavy equipment. These yards are available in various sizes with easy access for loading and unloading." },
  { question: "Do you provide container storage and handling?", answer: "Absolutely. Our listed facilities offer safe container storage with options for stacking, handling, and secure access. Some locations also provide crane and forklift services for container movement." },
  { question: "Is short-term storage possible?", answer: "Yes. We understand that businesses often require flexible arrangements. You can book warehouses or yards for days, weeks, or months depending on availability, without being tied to long contracts." },
  { question: "Are the spaces secure?", answer: "All warehouses and yards listed on our platform maintain security features like 24/7 CCTV surveillance, gated entry, and onsite staff to ensure your goods and containers are safe at all times." },
];

/* ---------- Helpers ---------- */
const RatingStars = ({ value = 0 }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) stars.push(<FaStar key={i} className="w-4 h-4" />);
    else if (value >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="w-4 h-4" />);
    else stars.push(<FaRegStar key={i} className="w-4 h-4" />);
  }
  return <div className="flex items-center gap-1 text-yellow-500">{stars}</div>;
};

const Avatar = ({ name = "" }) => {
  const initials = name
    .split(" ")
    .map((n) => n?.[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
  return (
    <div className="w-9 h-9 rounded-md bg-indigo-100 text-[#020A64] grid place-items-center text-sm font-semibold">
      {initials || "U"}
    </div>
  );
};

const ExpandableText = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, officiis voluptas. Perspiciatis, ex sint delectus enim ab eius perferendis, quidem corrupti id dolor vel earum quae cupiditate sapiente incidunt quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam in, placeat ut explicabo aliquam voluptatem fuga, est doloremque recusandae iure fugiat tenetur maxime quod debitis et, eum vitae exercitationem voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at, incidunt facilis distinctio quam ipsa ratione veniam, alias consequatur ea unde. Illum consequuntur aspernatur tempora ipsum earum eius temporibus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis temporibus maxime mollitia ipsam ab impedit, doloribus laboriosam tempora fugit sed recusandae voluptatem quibusdam a, iure aperiam labore neque blanditiis.";
  const previewText = text.slice(0, 200) + "...";

  return (
    <div>
      <p className="text-gray-700 leading-relaxed">{isExpanded ? text : previewText}</p>
      <button
        type="button"
        onClick={() => setIsExpanded((v) => !v)}
        className="mt-2 text-[#020A64] font-medium"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

// ---------- Reusable UI ----------
// const FeatureStatCard = ({ icon, label, value }) => (
//   <div className="bg-white p-6 rounded-2xl text-center border shadow-sm hover:shadow-md transition-all duration-200">
//     <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#020A64]/10 text-[#020A64] text-xl">
//       {icon}
//     </div>
//     <p className="text-gray-500 text-sm">{label}</p>
//     <p className="font-semibold text-lg text-[#020A64]">{value}</p>
//   </div>
// );

const FeatureStatCard = ({ icon, label, value }) => (
  <div className="bg-white p-3 rounded-xl text-center  shadow-sm hover:shadow-md transition-all duration-200">
    <div className="flex justify-center items-center w-10 h-10 mx-auto mb-2 rounded-full bg-[#020A64]/10 text-gray-500 text-lg">
      {icon}
    </div>
    <p className="text-gray-500 text-xs">{label}</p>
    <p className="font-semibold text-sm text-[#020A64]">{value}</p>
  </div>
);


// ---------- Feature Data ----------
const FEATURE_STATS = [
  { label: "Price", value: "AED 2,500,000 / yr", icon: <FaDollarSign /> },
  { label: "Size", value: "49,464 sq ft", icon: <FaRulerCombined /> },
  { label: "Power", value: "150 kW", icon: <FaBolt /> },
  { label: "Parking", value: "Yes • 50 cars", icon: <FaCar /> },
  { label: "Price", value: "AED 2,500,000 / yr", icon: <FaDollarSign /> },
  { label: "Size", value: "49,464 sq ft", icon: <FaRulerCombined /> },
];

// ---------- Feature Stats Section ----------
// const FeatureStatsSection = () => {
//   return (
//     <section className="w-full py-2">
//       <div
//         className="
//           grid gap-6
//           grid-cols-1
//           sm:grid-cols-2
//           lg:[grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]
//         "
//       >
//         {FEATURE_STATS.map((stat, index) => (
//           <FeatureStatCard
//             key={index}
//             icon={stat.icon}
//             label={stat.label}
//             value={stat.value}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
const FeatureStatsSection = () => {
  return (
    <section className="w-full "> {/* reduced vertical padding */}
      <div
        className="
          grid gap-3          /* smaller gap between cards */
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
        "
      >
        {FEATURE_STATS.map((stat, index) => (
          <FeatureStatCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            className="p-3"
          />
        ))}
      </div>
    </section>
  );
};


/* ---------- Tabs Content ---------- */
const SpecificationsPane = () => {
  const specs = [
    { label: "Total Area", value: "49,464 sq ft", icon: <FaRulerCombined /> },
    { label: "Power Supply", value: "150 kW (Three Phase)", icon: <FaBolt /> },
    { label: "Ceiling Height", value: "12 meters", icon: <FaWarehouse /> },
    { label: "Floor Type", value: "Reinforced concrete", icon: <FaShieldAlt /> },
    { label: "Loading Bays", value: "4 truck-level docks", icon: <FaTruck /> },
    { label: "Fire Safety", value: "Sprinkler system & alarms", icon: <FaFireExtinguisher /> },
  ];

  return (
    <div className="space-y-5">
      <h4 className="text-lg font-semibold text-gray-900">Technical Specifications</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {specs.map((item, idx) => (
          <div key={idx} className="rounded-2xl border bg-white/70 backdrop-blur p-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 grid place-items-center text-lg">
                {item.icon}
              </div>
              <div>
                <dt className="text-sm text-gray-500">{item.label}</dt>
                <dd className="text-base font-semibold text-gray-900">{item.value}</dd>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RulesPane = () => {
  const rules = [
    { text: "No smoking on the premises", type: "ban" },
    { text: "No loud music after 10:00 PM", type: "time" },
    { text: "Pets are not allowed", type: "ban" },
    { text: "Respect venue property and staff", type: "ok" },
  ];
  const iconFor = (type) => {
    if (type === "ban") return <FaBan className="text-rose-600" />;
    if (type === "time") return <FaClock className="text-amber-600" />;
    return <FaCheckCircle className="text-emerald-600" />;
  };

  return (
    <div className="space-y-5">
      <h4 className="text-lg font-semibold text-gray-900">Rules</h4>
      <ul className="space-y-3">
        {rules.map((r, i) => (
          <li key={i} className="flex items-start gap-3 bg-white rounded-2xl border p-3 shadow-sm">
            <span className="mt-0.5">{iconFor(r.type)}</span>
            <span className="text-sm text-gray-800">{r.text}</span>
          </li>
        ))}
      </ul>
      <div className="inline-flex items-center gap-2 text-xs text-gray-600 bg-gray-100 border px-3 py-1.5 rounded-full">
        <FaClock /> Quiet hours: 10 PM – 7 AM
      </div>
    </div>
  );
};

const ReviewsPane = () => {
  const reviews = [
    { name: "Ali R.", rating: 4.7, text: "Fantastic event space with great amenities.", date: "August 2025", verified: true },
    { name: "Sarah M.", rating: 5, text: "Perfect for our corporate event — smooth experience from booking to setup.", date: "July 2025", verified: true },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h4 className="text-lg font-semibold text-gray-900">Guest Reviews</h4>
        <div className="flex items-center gap-2">
          <RatingStars value={4.8} />
          <span className="text-sm text-gray-600">(4.8 · 128 reviews)</span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((r, i) => (
          <div key={i} className="border rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar name={r.name} />
                <div>
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <div className="flex items-center gap-2">
                    <RatingStars value={r.rating} />
                    <span className="text-xs text-gray-600">{r.rating.toFixed(1)}</span>
                    {r.verified && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                        Verified booking
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500">{r.date}</span>
            </div>
            <p className="mt-3 text-gray-700 text-sm">“{r.text}”</p>
          </div>
        ))}
      </div>
      <button className="mt-2 inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
        See all reviews
      </button>
    </div>
  );
};

/* ---------- Modern, reusable FAQ ---------- */
const FaqItem = React.memo(function FaqItem({
  idBase,
  index,
  isOpen,
  question,
  answer,
  onToggle,
  animateProps,
  align = "center",
}) {
  const buttonId = `${idBase}-btn-${index}`;
  const panelId = `${idBase}-panel-${index}`;
  const alignText = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 ${isOpen ? "bg-white shadow-md" : "bg-white/90 hover:shadow-md"}`}>
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={buttonId}
        className="relative w-full flex items-center gap-3 px-5 py-4 sm:px-6 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#020A64] rounded-2xl"
      >
        <span className={`flex-1 ${alignText} text-[15px] sm:text[17px] md:text-lg font-semibold text-[#020A64] leading-snug`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#020A64]" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${index}`}
            {...animateProps}
            className="overflow-hidden"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
          >
            <div className={`px-5 sm:px-6 pb-4 sm:pb-5 text-[14px] sm:text-[15px] text-gray-700 leading-relaxed ${alignText}`}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const FaqSection = ({ items = FAQS, singleOpen = true, defaultOpen = null, align = "center" }) => {
  const reduceMotion = useReducedMotion();
  const idBase = useId();

  const [openState, setOpenState] = useState(() => (singleOpen ? defaultOpen : new Set()));

  const onToggle = useCallback(
    (index) => {
      if (singleOpen) setOpenState((prev) => (prev === index ? null : index));
      else {
        setOpenState((prev) => {
          const next = new Set(prev);
          if (next.has(index)) next.delete(index);
          else next.add(index);
          return next;
        });
      }
    },
    [singleOpen]
  );

  const isItemOpen = useCallback(
    (index) => (singleOpen ? openState === index : openState.has(index)),
    [singleOpen, openState]
  );

  const animateProps = useMemo(
    () =>
      reduceMotion
        ? {}
        : {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.28, ease: "easeInOut" },
        },
    [reduceMotion]
  );

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-b from-gray-50 to-white rounded-3xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto">
          {items.map((faq, index) => (
            <FaqItem
              key={index}
              idBase={idBase}
              index={index}
              isOpen={isItemOpen(index)}
              question={faq.question}
              answer={faq.answer}
              onToggle={onToggle}
              animateProps={animateProps}
              align={align}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// /* ---------- Property Header (Responsive) ---------- */
// const PropertyHeader = () => {
//   return (
//     <section className="w-full bg-white rounded-2xl  p-2">
//       <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
//         {/* Left Section */}
//         <div className="flex-1 space-y-4">
//           {/* Price + Favorite + Share */}
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <h2 className="text-2xl font-bold text-[#020A64]">
//               AED <span className="text-[#020A64]">140,000</span>{" "}
//               <span className="text-sm font-medium text-[#020A64]">Yearly</span>
//             </h2>
//             <div className="flex items-center gap-3 flex-wrap">
//               <button className="flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-100 text-sm font-medium">
//                 <Heart size={18} className="text-red-600" />
//                 <span>Favorite</span>
//               </button>
//               <button className="flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-100 text-sm font-medium">
//                 <Share2 size={18} className="text-green-600" />
//                 <span>Share</span>
//               </button>
//             </div>
//           </div>

//           {/* Property Info */}
//           <div className="flex flex-wrap gap-4 text-gray-600">
//             <div className="flex items-center gap-1">
//               <User size={18} className="text-[#020A64]" />
//               <span>500 +</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Power size={18} className=" text-[#020A64]" />
//               <span className="text-gray-600">200 watt</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <SiZebpay size={18} className="text-[#020A64]" />
//               <span className="text-gray-600">8,211 sqft</span>
//             </div>
//           </div>

//           {/* Subtitle (Event Info) */}
//           <div className="flex items-center gap-2 text-gray-600 mt-1">
//             <MapPin size={18} className="text-blue-500" />
//             <span className="text-[#020A64]">
//               Live Concert | 25th Sept 2025 | Dubai Expo Center
//             </span>
//           </div>
//         </div>

//         {/* Right Section - Agent Card */}
//         <div className="flex-shrink-0 p-4 border rounded-md space-y-3 w-full md:w-[320px]">
//           <div className="flex items-center gap-3">
//             <img
//               src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60"
//               alt="Agent"
//               className="w-16 h-16 rounded-md object-cover"
//             />
//             <div>
//               <h4 className="font-semibold text-gray-900">Emad Abd El Hameid</h4>
//               <a href="#" className="text-sm text-[#020A64] hover:underline">
//                 View All Properties
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-wrap lg:flex-nowrap gap-2 pt-2">
//             <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-3 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50 transition">
//               <Mail size={16} className="text-blue-500" /> Email
//             </button>
//             <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-3 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50 transition">
//               <Phone size={16} className="text-red-500" /> Call
//             </button>
//             <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-3 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50 transition">
//               <BsWhatsapp size={16} className="text-green-500" /> WhatsApp
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };
/* ---------- Property Header (Responsive) ---------- */
const PropertyHeader = () => {
  return (
    <section className="w-full bg-white rounded-2xl p-4">
      <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          {/* Price + Favorite + Share */}
          <div className="flex items-start justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-semibold text-[#020A64]">
              AED <span className="text-[#020A64]">140,000</span>{" "}
              <span className="text-sm font-normal text-[#020A64]">Yearly</span>
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-3 flex-wrap">
                <button className="flex items-center gap-2 px-4 py-2 rounded-md shadow-sm bg-red-50 hover:bg-red-100 transition-all duration-200 text-sm font-medium text-gray-800 border border-gray-200">
                  <Heart size={18} className="text-red-500" />
                  <span>Favorite</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md shadow-sm bg-green-50 hover:bg-green-100 transition-all duration-200 text-sm font-medium text-gray-800 border border-gray-200">
                  <Share2 size={18} className="text-green-500" />
                  <span>Share</span>
                </button>
              </div>

            </div>
          </div>

          {/* Property Info */}
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-1">
              <User size={18} className="text-[#020A64]" />
              <span>500 +</span>
            </div>
            <div className="flex items-center gap-1">
              <Power size={18} className="text-[#020A64]" />
              <span>200 watt</span>
            </div>
            <div className="flex items-center gap-1">
              <SiZebpay size={18} className="text-[#020A64]" />
              <span>8,211 sqft</span>
            </div>
          </div>

          {/* Subtitle (Event Info) */}
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <MapPin size={18} className="text-blue-500" />
            <span className="text-[#020A64]">
              Live Concert | 25th Sept 2025 | Dubai Expo Center
            </span>
          </div>
        </div>

        {/* Right Section - Agent Card */}
        <div className="flex-shrink-0 w-full md:w-[320px] shadow-sm rounded-md p-4 space-y-4 flex flex-col justify-start">
          {/* Top section: image + name/link */}
          <div className="flex items-start gap-3"> {/* changed from items-center to items-start */}
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60"
              alt="Agent"
              className="w-16 h-16 rounded-md object-cover"
            />
            <div className="flex flex-col justify-start">
              <h4 className="font-semibold text-gray-900">Emad Abd El Hameid</h4>
              <a href="#" className="text-sm text-[#020A64] hover:underline">
                View All Properties
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 shadow-sm rounded-lg text-sm font-medium bg-blue-50 hover:bg-blue-100 transition">
              <Mail size={16} className="text-blue-500" /> Email
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 shadow-sm rounded-lg text-sm font-medium bg-red-50 hover:bg-red-100 transition">
              <Phone size={16} className="text-red-500" /> Call
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 shadow-sm rounded-lg text-sm font-medium bg-green-50 hover:bg-green-50 transition">
              <BsWhatsapp size={16} className="text-green-500" /> WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ---------- Page ---------- */
const ListingDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: (
      <>
        <ExpandableText />

        <div className="w-full rounded-2xl overflow-hidden shadow-md mt-4">
          <iframe
            title="Dubai Investments Park Map"
            src="https://maps.google.com/maps?q=Dubai%20Investments%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full aspect-video border-0"
            loading="lazy"
          />
        </div>

        <section aria-labelledby="amenities-heading" className="space-y-5">
          <h3 id="amenities-heading" className="text-lg font-semibold text-gray-900">
            Amenities
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {AMENITIES.map((amenity, i) => (
              <li
                key={i}
                className="flex items-center gap-2 bg-white border px-3 py-2 rounded-2xl text-sm text-gray-800 shadow-sm hover:shadow-md transition"
              >
                <span className="text-[#020A64]">{amenity.icon}</span>
                <span>{amenity.label}</span>
              </li>
            ))}
          </ul>
        </section>
      </>
    ),
    Specifications: <SpecificationsPane />,
    Rules: <RulesPane />,
    Reviews: <ReviewsPane />,
    FAQ: <FaqSection items={FAQS} singleOpen align="center" />,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-10 space-y-5">
      {/* Title & Location */}
      <header className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight text-[#020A64]">
          Space for events in Ras Al Khaimah
        </h1>
        <p className="flex items-center gap-1 text-gray-700 text-sm md:text-base">
          <FaMapMarkerAlt className="text-red-500" aria-hidden="true" />
          <span>Umm Al Quwain, UAE</span>
        </p>
      </header>


      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
        {/* Main image */}
        <figure className="md:col-span-2 overflow-hidden shadow-lg rounded-2xl md:rounded-r-none md:rounded-l-2xl">
          <img
            src={Event4}
            alt="Main property view"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>

        {/* Right column images */}
        <div className="flex flex-col gap-4 md:gap-2">
          {[Event1, Event2].map((img, i) => (
            <figure
              key={i}
              className={`overflow-hidden shadow-lg ${i === 0
                ? "rounded-r-2xl md:rounded-tr-2xl md:rounded-br-none"
                : "rounded-r-2xl md:rounded-br-2xl md:rounded-tr-none"
                }`}
            >
              <img
                src={img}
                alt={`Extra view ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Property header (price/agent) */}
      <PropertyHeader />

      {/* Feature stats + Reservation card (60/40 on md+) */}
      <section className="grid grid-cols-1 md:grid-cols-10 gap-8 items-start">
        {/* Left: Feature stats (60%) */}
        <div className="md:col-span-6">
          <FeatureStatsSection />
        </div>

        {/* Right: Reservation card (40%) */}
        {/* <aside className="md:col-span-4 w-full bg-[#020A64] text-white rounded-2xl shadow-xl p-3 flex flex-col gap-6 md:sticky md:top-24">
          <div>
            <p className="text-sm text-white/70">Estimated monthly</p>
            <p className="text-3xl font-bold tracking-tight">AED 208,333</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full space-y-1">
              <label htmlFor="start-date" className="text-xs text-white/80">Start date</label>
              <input
                id="start-date"
                type="date"
                min={today}
                className="w-full rounded-lg px-3 py-2 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Start date"
              />
            </div>
            <div className="w-full space-y-1">
              <label htmlFor="end-date" className="text-xs text-white/80">End date</label>
              <input
                id="end-date"
                type="date"
                min={today}
                className="w-full rounded-lg px-3 py-2 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="End date"
              />
            </div>
          </div>

          <button className="w-full rounded-lg bg-white text-[#020A64] font-semibold text-sm py-3 hover:bg-white/90 transition">
            Reserve now
          </button>

          <div className="mt-3 flex flex-wrap lg:flex-nowrap items-center justify-center  gap-2 lg:gap-4 text-[11px] sm:text-xs">
            {[
              { label: "KYC Verified", icon: <FaCheckCircle className="text-emerald-400" /> },
              { label: "Secure payments", icon: <FaShieldAlt className="text-blue-400" /> },
              { label: "24/7 Support", icon: <FaHeadset className="text-indigo-400" /> },
            ].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-white/20 transition whitespace-nowrap"
              >
                <span className="text-base leading-none">{tag.icon}</span>
                <span className="leading-none">{tag.label}</span>
              </span>
            ))}
          </div>
        </aside>
         */}
        <aside className="md:col-span-4 w-full bg-[#020A64] text-white rounded-2xl shadow-xl p-6 flex flex-col gap-6 md:sticky md:top-24">
          {/* Estimated Monthly */}
          <div className="text-center">
            <p className="text-sm text-white/70">Estimated monthly</p>
            <p className="text-3xl font-bold tracking-tight mt-1">AED 208,333</p>
          </div>

          {/* Date Inputs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="start-date" className="text-xs text-white/80">Start date</label>
              <input
                id="start-date"
                type="date"
                min={today}
                className="w-full rounded-lg px-4 py-2 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Start date"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="end-date" className="text-xs text-white/80">End date</label>
              <input
                id="end-date"
                type="date"
                min={today}
                className="w-full rounded-lg px-4 py-2 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="End date"
              />
            </div>
          </div>

          {/* Reserve Button */}
          <button className="w-full rounded-lg bg-white text-[#020A64] font-semibold text-sm py-3 hover:bg-white/90 transition">
            Reserve now
          </button>

          {/* Feature Tags */}
          <div className="mt-3 flex flex-wrap gap-2 justify-center text-xs sm:text-sm">
            {[
              { label: "KYC Verified", icon: <FaCheckCircle className="text-emerald-400" /> },
              { label: "Secure payments", icon: <FaShieldAlt className="text-blue-400" /> },
              { label: "24/7 Support", icon: <FaHeadset className="text-indigo-400" /> },
            ].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-white/20 transition"
              >
                {tag.icon}
                <span>{tag.label}</span>
              </span>
            ))}
          </div>
        </aside>

      </section>


      {/* Tabs + Content */}
      <section className="space-y-8">
        <nav className="flex overflow-x-auto whitespace-nowrap gap-2 border-b pb-2" aria-label="Sections">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeTab === tab ? "bg-[#020A64] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="md:grid md:grid-cols-3 md:gap-8">
          <article className="md:col-span-2 space-y-6">{tabContent[activeTab]}</article>
        </div>
      </section>

      {/* Similar Listings */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">Similar Event Spaces</h3>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-[#020A64] hover:opacity-90 transition" aria-label="View more similar event spaces">
            View more →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SIMILAR_LISTINGS.map((l, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-300 shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-full overflow-hidden">
                <div className="w-full aspect-video">
                  <img
                    src={[Event3, Event4, Event5][i]}
                    alt={`Similar warehouse ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/60 text-white px-2 py-1 text-xs">
                  <FaStar className="text-yellow-400" aria-hidden="true" />
                  <span>{l.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-semibold text-[#020A64] shadow-sm">
                  {l.price}
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span className="truncate">{l.location}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Size</p>
                  <p className="text-base font-semibold text-gray-900">{l.size}</p>
                </div>
                <div className="pt-1">
                  {/* <Link to="/detail"> */}
                  <button className="w-full text-sm font-medium text-[#020A64] border border-[#020A64] rounded-lg py-2 hover:bg-[#020A64] hover:text-white active:scale-[0.99] transition">
                    View Details
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListingDetails;
