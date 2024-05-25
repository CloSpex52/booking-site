import React from "react";
import BookingList from "../components/BookingList";

const BookingsPage: React.FC = () => {
  return (
    <div>
      <h1 className="py-2 container text-center">My Bookings</h1>
      <BookingList />
    </div>
  );
};

export default BookingsPage;
