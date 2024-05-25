using MyHotelBookingApp.Data;
using MyHotelBookingApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MyHotelBookingApp.Services
{
    public class HotelService
    {
        private readonly ApplicationDbContext _context;

        public HotelService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Hotel>> GetHotelsAsync()
        {
            try{
                return await _context.Hotels.ToListAsync();
            }catch(Exception ex){
                throw new Exception("Error getting hotels", ex);
            
            }
        }
          public async Task<List<Hotel>> GetHotelsByLocationAsync(string location)
        {
            try
            {
                return await _context.Hotels
                    .Where(h => h.Location.Contains(location))
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Error getting hotels by location", ex);
            }
        }
        public async Task<Hotel> GetHotelByIdAsync(int id)
        {
            try
            { 
                var hotel = await _context.Hotels.FindAsync(id);
                if (hotel == null)
                {
                    throw new Exception("Hotel not found");
                }
                return hotel;
            }
            catch (Exception ex)
            {
                throw new Exception("Error getting hotel", ex);
            }
        }
    }
}
