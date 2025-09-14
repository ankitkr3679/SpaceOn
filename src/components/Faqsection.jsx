import React, { useState } from "react";
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
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import Event1 from "../assets/Event1.jpg";
import Event2 from "../assets/Event2.jpg";
import Event3 from "../assets/Event3.jpg";
import Event4 from "../assets/Event4.jpg";
import Event5 from "../assets/Event5.jpg";

const today = new Date().toISOString().split("T")[0];

/* ---------- Helpers ---------- */

// Rating stars helper
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

// Expandable description text
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
                {isExpanded ? "View Less" : "View All"}
            </button>
        </div>
    );
};

/* ---------- Tabs Content ---------- */

// Technical specs tab
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
                    <div
                        key={idx}
                        className="rounded-sm border bg-white/70 backdrop-blur p-4 shadow-sm hover:shadow-md transition"
                    >
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

// Rules tab
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

// Reviews tab
const ReviewsPane = () => {
    const reviews = [
        {
            name: "Ali R.",
            rating: 4.7,
            text: "Fantastic event space with great amenities.",
            date: "August 2025",
            verified: true,
        },
        {
            name: "Sarah M.",
            rating: 5,
            text: "Perfect for our corporate event — smooth experience from booking to setup.",
            date: "July 2025",
            verified: true,
        },
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

/* ---------- FAQ (new tab content) ---------- */

const faqs = [
    {
        question: "What types of warehouses are available?",
        answer:
            "We provide access to a wide range of warehouses, including cold storage, dry storage, bulk storage, and flexible shared spaces. Whether you need short-term or long-term storage, you’ll find tailored options that fit your business needs.",
    },
    {
        question: "Can I rent open yards for containers and vehicles?",
        answer:
            "Yes, we offer secure open yards suitable for storing shipping containers, trucks, trailers, and other heavy equipment. These yards are available in various sizes with easy access for loading and unloading.",
    },
    {
        question: "Do you provide container storage and handling?",
        answer:
            "Absolutely. Our listed facilities offer safe container storage with options for stacking, handling, and secure access. Some locations also provide crane and forklift services for container movement.",
    },
    {
        question: "Is short-term storage possible?",
        answer:
            "Yes. We understand that businesses often require flexible arrangements. You can book warehouses or yards for days, weeks, or months depending on availability, without being tied to long contracts.",
    },
    {
        question: "Are the spaces secure?",
        answer:
            "All warehouses and yards listed on our platform maintain security features like 24/7 CCTV surveillance, gated entry, and onsite staff to ensure your goods and containers are safe at all times.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const reduceMotion = useReducedMotion();

    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    const animateProps = reduceMotion
        ? {}
        : {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.28, ease: "easeInOut" },
        };

    return (
        <section className="py-6 sm:py-8 md:py-10 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h2 className="text-[clamp(1.25rem,4.5vw,2rem)] font-extrabold text-center text-[#020A64] mb-6 sm:mb-8">
                    Frequently Asked Questions
                    <span className="block w-16 sm:w-20 h-1 bg-[#C4C6DE] mx-auto mt-3 rounded-full" />
                </h2>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border border-gray-200 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${index}`}
                                    id={`faq-button-${index}`}
                                    className="w-full flex justify-between items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#020A64] rounded-xl sm:rounded-2xl"
                                >
                                    <span className="text-[15px] sm:text-[17px] md:text-lg font-semibold text-[#020A64] leading-snug">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                        aria-hidden="true"
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key={`content-${index}`}
                                            {...animateProps}
                                            className="overflow-hidden"
                                            id={`faq-panel-${index}`}
                                            role="region"
                                            aria-labelledby={`faq-button-${index}`}
                                        >
                                            <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-[14px] sm:text-[15px] text-gray-700 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

/* ---------- Page ---------- */

const ListingDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const similarImages = [Event3, Event4, Event5];

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
                        {[
                            { label: "Climate controlled", icon: <FaSnowflake /> },
                            { label: "24/7 CCTV", icon: <FaVideo /> },
                            { label: "Loading dock", icon: <FaTruck /> },
                            { label: "High ceilings", icon: <FaWarehouse /> },
                        ].map((amenity, i) => (
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
        FAQ: <FaqSection />, // 👈 NEW TAB
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-10 space-y-12">
            {/* Title & Location */}
            <header className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#020A64]">
                    Space for events in Ras Al Khaimah
                </h1>
                <p className="flex items-center gap-2 text-gray-700">
                    <FaMapMarkerAlt className="text-red-500" aria-hidden="true" />
                    <span>Umm Al Quwain, UAE</span>
                </p>
            </header>

            {/* Gallery */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <figure className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={Event3}
                        alt="Main event space"
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                    />
                </figure>
                <div className="flex flex-col gap-6">
                    {[Event1, Event2].map((img, i) => (
                        <figure key={i} className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={img}
                                alt={`Extra view ${i + 1}`}
                                className="w-full aspect-video object-cover"
                                loading="lazy"
                            />
                        </figure>
                    ))}
                </div>
            </section>

            {/* Features + Reservation */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    {/* Swipeable mobile features */}
                    <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
                        {[
                            { label: "Price", value: "AED 2,500,000 / yr", icon: <FaDollarSign /> },
                            { label: "Size", value: "49,464 sq ft", icon: <FaRulerCombined /> },
                            { label: "Power", value: "150 kW", icon: <FaBolt /> },
                            { label: "Parking", value: "Yes • 50 cars", icon: <FaCar /> },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="min-w-[220px] snap-start bg-white p-6 rounded-2xl text-center border shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex justify-center items-center w-12 h-12 mx-auto mb-3 rounded-full bg-[#020A64]/10 text-[#020A64] text-xl">
                                    {item.icon}
                                </div>
                                <p className="text-gray-500 text-sm">{item.label}</p>
                                <p className="font-semibold text-lg text-[#020A64]">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Grid features for desktop */}
                    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Price", value: "AED 2,500,000 / yr", icon: <FaDollarSign /> },
                            { label: "Size", value: "49,464 sq ft", icon: <FaRulerCombined /> },
                            { label: "Power", value: "150 kW", icon: <FaBolt /> },
                            { label: "Parking", value: "Yes • 50 cars", icon: <FaCar /> },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl text-center border shadow-sm hover:shadow-md transition">
                                <div className="flex justify-center items-center w-12 h-12 mx-auto mb-3 rounded-full bg-[#020A64]/10 text-[#020A64] text-xl">
                                    {item.icon}
                                </div>
                                <p className="text-gray-500 text-sm">{item.label}</p>
                                <p className="font-semibold text-lg text-[#020A64]">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="w-full md:max-w-sm bg-[#020A64] text-white rounded-2xl shadow-xl p-3 flex flex-col gap-6 sticky top-16 md:top-24">
                    <div>
                        <p className="text-sm text-white/70">Estimated monthly</p>
                        <p className="text-3xl font-bold tracking-tight">AED 208,333</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full space-y-1">
                            <label htmlFor="start-date" className="text-xs text-white/80">
                                Start date
                            </label>
                            <input
                                id="start-date"
                                type="date"
                                min={today}
                                className="w-full rounded-lg px-3 py-2 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                aria-label="Start date"
                            />
                        </div>
                        <div className="w-full space-y-1">
                            <label htmlFor="end-date" className="text-xs text-white/80">
                                End date
                            </label>
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

                    <div className="mt-3 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-2 lg:gap-1 text-[11px] sm:text-xs">
                        {[
                            { label: "KYC Verified", icon: <FaCheckCircle className="text-emerald-400" /> },
                            { label: "Secure payments", icon: <FaShieldAlt className="text-blue-400" /> },
                            { label: "24/7 Support", icon: <FaHeadset className="text-indigo-400" /> },
                        ].map((tag, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md 
                bg-white/10 border border-white/20 backdrop-blur-sm text-white
                hover:bg-white/20 transition whitespace-nowrap"
                            >
                                <span className="text-base leading-none">{tag.icon}</span>
                                <span className="leading-none">{tag.label}</span>
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
                    {/* Optional right rail removed (as in your version) */}
                </div>
            </section>

            {/* Similar Listings */}
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Similar Event Spaces</h3>
                    <button
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#020A64] hover:opacity-90 transition"
                        aria-label="View more similar event spaces"
                    >
                        View more →
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { size: "49,464 sq ft", price: "AED 2,300,000 / yr", location: "Dubai Investment Park", rating: 4.6 },
                        { size: "45,000 sq ft", price: "AED 2,500,000 / yr", location: "Sharjah Industrial Area", rating: 4.9 },
                        { size: "46,000 sq ft", price: "AED 2,500,000 / yr", location: "Al Quoz, Dubai", rating: 4.7 },
                    ].map((l, i) => (
                        <article
                            key={i}
                            className="group rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-md transition"
                        >
                            <div className="relative w-full overflow-hidden">
                                <div className="w-full aspect-video">
                                    <img
                                        src={similarImages[i]}
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
                                    <Link to="/detail">
                                        <button className="w-full text-sm font-medium text-[#020A64] border border-[#020A64] rounded-lg py-2 hover:bg-[#020A64] hover:text-white active:scale-[0.99] transition">
                                            View Details
                                        </button>
                                    </Link>
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
