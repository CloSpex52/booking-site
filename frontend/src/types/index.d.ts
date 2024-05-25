export interface Hotel {
  id: number;
  name: string;
  location: string;
  pictureUrl: string;
  breakfastRate: number;
  cleaningFee: number;
  standardRate: number;
  deluxeRate: number;
  suiteRate: number;
}

export interface Booking {
  id?: number;
  hotelId: number;
  roomType: string;
  breakfastIncluded: boolean;
  checkInDate: string;
  checkOutDate: string;
  totalPrice?: number;
}
