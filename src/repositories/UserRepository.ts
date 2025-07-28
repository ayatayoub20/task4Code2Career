import { User } from "../models/models";
import { BaseRepository } from "./BaseRepository";

export class UserRepository extends BaseRepository<User> {
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
