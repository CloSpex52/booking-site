import React from "react";
import HotelList from "../components/HotelList";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="py-2 container text-center">Hotel List</h1>
      <HotelList />
    </div>
  );
};

export default HomePage;
