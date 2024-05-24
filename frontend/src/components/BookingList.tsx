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

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.hotelId}>
          <p>Hotel ID: {booking.hotelId}</p>
          <p>Room Type: {booking.roomType}</p>
          <p>Breakfast Included: {booking.breakfastIncluded ? "Yes" : "No"}</p>
          <p>Check-In Date: {booking.checkInDate}</p>
          <p>Check-Out Date: {booking.checkOutDate}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
