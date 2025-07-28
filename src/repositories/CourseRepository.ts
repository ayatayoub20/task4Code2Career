// CourseRepository.ts
import { Course } from '../models/models';
import { BaseRepository } from './BaseRepository';


export class CourseRepository extends BaseRepository<Course> {
    constructor() {
        super();
        this.items = [
            {
                id: "1",
                title: "JavaScript Basics",
                description: "Introduction to JavaScript",
                instructor: 'ayat'
            },
            {
                id: "2",
                title: "Advanced TypeScript",
                description: "Deep dive into TypeScript",
                instructor: 'ahmed'
            }
        ];
    }
}
