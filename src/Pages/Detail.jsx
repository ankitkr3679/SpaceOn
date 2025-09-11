import React, { useMemo, useState } from "react";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaWhatsapp,
    FaHeart,
    FaCheckCircle,
    FaStar,
    FaShieldAlt,
    FaFilter,
    FaThLarge,
    FaWarehouse,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

/* ---------- Data ---------- */
const AREAS = [
    { name: "Jumeirah Village Circle (JVC)", count: 7926 },
    { name: "Business Bay", count: 3797 },
    { name: "Downtown Dubai", count: 2984 },
    { name: "Dubai Marina", count: 2813 },
    { name: "Meydan City", count: 2389 },
];

const PHOTO_SETS = [
    [
        "https://images.unsplash.com/photo-1715090576114-c07384af2069?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1595587637401-83ff822bd63e?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=1200&auto=format&fit=crop&q=70",
    ],
    [
        "https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1628625251833-04eeafb7a2db?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1634646809203-f3b4adff9127?w=1200&auto=format&fit=crop&q=70",
    ],
    [
        "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1715090576114-c07384af2069?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1595587637401-83ff822bd63e?w=1200&auto=format&fit=crop&q=70",
    ],
    [
        "https://images.unsplash.com/photo-1595587637401-83ff822bd63e?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1715090576114-c07384af2069?w=1200&auto=format&fit=crop&q=70",
    ],
    [
        "https://images.unsplash.com/photo-1634646809203-f3b4adff9127?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1628625251833-04eeafb7a2db?w=1200&auto=format&fit=crop&q=70",
    ],
    [
        "https://images.unsplash.com/photo-1715090576114-c07384af2069?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1595587637401-83ff822bd63e?w=1200&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=1200&auto=format&fit=crop&q=70",
    ],
];

const TYPES = ["Yard", "Warehouse"];

const PROPERTIES = Array.from({ length: 12 }).map((_, i) => {
    const imgs = PHOTO_SETS[i % PHOTO_SETS.length];
    const type = TYPES[i % TYPES.length];
    return {
        id: i + 1,
        type,
        verified: true,
        premium: i % 3 === 0,
        yearlyPrice: "AED 77,000",
        title: type === "Yard" ? "Open Yard" : "Warehouse",
        furnishing: type === "Yard" ? "Open Land" : "Shell & Core",
        sub: type === "Yard" ? "Heavy Vehicle Access • Power Ready" : "High-Clear Height • Loading Bay",
        location: i % 2 ? "Zada Tower, Business Bay, Dubai" : "The Crest, Sobha Hartland",
        image: imgs[0],
        images: imgs,
        agency: "Better Homes",
        rating: 4.5 + (i % 3) * 0.1,
        imagesCount: imgs.length,
    };
});

/* ---------- UI Bits ---------- */
const Pill = ({ children, active = false, onClick, icon: Icon, badge }) => (
    <button
        type="button"
        onClick={onClick}
        className={`px-3 py-1.5 rounded-md text-sm border transition inline-flex items-center gap-2 ${active ? "bg-[#020A64] text-white border-[#020A64]" : "bg-white text-gray-700 border-[#020A64] hover:bg-gray-50"
            }`}
    >
        {Icon && <Icon className="text-current shrink-0" />}
        <span className="truncate">{children}</span>
        {typeof badge === "number" && (
            <span
                className={`ml-1 rounded-md text-[11px] px-1.5 py-0.5 ${active ? "bg-white/15" : "bg-gray-100 text-gray-700"
                    }`}
            >
                {badge.toLocaleString()}
            </span>
        )}
    </button>
);

const Toggle = ({ checked, onChange, label }) => (
    <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${checked ? "bg-[#020A64]" : "bg-gray-300"
            }`}
        aria-pressed={checked}
        aria-label={label}
        title={label}
    >
        <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${checked ? "translate-x-5" : "translate-x-1"
                }`}
        />
    </button>
);

// /* ---------- Card ---------- */
// const PropertyCard = ({ p }) => {
//     const [slideIndex, setSlideIndex] = useState(0);
//     const imgs = p.images?.length ? p.images : [p.image];

