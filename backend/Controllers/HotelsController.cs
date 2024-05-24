using Microsoft.AspNetCore.Mvc;
using MyHotelBookingApp.Data;
using MyHotelBookingApp.Models;
using MyHotelBookingApp.Services; 
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyHotelBookingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelsController : ControllerBase
    {
        private readonly HotelService _hotelService; 

        public HotelsController(HotelService hotelService) 
        {
            _hotelService = hotelService; 
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetHotels()
        {
            var hotels = await _hotelService.GetHotelsAsync(); 
            return Ok(hotels); 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Hotel>> GetHotel(int id)
        {
            var hotel = await _hotelService.GetHotelByIdAsync(id); 
            if (hotel == null)
            {
                return NotFound();
            }

            return hotel;
        }
    }
}
