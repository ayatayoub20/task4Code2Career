"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
class CourseRepository extends BaseRepository_1.BaseRepository {
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
exports.CourseRepository = CourseRepository;
