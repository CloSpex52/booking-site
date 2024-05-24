using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MyHotelBookingApp.Models;
using System;
using System.Linq;

namespace MyHotelBookingApp.Data
{
     public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var context = new ApplicationDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>());

            if (context.Hotels.Any() || context.Bookings.Any())
            {
                return; 
            }
            context.Hotels.AddRange(
                new Hotel
                {
                    Id = 1,
                    Name = "Hotel 1",
                    Location = "Location 1",
                    PictureUrl = "https://th.bing.com/th/id/OIP.4CTFESpj_QmSUqXKEjsfxwHaD4?w=327&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    StandardRate = 100,
                    DeluxeRate = 200,
                    SuiteRate = 300
                },
                new Hotel
                {
                    Id=2,
                    Name = "Hotel 2",
                    Location = "Location 2",
                    PictureUrl = "https://th.bing.com/th/id/OIP.0BXp02Fgvu7NGImxKSnk6QHaE8?rs=1&pid=ImgDetMain",
                    StandardRate =150,
                    DeluxeRate = 250,
                    SuiteRate = 350
                }
            );
            context.SaveChanges();
        }
    }
}