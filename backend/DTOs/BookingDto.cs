
namespace MyHotelBookingApp.DTOs
{
    public class BookingDto
    {
        public int HotelId { get; set; }
        public string RoomType { get; set; } = String.Empty;
        public bool BreakfastIncluded { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
    }
}
