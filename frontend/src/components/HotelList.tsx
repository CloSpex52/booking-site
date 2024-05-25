import React, { useEffect, useState } from "react";
import { Hotel } from "../types";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";
import { getHotels, searchHotelsByLocation } from "../services/api";

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [location, setLocation] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      const allHotels = await getHotels();

      setHotels(allHotels);
    };

    fetchHotels();
  }, []);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchLocation = event.target.value;
    setLocation(searchLocation);

    if (searchLocation.trim() === "") {
      const allHotels = await getHotels();
      setHotels(allHotels);
    } else {
      const hotelsData = await searchHotelsByLocation(searchLocation);
      setHotels(hotelsData);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-100 text-center py-1 bg-dark">
        <input
          type="text"
          value={location}
          onChange={handleInputChange}
          className="bg-dark text-light rounded-pill px-2"
          style={{ borderColor: "white" }}
          placeholder="Search by location"
        />
      </div>
      <h1 className="py-2 container text-center">Hotel List</h1>
      <div>
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onClick={() => navigate(`/hotel/${hotel.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
