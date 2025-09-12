// // "use client";

// import React from "react";
// import {
//     Car,
//     Building2,
//     Home,
//     Briefcase,
//     Users,
//     Store,
//     Tv2,
//     Wrench,
//     Smartphone,
// } from "lucide-react";

// const categories = [
//     { title: "Items / Furniture", icon: Car },
//     { title: "Vehicle & Trailer", icon: Building2 },
//     { title: "Industrial", icon: Home },
//     { title: "Construction Items", icon: Briefcase },
//     { title: "F&B", icon: Users },
//     { title: "Business & Inventory", icon: Store },
//     { title: "Document Storage", icon: Tv2 },
//     { title: "Space to Live", icon: Wrench },
//     { title: "Smart & Advanced Security", icon: Smartphone },
//     { title: "Commercial Space", icon: Smartphone },
// ];

// function CategoryCard({ icon: Icon, title }) {
//     return (
//         <button
//             type="button"
//             aria-label={title}
//             className="relative flex flex-col items-center gap-3 min-w-[100px] focus:outline-none"
//         >
//             {/* Gradient chip */}
//             <div className="w-14 h-14 rounded-xl bg-[radial-gradient(120%_120%_at_0%_0%,#F6F7FF_0%,#E9EBFA_60%,#E1E4FF_100%)] dark:bg-[radial-gradient(120%_120%_at_0%_0%,#1e2233_0%,#1a1d2b_60%,#171a26_100%)] text-[#020A64] dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/5 grid place-items-center">
//                 <Icon className="w-7 h-7" />
//             </div>

//             <h3 className="text-sm font-medium text-center leading-snug text-gray-800 dark:text-gray-200">
//                 {title}
//             </h3>
//         </button>
//     );
// }

// const Categories = () => {
//     return (
//         <section className="w-[93%] mx-auto mt-16 mb-12">
//             {/* Title */}
//             <h2 className="text-4xl font-bold text-center text-[#020A64] dark:text-white">
//                 Popular Categories
//             </h2>
//             <span className="block w-20 h-1 bg-[#C4C6DE]/80 dark:bg-white/20 mx-auto mt-3 rounded-full mb-10" />

//             {/* Grid with 5 columns */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//                 {categories.map((cat, i) => (
//                     <CategoryCard key={i} icon={cat.icon} title={cat.title} />
//                 ))}
//             </div>
//         </section>
//     );
// };


// export default Categories;


// "use client";
import { useNavigate } from "react-router-dom";
import React from "react";
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
    { title: "Items / Furniture", icon: Car },
    { title: "Vehicle & Trailer", icon: Building2 },
    { title: "Industrial", icon: Home },
    { title: "Construction Items", icon: Briefcase },
    { title: "F&B", icon: Users },
    { title: "Business & Inventory", icon: Store },
    { title: "Document Storage", icon: Tv2 },
    { title: "Space to Live", icon: Wrench },
    { title: "Smart & Advanced Security", icon: Smartphone },
    { title: "Commercial Space", icon: Smartphone },
];

function CategoryCard({ icon: Icon, title }) {
    const navigate = useNavigate();
    return (
        <button
            type="button"
            aria-label={title}
            className="relative flex flex-col items-center gap-3 min-w-[100px] focus:outline-none"
            onClick={() => navigate(`/detail?title=${encodeURIComponent(title)}`)}
        >
            {/* Gradient chip - Light only */}
            <div className="w-14 h-14 rounded-xl bg-[radial-gradient(120%_120%_at_0%_0%,#F6F7FF_0%,#E9EBFA_60%,#E1E4FF_100%)] text-[#020A64] shadow-sm ring-1 ring-black/5 grid place-items-center">
                <Icon className="w-7 h-7" />
            </div>

            <h3 className="text-sm font-medium text-center leading-snug text-gray-800">
                {title}
            </h3>
        </button>
    );
}

const Categories = () => {
    return (
        <section className="w-[93%] mx-auto mt-16 mb-12">
            {/* Title */}
            <h2 className="text-4xl font-bold text-center text-[#020A64]">
                Popular Categories
            </h2>
            <span className="block w-20 h-1 bg-[#C4C6DE]/80 mx-auto mt-3 rounded-full mb-10" />

            {/* Grid with 5 columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {categories.map((cat, i) => (
                    <CategoryCard key={i} icon={cat.icon} title={cat.title} />
                ))}
            </div>
        </section>
    );
};

export default Categories;
