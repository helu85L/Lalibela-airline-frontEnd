// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";

import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FlightBooking from "./pages/FlightBooking";
import HotelBooking from "./pages/HotelBooking";
import Faq from "./pages/Faq";
import OtherInfo from "./pages/OtherInfo";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<FlightBooking />} />
            <Route path="/hotels" element={<HotelBooking />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/info" element={<OtherInfo />} />
            <Route path="/contact" element={<Contact />} />
            {/* fallback to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
