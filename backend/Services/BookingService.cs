using MyHotelBookingApp.Data;
using MyHotelBookingApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyHotelBookingApp.DTOs;

namespace MyHotelBookingApp.Services
{
    public class BookingService
    {
        private readonly ApplicationDbContext _context;

        public BookingService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Booking>> GetBookingsAsync()
        {
            try{
                return await _context.Bookings.Include(b => b.Hotel).ToListAsync();
            }catch(Exception ex){
                throw new Exception("Error getting bookings", ex);
            }
        }

        public async Task<Booking> CreateBookingAsync(Booking booking)
        {
            try{
                booking.TotalPrice = CalculateTotalPrice(booking);
                _context.Bookings.Add(booking);
                await _context.SaveChangesAsync();
                return booking;
            }catch(Exception ex){
                throw new Exception("Error creating booking", ex);
            }
        }
        public decimal CalculateTotalPrice(Booking booking)
        {
            try
            {
                var hotel = _context.Hotels.Find(booking.HotelId);
                if (hotel == null)
                {
                    throw new Exception("Hotel not found");
                }

                decimal roomRate;
                switch (booking.RoomType)
                {
                    case "Standard":
                        roomRate = hotel.StandardRate;
                        break;
                    case "Deluxe":
                        roomRate = hotel.DeluxeRate;
                        break;
                    case "Suite":
                        roomRate = hotel.SuiteRate;
                        break;
                    default:
                        throw new Exception("Invalid room type");
                }

                var totalDays = (booking.CheckOutDate - booking.CheckInDate).Days;
                Console.WriteLine(totalDays);
                if (totalDays <= 0)
                {
                    throw new Exception("Check-out date must be after check-in date");
                }

                var totalPrice = roomRate * totalDays;
                if (booking.BreakfastIncluded)
                {
                    totalPrice += totalDays * hotel.BreakfastRate;
                }

                return totalPrice+hotel.CleaningFee;
    
            }
            catch (Exception ex){
                throw new Exception("Error calculating total price", ex);
            }
        }
    }
}
