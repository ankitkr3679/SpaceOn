import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Car,
    Building2,
    Home,
    Briefcase,
    Users,
    Store,
    Tv2,
    Wrench,
    Smartphone,
} from "lucide-react";

const categories = [
    {
        title: "Items / Furniture",
        icon: <Car className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: [
            "How much space you need",
            <>
                Rental Cars{" "}
                <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs bg-[#020A64] text-white ml-1">
                    NEW
                </span>
            </>,
            "I don't know? Show me how",
            "Send Someone to Assess",
        ],
        link: "All in Furniture",
    },
    {
        title: "Vehicle & Trailer",
        icon: <Building2 className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Car", "Bicycle", "Trailer", "Motorcycle", "Boat", "Truck", "Container / Caravan"],
        link: "All in Motors",
    },
    {
        title: "Industrial",
        icon: <Home className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Racking Storage", "Type Storage", "Junk Storage"],
        link: "All in Storage",
    },
    {
        title: "Construction Items",
        icon: <Briefcase className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Material", "Equipment"],
        link: "All in Items",
    },
    {
        title: "F&B",
        icon: <Users className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Dry Storage", "Frozen Storage", "Refrigerated Storage", "Coffee Storage"],
        link: "All in Storage",
    },
    {
        title: "Business & Inventory",
        icon: <Store className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Mainland", "Freezone", "Consignment Storage", "Fashion", "Technology", "Beauty & Fragrances"],
        link: "All in Business",
    },
    {
        title: "Document Storage",
        icon: <Tv2 className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Legal", "Medical", "Books"],
        link: "All in Storage",
    },
    {
        title: "Space to Live",
        icon: <Wrench className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Rent a room", "Rent an entire unit / home", "Rent a space for events"],
        link: "All in Rent",
    },
    {
        title: "Smart & Advanced Security",
        icon: <Smartphone className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Gold & Jewelry", "Art"],
        link: "All in Security",
    },
    {
        title: "Commercial Space",
        icon: <Smartphone className="text-[#020A64] mr-2 inline w-4 h-4 sm:w-5 sm:h-5" />,
        items: ["Rent an office / Hotdesk / Co-working", "Pop-Up", "Sport Spaces (Paddle / Soccer / Cricket)", "Meeting Space"],
        link: "All in Security",
    },
];

const PopularCategories = () => {
    const [expanded, setExpanded] = React.useState({});
    const navigate = useNavigate();

    const toggle = (idx) => setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

    return (
        <section className="w-full max-w-7xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6">
            <h2 className="text-[clamp(1.25rem,4.5vw,1.875rem)] font-bold text-center text-[#020A64] mb-3">
                Popular Categories
            </h2>
            <span className="block w-16 sm:w-20 h-1 bg-[#C4C6DE] mx-auto rounded-full mb-6 sm:mb-8" />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {categories.map((cat, index) => {
                    const isOpen = !!expanded[index];
                    const visibleItems = isOpen ? cat.items : cat.items.slice(0, 3);

                    return (
                        <div
                            key={index}
                            className="flex flex-col min-w-0 cursor-pointer transform transition-transform duration-200 hover:scale-105"
                            onClick={() => navigate("/detail")} // Navigate on click
                        >
                            <div className="flex items-center mb-1.5">
                                {cat.icon}
                                <h3 className="text-[#020A64] font-semibold text-sm sm:text-base truncate">
                                    {cat.title}
                                </h3>
                            </div>

                            <ul className="space-y-1.5 sm:space-y-2 mb-1">
                                {visibleItems.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-[12px] sm:text-[15px] text-gray-700 leading-relaxed break-words"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {cat.items.length > 3 && (
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); toggle(index); }} // prevent navigation when toggling
                                    aria-expanded={isOpen}
                                    className="mt-1 text-[#020A64] text-[12px] sm:text-sm font-semibold inline-flex items-center hover:underline"
                                >
                                    {isOpen ? "View less" : "View all"} <span className="ml-1">→</span>
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PopularCategories;
