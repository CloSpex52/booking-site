import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Hotel } from "../types";
import BookingForm from "../components/BookingForm";
import { getHotelById } from "../services/api";

const HotelPage: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const response = await getHotelById(id);
      setHotel(response);
    };

    fetchHotel();
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-3 col-md-8 d-flex flex-column align-items-center">
      <h1>{hotel.name}</h1>
      <p>{hotel.location}</p>
      <img
        src={hotel.pictureUrl}
        alt={hotel.name}
        className="my-3"
        style={{
          maxHeight: "300px",
          maxWidth: "300px",
          borderRadius: "10px",
          border: "solid black 3px",
        }}
      />
      <BookingForm hotel={hotel} />
    </div>
  );
};

export default HotelPage;
