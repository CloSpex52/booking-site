import React from "react";
import { Hotel } from "../types";

interface HotelCardProps {
  hotel: Hotel;
  onClick: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onClick }) => {
  return (
    <div
      className="container my-3 px-5 mx-5"
      style={{ border: "solid", borderRadius: "15px" }}
    >
      <div onClick={onClick} className="row">
        <div className="p-5 col-md-8">
          <div>
            <img
              src={hotel.pictureUrl}
              alt={hotel.name}
              className="img-responsive"
              style={{
                maxWidth: "350px",
                borderRadius: "10px",
                border: "solid 2px ",
              }}
            />
          </div>
        </div>
        <div className="p-2 my-4 col-md-4">
          <h2>{hotel.name}</h2>
          <p>Address: {hotel.location}</p>
          <p>Breakfast rate per day: {hotel.breakfastRate}€</p>
          <p>Cleaning cost per stay: {hotel.cleaningFee}€</p>
          <h2>Room Rates</h2>
          <p>Standard - {hotel.standardRate}€</p>
          <p>Deluxe - {hotel.deluxeRate}€</p>
          <p>Suite - {hotel.suiteRate}€</p>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
