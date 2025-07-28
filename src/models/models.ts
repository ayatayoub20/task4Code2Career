export interface User {
  id: string
  name: string
  email: string
  phone: string
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
}

export interface Booking {
  id: string;
  userId: string;
  courseId: string;
  date: Date;
}
