namespace MyHotelBookingApp.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public int HotelId { get; set; }
        public string RoomType { get; set; }= String.Empty;
        public bool BreakfastIncluded { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public decimal TotalPrice { get; set; }

        public Hotel Hotel { get; set; } = default!; 

    }
}
