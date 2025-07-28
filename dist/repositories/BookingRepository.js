"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
class BookingRepository extends BaseRepository_1.BaseRepository {
    findOne(arg0) {
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
exports.BookingRepository = BookingRepository;