//     return (
//         <article className="group rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
//             {/* On mobile, image sits on top with aspect-ratio; on md+ it becomes a two-column layout */}
//             <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,38%)_1fr]">
//                 {/* Media */}
//                 <div className="relative">
//                     {/* Aspect ratio on small screens to avoid jumpy heights */}
//                     <div className="md:h-auto">
//                         <Swiper className="w-full h-full">
//                             {imgs.map((src, i) => (
//                                 <SwiperSlide key={i}>
//                                     <img
//                                         src={src}
//                                         alt={p.sub}
//                                         className="w-full h-full object-cover max-h-[350px] md:max-h-full rounded-t-2xl md:rounded-none"
//                                         loading="lazy"
//                                         decoding="async"
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

//                     {p.verified && (
//                         <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-xs font-medium text-gray-800 shadow">
//                             <FaCheckCircle className="text-emerald-600" />
//                             Verified
//                         </span>
//                     )}

//                     {p.premium && (
//                         <span className="absolute top-3 left-28 inline-flex items-center gap-1 rounded-md bg-amber-100 text-amber-800 px-2 py-1 text-[11px] font-semibold shadow">
//                             PREMIUM
//                         </span>
//                     )}

//                     <button
//                         type="button"
//                         className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-white/95 text-gray-700 hover:text-rose-500 shadow"
//                         aria-label="Save listing"
//                         title="Save"
//                     >
//                         <FaHeart />
//                     </button>

//                     <span className="absolute bottom-3 left-3 text-xs text-white bg-black/55 rounded-md px-2 py-1">
//                         {slideIndex + 1} / {imgs.length}
//                     </span>
//                 </div>

//                 {/* Details */}
//                 <div className="p-4 sm:p-5 md:p-6 space-y-3">
//                     <div className="flex flex-wrap items-center gap-2">
//                         <p className="text-xl sm:text-2xl font-semibold text-gray-900">
//                             {p.yearlyPrice}{" "}
//                             <span className="text-xs sm:text-sm font-medium text-gray-500 inline-flex items-center gap-1">
//                                 <FaShieldAlt className="opacity-70" />
//                                 Yearly
//                             </span>
//                         </p>
//                         <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200 px-2 py-1 text-xs">
//                             <FaStar className="text-yellow-500" /> {p.rating.toFixed(1)}
//                         </span>
//                     </div>

//                     <p className="text-gray-800 font-medium">{p.title}</p>

//                     {/* (Beds/baths/sqft removed as requested earlier) */}
//                     <p className="text-gray-900 font-semibold">
//                         {p.furnishing} <span className="text-gray-700">| {p.sub}</span>
//                     </p>

//                     <div className="flex items-center gap-2 text-gray-600">
//                         <FaMapMarkerAlt className="text-red-500 shrink-0" />
//                         <span className="truncate">{p.location}</span>
//                     </div>

//                     {/* Actions: wrap on small screens */}
//                     <div className="pt-2 flex flex-wrap items-center gap-2">
//                         <button
//                             type="button"
//                             className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                             title="Email"
//                             aria-label="Email"
//                         >
//                             <FaEnvelope className="text-blue-500" />
//                             <span className="hidden sm:inline">Email</span>
//                         </button>
//                         <button
//                             type="button"
//                             className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                             title="Call"
//                             aria-label="Call"
//                         >
//                             <FaPhoneAlt className="text-red-500" />
//                             <span className="hidden sm:inline">Call</span>
//                         </button>
//                         <button
//                             type="button"
//                             className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50"
//                             title="WhatsApp"
//                             aria-label="WhatsApp"
//                         >
//                             <FaWhatsapp className="text-green-600" />
//                             <span className="hidden sm:inline">WhatsApp</span>
//                         </button>

//                         <span className="ml-auto text-xs text-gray-500">{p.agency}</span>
//                     </div>
//                 </div>
//             </div>
//         </article>
//     );
// };


