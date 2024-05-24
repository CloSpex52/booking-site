namespace MyHotelBookingApp.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string PictureUrl { get; set; }
        public decimal StandardRate { get; set; }
        public decimal DeluxeRate { get; set; }
        public decimal SuiteRate { get; set; }
    }
}
