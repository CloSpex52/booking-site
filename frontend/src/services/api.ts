import axios from "axios";
import { Booking } from "../types";
const api = axios.create({
  baseURL: "http://localhost:5187/api",
});

export const getHotels = async () => {
  const response = await api.get("/hotels");
  return response.data;
};

export const getHotelById = async (id: string) => {
  const response = await api.get(`/hotels/${id}`);
  return response.data;
};

export const createBooking = async (bookingData: Booking) => {
  const response = await api.post("/bookings", bookingData);
  return response.data;
};

export const getBookings = async () => {
  const response = await api.get("/bookings");
  return response.data;
};
