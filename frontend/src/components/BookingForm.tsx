import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Booking } from "../types";
import { createBooking } from "../services/api";
interface BookingFormProps {
  hotelId: number;
}

const BookingForm: React.FC<BookingFormProps> = ({ hotelId }) => {
  const [roomType, setRoomType] = useState("Standard");
  const [breakfastIncluded, setBreakfastIncluded] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const booking: Booking = {
      hotelId,
      roomType,
      breakfastIncluded,
      checkInDate,
      checkOutDate,
    };

    await createBooking(booking);
    navigate("/bookings");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container bg-info p-4" style={{ borderRadius: "20px" }}>
        <div>
          <label className="px-3 my-1">Room Type:</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div>
          <label className="px-3 my-1">Breakfast Included:</label>
          <input
            type="checkbox"
            checked={breakfastIncluded}
            onChange={(e) => setBreakfastIncluded(e.target.checked)}
          />
        </div>
        <div>
          <label className="px-3 my-1">Check-In Date:</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div>
          <label className="px-3 my-1">Check-Out Date:</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <button className="container my-2" type="submit">
          Book
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
