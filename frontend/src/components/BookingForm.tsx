import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Booking, Hotel } from "../types";
import { createBooking } from "../services/api";

interface BookingFormProps {
  hotel: Hotel;
}

const BookingForm: React.FC<BookingFormProps> = ({ hotel }) => {
  const [roomType, setRoomType] = useState("Standard");
  const [breakfastIncluded, setBreakfastIncluded] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    const pricePerNight =
      roomType === "Standard"
        ? hotel.standardRate
        : roomType === "Deluxe"
        ? hotel.deluxeRate
        : hotel.suiteRate;
    const totalDays = Math.ceil(
      (new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) /
        (1000 * 3600 * 24)
    );
    let total = hotel.cleaningFee + pricePerNight * totalDays;
    if (breakfastIncluded) {
      total += totalDays * hotel.breakfastRate;
    }
    setTotalPrice(total);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const checkIn = new Date(checkInDate);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (checkIn >= new Date(checkOutDate) || checkIn < today) {
      return;
    }

    setShowConfirmation(true);
    calculateTotalPrice();
  };

  const handleAcceptBooking = async () => {
    const booking: Booking = {
      hotelId: hotel.id,
      roomType,
      breakfastIncluded,
      checkInDate,
      checkOutDate,
    };

    try {
      await createBooking(booking);
      navigate("/bookings");
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  if (showConfirmation) {
    return (
      <div className="container my-3 col-md-8 d-flex flex-column align-items-center">
        <h3>Total Price: {totalPrice}€</h3>
        <button className="btn btn-primary" onClick={handleAcceptBooking}>
          Confirm Booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="container p-4"
        style={{ borderRadius: "20px", border: "solid black 2px" }}
      >
        <div>
          <label className="px-3 my-1">Room Type:</label>
          <select
            value={roomType}
            className="form-control"
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Standard">Standard {hotel.standardRate}€</option>
            <option value="Deluxe">Deluxe {hotel.deluxeRate}€</option>
            <option value="Suite">Suite {hotel.suiteRate}€</option>
          </select>
        </div>
        <div>
          <label className="px-3 my-1">
            Breakfast Included ({hotel.breakfastRate}€) :
          </label>
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
            className="form-control"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div>
          <label className="px-3 my-1">Check-Out Date:</label>
          <input
            type="date"
            className="form-control"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <button className="container my-2 btn bg-success" type="submit">
          Book
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
