import React, { useEffect, useState } from "react";
import { Booking } from "../types";
import { getBookings } from "../services/api";

const BookingList: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await getBookings();
      setBookings(response);
    };

    fetchBookings();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {bookings.map((booking) => (
        <div className="card px-3 py-3 my-3" key={booking.id}>
          <p>Hotel ID: {booking.hotelId}</p>
          <p>Room Type: {booking.roomType}</p>
          <p>Breakfast Included: {booking.breakfastIncluded ? "Yes" : "No"}</p>
          <p>Check-In Date: {formatDate(booking.checkInDate)}</p>
          <p>Check-Out Date: {formatDate(booking.checkOutDate)}</p>
          <p>Total price: {booking.totalPrice}€</p>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
