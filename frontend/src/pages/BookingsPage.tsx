import React from "react";
import BookingList from "../components/BookingList";

const BookingsPage: React.FC = () => {
  return (
    <div>
      <h1>My Bookings</h1>
      <BookingList />
    </div>
  );
};

export default BookingsPage;
