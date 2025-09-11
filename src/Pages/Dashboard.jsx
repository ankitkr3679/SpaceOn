import React, { useState } from "react";
import {
    Bell,
    LayoutDashboard,
    Building2,
    CalendarDays,
    Wallet,
    MessageSquare,
    Settings,
    LogOut,
    HelpCircle,
    FileText,
    Headphones,
    Star,
    Menu,
    X,
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    YAxis,
    Cell,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Charts Data
    const earningHistory = [
        { month: "January", Earning: 35000, rating: 4.5 },
        { month: "February", Earning: 28000, rating: 4 },
        { month: "March", Earning: 40000, rating: 5 },
        { month: "April", Earning: 30000, rating: 4.5 },
        { month: "May", Earning: 20000, rating: 4 },
        { month: "June", Earning: 50000, rating: 5 },
        { month: "July", Earning: 25000, rating: 5 },
        { month: "August", Earning: 42000, rating: 4.5 },
        { month: "September", Earning: 38000, rating: 4 },
        { month: "October", Earning: 45000, rating: 5 },
        { month: "November", Earning: 39000, rating: 4.5 },
        { month: "December", Earning: 52000, rating: 5 },
    ];

    const bookings = [
        { user: "Liam", space: "Warehouses", status: "Confirmed", duration: 3 },
        { user: "Olivia", space: "Yards", status: "Cancelled", duration: 2 },
        { user: "Noah", space: "Containers", status: "Confirmed", duration: 5 },
        { user: "Emma", space: "Warehouses", status: "Pending", duration: 4 },
        { user: "Sophia", space: "Yards", status: "Completed", duration: 6 },
        { user: "Mason", space: "Containers", status: "Confirmed", duration: 2 },
        { user: "Isabella", space: "Warehouses", status: "Confirmed", duration: 7 },
        { user: "Ethan", space: "Yards", status: "Cancelled", duration: 3 },
        { user: "Ava", space: "Containers", status: "Pending", duration: 4 },
        { user: "James", space: "Warehouses", status: "Completed", duration: 5 },
    ];

    return (
        <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Sidebar (Desktop) */}
            <aside className="hidden md:flex w-64 bg-[#020A64] text-white flex-col shadow-2xl">
                <div className="p-6 text-2xl font-bold tracking-wide">SpaceOn</div>
                <nav className="flex-1">
                    <ul className="space-y-2 px-3">
                        {[
                            { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
                            { label: "My Listings", icon: <Building2 size={18} /> },
                            { label: "Bookings", icon: <CalendarDays size={18} /> },
                            { label: "Earnings", icon: <Wallet size={18} /> },
                            { label: "Messages", icon: <MessageSquare size={18} /> },
                            { label: "Settings", icon: <Settings size={18} /> },
                            { label: "Logout", icon: <LogOut size={18} /> },
                        ].map((item, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05, x: 5 }}
                                key={index}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all 
                  ${item.label === "Dashboard"
                                        ? "bg-white/20 font-semibold"
                                        : "hover:bg-white/10"
                                    }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <div className="px-4 py-6 text-sm space-y-3 border-t border-white/20">
                    <p className="flex items-center gap-2 cursor-pointer hover:underline">
                        <HelpCircle className="w-4 h-4" /> Help
                    </p>
                    <p className="flex items-center gap-2 cursor-pointer hover:underline">
                        <FileText className="w-4 h-4" /> Terms
                    </p>
                    <p className="flex items-center gap-2 cursor-pointer hover:underline">
                        <Headphones className="w-4 h-4" /> Support
                    </p>
                </div>
            </aside>

            {/* Sidebar (Mobile Drawer) */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-y-0 left-0 w-64 bg-[#020A64] text-white flex flex-col z-50 md:hidden shadow-lg"
                    >
                        <div className="flex items-center justify-between p-6">
                            <h2 className="text-2xl font-bold">SpaceOn</h2>
                            <X
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setSidebarOpen(false)}
                            />
                        </div>
                        <nav className="flex-1">
                            <ul className="space-y-2 px-3">
                                {[
                                    { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
                                    { label: "My Listings", icon: <Building2 size={18} /> },
                                    { label: "Bookings", icon: <CalendarDays size={18} /> },
                                    { label: "Earnings", icon: <Wallet size={18} /> },
                                    { label: "Messages", icon: <MessageSquare size={18} /> },
                                    { label: "Settings", icon: <Settings size={18} /> },
                                    { label: "Logout", icon: <LogOut size={18} /> },
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="flex justify-between items-center bg-white/80 backdrop-blur-md shadow-md px-4 md:px-6 py-3 md:py-4 sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <Menu
                            className="w-7 h-7 text-[#020A64] md:hidden cursor-pointer"
                            onClick={() => setSidebarOpen(true)}
                        />
                        <h1 className="text-xl md:text-2xl font-bold text-[#020A64]">
                            Host Dashboard
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#020A64]" />
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#020A64] text-white font-semibold cursor-pointer shadow-lg"
                        >
                            A
                        </motion.div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-4 md:p-6 space-y-8 overflow-y-auto">
                    {/* Overview Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Earned This Month", value: "AED 25,000" },
                            { title: "Bookings This Month", value: "12" },
                            { title: "Listings Live This Month", value: "03" },
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-[#020A64] to-[#1e3a8a] rounded-xl shadow-lg p-6 text-center text-white hover:shadow-xl transition cursor-pointer"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold">{card.value}</h2>
                                <p className="text-gray-200 text-sm md:text-base">
                                    {card.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Earning History Chart */}
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
                        <h3 className="text-lg font-semibold text-[#020A64] mb-4">
                            Earning History
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={earningHistory}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="Earning"
                                    stroke="#020A64"
                                    strokeWidth={3}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="rating"
                                    stroke="#fbbf24"
                                    strokeWidth={2}
                                    dot
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Recent Bookings Chart */}
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
                        <h3 className="text-lg font-semibold text-[#020A64] mb-4">
                            Recent Bookings
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={bookings}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="user" />
                                <YAxis />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: "10px",
                                        borderColor: "#e5e7eb",
                                    }}
                                />
                                <Bar dataKey="duration" radius={[8, 8, 0, 0]}>
                                    {bookings.map((entry, index) => {
                                        const statusColors = {
                                            Confirmed: "#86efac",
                                            Cancelled: "#fca5a5",
                                            Pending: "#fde68a",
                                            Completed: "#93c5fd",
                                        };
                                        return (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={statusColors[entry.status] || "#6b7280"}
                                            />
                                        );
                                    })}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    {/* Recent Bookings Table */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 overflow-x-auto">
                        <h3 className="text-lg md:text-xl font-semibold text-[#020A64] mb-4 text-left">
                            Booking Table
                        </h3>
                        <table className="table-fixed w-full text-sm border-separate border-spacing-y-2">
                            <thead>
                                <tr className="bg-[#020A64] text-white">
                                    <th className="px-4 md:px-6 py-3 text-center font-semibold rounded-l-lg w-16">
                                        S.No
                                    </th>
                                    <th className="px-4 md:px-6 py-3 text-center font-semibold">User</th>
                                    <th className="px-4 md:px-6 py-3 text-center font-semibold">Space</th>
                                    <th className="px-4 md:px-6 py-3 text-center font-semibold">Status</th>
                                    <th className="px-4 md:px-6 py-3 text-center font-semibold rounded-r-lg">
                                        Duration
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, idx) => {
                                    const statusColors = {
                                        Confirmed: "text-green-700",
                                        Cancelled: "text-red-700",
                                        Pending: "text-yellow-700",
                                        Completed: "text-blue-700",
                                    };
                                    return (
                                        <tr
                                            key={idx}
                                            className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-sm text-center"
                                        >
                                            {/* S.No */}
                                            <td className="px-4 md:px-6 py-4 align-middle font-medium text-gray-700">
                                                {idx + 1}
                                            </td>

                                            {/* User */}
                                            <td className="px-4 md:px-6 py-4 align-middle font-medium text-gray-700">
                                                {booking.user}
                                            </td>

                                            {/* Space */}
                                            <td className="px-4 md:px-6 py-4 align-middle text-gray-600">
                                                {booking.space}
                                            </td>

                                            {/* Status */}
                                            <td className="px-4 md:px-6 py-4 align-middle">
                                                <span
                                                    className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[booking.status] || "bg-gray-200 text-gray-700"
                                                        }`}
                                                >
                                                    {booking.status}
                                                </span>
                                            </td>

                                            {/* Duration */}
                                            <td className="px-4 md:px-6 py-4 align-middle text-gray-600">
                                                {booking.duration} days
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* Feedback Section */}
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex items-center gap-4">
                        <div className="flex-1 text-left">
                            <h3 className="text-lg font-semibold text-[#020A64]">Feedback</h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                You received a{" "}
                                <span className="text-gray-700 items-center gap-1 inline-flex">
                                    5{" "}
                                    <Star
                                        size={16}
                                        className="fill-yellow-500 text-yellow-500"
                                    />
                                </span>{" "}
                                rating on your last booking!
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
