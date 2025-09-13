// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Pages/Home";
// import CardSection from "./components/CardSection";
// import Booking from "./Pages/Booking";
// import BookingNavbar from "./components/BookinkNavbar";
// import Host from "./components/Host";
// import Chosebooking from "./components/Chosebooking";
// import Faqsection from "./components/Faqsection";
// import Dashboard from "./Pages/Dashboard";
// import Popular from "./components/Popular";
// import Detail from "./Pages/Detail";
// import Categories from "./components/Categories";
// import ScrollToTop from "./components/ScrollToTop";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <ScrollToTop />
//         <Navbar />
//         <Home />
//         <Categories />
//         <CardSection />
//         <Popular />
//         <Host />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/booking",
//     element: (
//       <>
//         <ScrollToTop />
//         <BookingNavbar />
//         <Booking />
//         {/* <Chosebooking /> */}
//         {/* <Faqsection /> */}
//         <Footer />
//       </>
//     ),
//   },
//   // {
//   //   path: "/dashboard",
//   //   element: (
//   //     <>
//   //       <Dashboard />
//   //     </>
//   //   )
//   // },
//   {
//     path: "/detail",
//     element: (
//       <>
//         <ScrollToTop />
//         <Navbar />
//         <Detail />
//         <Footer />
//       </>
//     )
//   }
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;


import React from "react";
import { createBrowserRouter, RouterProvider, useRouteError, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import CardSection from "./components/CardSection";
import Booking from "./Pages/Booking";
import BookingNavbar from "./components/BookinkNavbar";
import Host from "./components/Host";
import Chosebooking from "./components/Chosebooking";
import Faqsection from "./components/Faqsection";
import Dashboard from "./Pages/Dashboard";
import Popular from "./components/Popular";
import Detail from "./Pages/Detail";
import Categories from "./components/Categories";
import ScrollToTop from "./components/ScrollToTop";

/* ---------- Shared Error UI ---------- */
function ErrorPage() {
  const error = useRouteError();
  const status = error?.status || 500;
  const title =
    status === 404 ? "404 — Page Not Found" : "Something went wrong";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-16 text-center">
        <div className="max-w-md">
          <div className="text-5xl font-extrabold text-red-600">{status}</div>
          <h1 className="mt-3 text-2xl font-semibold">{title}</h1>
          <p className="mt-2 text-gray-600">
            {error?.statusText || error?.message || "Unexpected application error occurred."}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Go Home
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              Reload
            </button>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ---------- 404 Catch-All (with nice layout) ---------- */
function NotFound() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[60vh] flex items-center justify-center px-6 py-16 text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
          <p className="mt-2 text-gray-600">
            Sorry, the page you’re looking for doesn’t exist or has moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Go to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Home />
        <Categories />
        <CardSection />
        <Popular />
        <Host />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />, // 👈 Custom error UI for this route tree
  },
  {
    path: "/booking",
    element: (
      <>
        <ScrollToTop />
        <BookingNavbar />
        <Booking />
        {/* <Chosebooking /> */}
        {/* <Faqsection /> */}
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/detail",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Detail />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  // Catch-all 404 (must be last)
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
