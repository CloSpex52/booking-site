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
    public class BookingsController : ControllerBase
    {
        private readonly BookingService _bookingService;

        public BookingsController(BookingService bookingService) 
        {
            _bookingService = bookingService; 
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Booking>>> GetBookings()
        {
             Console.WriteLine("START GET BOOKING");
            var bookings = await _bookingService.GetBookingsAsync(); 
            return Ok(bookings);
        }

        [HttpPost]
        public async Task<ActionResult<Booking>> CreateBooking(Booking booking)
        {
            Console.WriteLine("START POST BOOKING");
            var createdBooking = await _bookingService.CreateBookingAsync(booking);
            Console.WriteLine("AFTER BOOK");
            return CreatedAtAction(nameof(GetBookings), new { id = createdBooking.Id }, createdBooking);
        }
    }
}
