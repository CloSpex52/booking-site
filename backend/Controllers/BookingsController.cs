using Microsoft.AspNetCore.Mvc;
using MyHotelBookingApp.Data;
using MyHotelBookingApp.Models;
using MyHotelBookingApp.DTOs;
using MyHotelBookingApp.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

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
            try{
            var bookings = await _bookingService.GetBookingsAsync();
            return Ok(bookings);
            }catch(Exception ex){
                return BadRequest(new { message = "Error getting bookings", details = ex.Message });
            }
        }

        [HttpPost]
        public async Task<ActionResult<Booking>> CreateBooking([FromBody] BookingDto bookingDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var booking = new Booking
                {
                    HotelId = bookingDto.HotelId,
                    RoomType = bookingDto.RoomType,
                    BreakfastIncluded = bookingDto.BreakfastIncluded,
                    CheckInDate = bookingDto.CheckInDate,
                    CheckOutDate = bookingDto.CheckOutDate
                };
                var createdBooking = await _bookingService.CreateBookingAsync(booking);
                return CreatedAtAction(nameof(GetBookings), new { id = createdBooking.Id }, createdBooking);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error creating booking", details = ex.Message });
            }
        }
    }
}
