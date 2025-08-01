// BookingRepository.ts
import { Booking } from "../models/models";
import { BaseRepository } from "./BaseRepository";

export class BookingRepository extends BaseRepository<Booking> {
  findOne(arg0: string): any {
      throw new Error('Method not implemented.');
  }
  constructor() {
    super();
    this.items = [
      { id: "1", userId: "1", courseId: "1", date: new Date() },
      { id: "2", userId: "2", courseId: "2", date: new Date() },
    ];
  }
}
