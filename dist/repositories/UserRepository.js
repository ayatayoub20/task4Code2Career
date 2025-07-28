"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
class UserRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super();
        this.items = [
            {
                id: "1",
                name: "Ahmed",
                email: "ahmed@example.com",
                phone: "0592497292",
            },
            {
                id: "2",
                name: "Sara",
                email: "sara@example.com",
                phone: "0599873341",
            },
        ];
    }
}
exports.UserRepository = UserRepository;
