import { UserRepository } from './repositories/UserRepository';
import { CourseRepository } from './repositories/CourseRepository';
import { BookingRepository } from './repositories/BookingRepository';

async function testRepositories() {

  // UserRepository Tests
  const userRepo = new UserRepository();

  console.log("Creating new user:", await userRepo.create({ id: "3", name: "Mona", email: "mona@example.com",phone: '059888888' }));
  console.log("All users:", await userRepo.getAll());
  console.log("User found with id '1':", await userRepo.getById("1"));
  console.log("Users found with name 'Sara':", await userRepo.findBy({ name: "Sara" }));
  console.log("Updated user with id '1':", await userRepo.update({ id: "1", name: "Ali" }));
  console.log("Deleting user with id '2':", await userRepo.delete("2"));
  console.log("Deleting non-existent user with id '999':", await userRepo.delete("999")); // Test with non-existent ID

  // CourseRepository Tests
  const courseRepo = new CourseRepository();

  console.log("Creating new course:", await courseRepo.create({ id: "3", title: "React Basics", description: "Introduction to React", instructor: 'ali'}));
  console.log("All courses:", await courseRepo.getAll());
  console.log("Course found with id '1':", await courseRepo.getById("1"));
  console.log("Courses found with title 'JavaScript Basics':", await courseRepo.findBy({ title: "JavaScript Basics" }));
  console.log("Updated course with id '1':", await courseRepo.update({ id: "1", description: "Updated description" }));
  console.log("Deleting course with id '2':", await courseRepo.delete("2"));
  console.log("Deleting non-existent course with id '999':", await courseRepo.delete("999")); // Test with non-existent ID

  // BookingRepository Tests
  const bookingRepo = new BookingRepository();

  console.log("Creating new booking:", await bookingRepo.create({ id: "3", userId: "1", courseId: "1", date: new Date() }));
  console.log("All bookings:", await bookingRepo.getAll());
  console.log("Booking found with id '1':", await bookingRepo.getById("1"));
  console.log("Bookings for userId '1':", await bookingRepo.findBy({ userId: "1" }));
  console.log("Updated booking with id '1':", await bookingRepo.update({ id: "1", date: new Date("2025-08-01") }));
  console.log("Deleting booking with id '2':", await bookingRepo.delete("2"));
  console.log("Deleting non-existent booking with id '999':", await bookingRepo.delete("999")); // Test with non-existent ID
}

testRepositories();
