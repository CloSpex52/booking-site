import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import BookingsPage from "./pages/BookingsPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
    </>
  );
};

export default App;