const PropertyCard = ({ p }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const imgs = p.images?.length ? p.images : [p.image];

    return (
        <article className="group rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,38%)_1fr] auto-rows-auto">
                {/* Left Image */}
                <div className="relative md:h-auto flex items-start">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        loop
                        onSlideChange={(s) => setSlideIndex(s.realIndex ?? s.activeIndex)}
                        className="w-full h-auto"
                    >
                        {imgs.map((src, i) => (
                            <SwiperSlide key={i} className="h-auto">
                                <img
                                    src={src}
                                    alt={p.sub}
                                    className="w-full h-auto object-cover max-h-[180px] md:max-h-[250px] rounded-t-2xl md:rounded-none"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Gradient background with lower z-index */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent rounded-t-2xl md:rounded-none z-0" />

                    {/* Verified badge */}
                    {p.verified && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-xs font-medium text-gray-800 shadow z-10">
                            <FaCheckCircle className="text-emerald-600" />
                            Verified
                        </span>
                    )}

                    {/* Premium badge */}
                    {p.premium && (
                        <span className="absolute top-3 left-28 inline-flex items-center gap-1 rounded-md bg-amber-100 text-amber-800 px-2 py-1 text-[11px] font-semibold shadow z-10">
                            PREMIUM
                        </span>
                    )}

                    {/* Save button */}
                    <button
                        type="button"
                        className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-white/95 text-gray-700 hover:text-rose-500 shadow z-10"
                        aria-label="Save listing"
                        title="Save"
                    >
                        <FaHeart />
                    </button>

                    {/* Slide count */}
                    <span className="absolute bottom-3 left-3 text-xs text-white bg-black/55 rounded-md px-2 py-1 z-10">
                        {slideIndex + 1} / {imgs.length}
                    </span>
                </div>


                {/* Right Content */}
                <div className="p-4 sm:p-5 md:p-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                            {p.yearlyPrice}{" "}
                            <span className="text-xs sm:text-sm font-medium text-gray-500 inline-flex items-center gap-1">
                                <FaShieldAlt className="opacity-70" />
                                Yearly
                            </span>
                        </p>
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-green-50 text-green-700 border border-green-200 px-2 py-1 text-xs">
                            <FaStar className="text-green-500" /> {p.rating.toFixed(1)}
                        </span>
                    </div>

                    <p className="text-gray-800 font-medium">{p.title}</p>

                    <p className="text-gray-900 font-semibold">
                        {p.furnishing} <span className="text-gray-700">| {p.sub}</span>
                    </p>

                    <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-red-500 shrink-0" />
                        <span className="truncate">{p.location}</span>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg shadow-sm bg-blue-50 px-3 py-2 text-sm text-gray-700 hover:bg-blue-100"
                            title="Email"
                            aria-label="Email"
                        >
                            <FaEnvelope className="text-blue-500" />
                            <span className="hidden sm:inline">Email</span>
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg bg-red-50 shadow-sm px-3 py-2 text-sm text-gray-700 hover:bg-red-100"
                            title="Call"
                            aria-label="Call"
                        >
                            <FaPhoneAlt className="text-red-500" />
                            <span className="hidden sm:inline">Call</span>
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg bg-green-50 shadow-sm px-3 py-2 text-sm text-gray-700 hover:bg-green-100"
                            title="WhatsApp"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="text-green-600" />
                            <span className="hidden sm:inline">WhatsApp</span>
                        </button>

                        <span className="ml-auto text-xs text-gray-500">{p.agency}</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

/* ---------- Page ---------- */
export default function ListingsPage() {
    const [showVerified, setShowVerified] = useState(false);
    const [activeArea, setActiveArea] = useState(null);
    const [quick, setQuick] = useState("All");

    // Pre-filter by toggles/area
    const baseList = useMemo(() => {
        let list = PROPERTIES;
        if (showVerified) list = list.filter((p) => p.verified);
        if (activeArea) list = list.filter((_, idx) => (idx + activeArea.length) % 2 === 0);
        return list;
    }, [showVerified, activeArea]);

    // Live counts
    const allCount = baseList.length;
    const yardCount = baseList.filter((p) => p.type === "Yard").length;
    const warehouseCount = baseList.filter((p) => p.type === "Warehouse").length;

    // Final filtered by quick tab
    const filtered = useMemo(() => {
        if (quick === "Yard") return baseList.filter((p) => p.type === "Yard");
        if (quick === "Warehouse") return baseList.filter((p) => p.type === "Warehouse");
        return baseList;
    }, [baseList, quick]);

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 space-y-6">
                {/* Title & subtitle */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#020A64] inline-flex items-center gap-2">
                        <FaWarehouse />
                        Commercial Space for Rent in Dubai
                    </h1>

                    <div className="text-xs sm:text-sm text-gray-600 flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="inline-flex items-center gap-1">
                            <FaThLarge /> <strong>{allCount.toLocaleString()}</strong> Ads
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <FaFilter /> Yard: <strong>{yardCount.toLocaleString()}</strong>
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <FaWarehouse /> Warehouse: <strong>{warehouseCount.toLocaleString()}</strong>
                        </span>
                        {activeArea && (
                            <span className="inline-flex items-center gap-1">
                                <FaMapMarkerAlt /> in <strong className="truncate">{activeArea}</strong>
                            </span>
                        )}
                        {showVerified && (
                            <span className="inline-flex items-center gap-1">
                                <FaShieldAlt /> Verified first
                            </span>
                        )}
                    </div>
                </div>

                {/* Mobile verified toggle */}
                <div className="sm:hidden flex items-center gap-2 text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1">
                        <FaShieldAlt /> Verified first
                    </span>
                    <Toggle checked={showVerified} onChange={setShowVerified} label="Show verified first" />
                </div>

                {/* Areas: wrap + allow horizontal scroll on tiny screens */}
                <div className="-mx-4 px-4 flex flex-row flex-wrap gap-2 overflow-x-auto">
                    {AREAS.map((a) => (
                        <Pill
                            key={a.name}
                            active={activeArea === a.name}
                            onClick={() => setActiveArea(activeArea === a.name ? null : a.name)}
                            icon={FaMapMarkerAlt}
                            badge={a.count}
                        >
                            {a.name}
                        </Pill>
                    ))}
                </div>

                {/* Quick tabs */}
                <div className="flex flex-wrap items-center gap-2">
                    <Pill active={quick === "All"} onClick={() => setQuick("All")} icon={FaThLarge} badge={allCount}>
                        All
                    </Pill>
                    <Pill active={quick === "Yard"} onClick={() => setQuick("Yard")} icon={FaFilter} badge={yardCount}>
                        Yard
                    </Pill>
                    <Pill active={quick === "Warehouse"} onClick={() => setQuick("Warehouse")} icon={FaWarehouse} badge={warehouseCount}>
                        Warehouse
                    </Pill>

                    <div className="ml-auto hidden sm:flex items-center gap-2 text-sm text-gray-700">
                        <span className="inline-flex items-center gap-1">
                            <FaShieldAlt /> Verified first
                        </span>
                        <Toggle checked={showVerified} onChange={setShowVerified} label="Show verified first" />
                    </div>
                </div>

                {/* Cards */}
                <div className="space-y-4 sm:space-y-5">
                    {filtered.map((p) => (
                        <PropertyCard key={p.id} p={p} />
                    ))}
                    {filtered.length === 0 && (
                        <div className="rounded-2xl border border-dashed p-8 sm:p-10 text-center text-gray-600 bg-white">
                            No results. Try a different area or filter.
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                    <button className="px-3 py-2 rounded-lg border bg-white text-[#020A64] hover:bg-gray-50 inline-flex items-center gap-2">
                        <FaChevronLeft /> <span className="hidden sm:inline">Previous</span>
                    </button>
                    {[1, 2, 3].map((n) => (
                        <button
                            key={n}
                            className={`px-3 py-2 rounded-lg border ${n === 1 ? "bg-[#020A64] text-white border-[#020A64]" : "bg-white text-[#020A64] hover:bg-gray-50"
                                }`}
                            aria-current={n === 1 ? "page" : undefined}
                            aria-label={`Go to page ${n}`}
                        >
                            {n}
                        </button>
                    ))}
                    <button className="px-3 py-2 rounded-lg border bg-white text-[#020A64] hover:bg-gray-50 inline-flex items-center gap-2">
                        <span className="hidden sm:inline">Next</span> <FaChevronRight />
                    </button>
                </div>
            </div>
        </main>
    );
}
