import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <>
  //       <Dashboard />
  //     </>
  //   )
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
    )
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
