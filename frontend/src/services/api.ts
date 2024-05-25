import axios from "axios";
import { Booking } from "../types";
const api = axios.create({
  baseURL: "http://localhost:5187/api",
});

export const getHotels = async () => {
  try {
    const response = await api.get("/hotels");
    return response.data;
  } catch (error) {
    console.error("Error getting hotels:", error);
    throw error;
  }
};
export const searchHotelsByLocation = async (location: string) => {
  try {
    const response = await api.get(`/hotels/search?location=${location}`);
    return response.data;
  } catch (error) {
    console.error("Error searching hotels by location:", error);
    throw error;
  }
};
export const getHotelById = async (id: string) => {
  try {
    const response = await api.get(`/hotels/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting hotel by id:", error);
    throw error;
  }
};

export const createBooking = async (bookingData: Booking) => {
  try {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

export const getBookings = async () => {
  try {
    const response = await api.get("/bookings");
    return response.data;
  } catch (error) {
    console.error("Error getting bookings:", error);
    throw error;
  }
};
