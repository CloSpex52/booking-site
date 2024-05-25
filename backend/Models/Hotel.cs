namespace MyHotelBookingApp.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        
        public string Name { get; set; } = String.Empty; 
        
        public string Location { get; set; }= String.Empty;
        public string PictureUrl { get; set; }= String.Empty;
        public decimal BreakfastRate {get;set;}=15;
        public decimal CleaningFee {get;set;}=20;
        public decimal StandardRate { get; set; }
        public decimal DeluxeRate { get; set; }
        public decimal SuiteRate { get; set; }
    }
}
