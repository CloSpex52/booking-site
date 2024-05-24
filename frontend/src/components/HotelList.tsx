import React, { useEffect, useState } from "react";
import { Hotel } from "../types";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";
import { getHotels } from "../services/api";
const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      const hotelsData = await getHotels();
      setHotels(hotelsData);
    };

    fetchHotels();
  }, []);

  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          onClick={() => navigate(`/hotel/${hotel.id}`)}
        />
      ))}
    </div>
  );
};

export default HotelList;
