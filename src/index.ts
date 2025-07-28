
import { UserRepository } from './repositories/UserRepository';
import { CourseRepository } from './repositories/CourseRepository';
import { BookingRepository } from './repositories/BookingRepository';

async function testRepositories() {

  const userRepo = new UserRepository();
  console.log("Users found with name 'Sara':", await userRepo.findBy({ name: "Sara" }));
  console.log("Deleting user with id '2':", await userRepo.delete("2"));
  console.log("Updated user with id '1':", await userRepo.update({ id: "1", name: "Ali" }));


  const courseRepo = new CourseRepository();
  console.log("Courses found with title 'JavaScript Basics':", await courseRepo.findBy({ title: "JavaScript Basics" }));
  console.log("Deleting course with id '2':", await courseRepo.delete("2"));
  console.log("Updated course with id '1':", await courseRepo.update({ id: "1", description: "Updated description" }));


  const bookingRepo = new BookingRepository();
  console.log("Bookings for userId '1':", await bookingRepo.findBy({ userId: "1" }));
  console.log("Deleting booking with id '2':", await bookingRepo.delete("2"));
  console.log("Updated booking with id '1':", await bookingRepo.update({ id: "1", date: new Date("2025-08-01") }));
}

testRepositories();
