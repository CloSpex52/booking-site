import React from "react";
import { Hotel } from "../types";

interface HotelCardProps {
  hotel: Hotel;
  onClick: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onClick }) => {
  return (
    <div
      className="container my-3"
      style={{ border: "solid", borderRadius: "15px" }}
    >
      <div onClick={onClick} className="row">
        <div className="p-5 col-md-4">
          <img src={hotel.pictureUrl} alt={hotel.name} className="img-fluid" />
        </div>
        <div className="p-2 my-4 col-md-8">
          <h2>{hotel.name}</h2>
          <p>{hotel.location}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
