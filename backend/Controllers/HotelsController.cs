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
            try{
                var hotels = await _hotelService.GetHotelsAsync(); 
                return Ok(hotels); 
            }catch(Exception ex){
                return BadRequest(new { message = "Error getting hotels", details = ex.Message });
            }
        }
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetHotelsByLocation([FromQuery] string location)
        {
            try
            {
                var hotels = await _hotelService.GetHotelsByLocationAsync(location);
                return Ok(hotels);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error getting hotels by location", details = ex.Message });
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Hotel>> GetHotel(int id)
        {
            try{
                var hotel = await _hotelService.GetHotelByIdAsync(id); 
                if(hotel == null){
                    return NotFound(); 
                }
                return Ok(hotel);
            }catch(Exception ex){
                return BadRequest(new { message = "Error getting hotel", details = ex.Message });
            }
        }
    }
}
