export interface Hotel {
  id: number;
  name: string;
  location: string;
  pictureUrl: string;
}

export interface Booking {
  hotelId: number;
  roomType: string;
  breakfastIncluded: boolean;
  checkInDate: string;
  checkOutDate: string;
}
