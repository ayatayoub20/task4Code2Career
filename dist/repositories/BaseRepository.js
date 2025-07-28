"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    items = [];
    constructor(initialData = []) {
        this.items = initialData;
    }
    async getAll() {
        return this.items;
    }
    async getById(id) {
        return this.items.find(item => item.id === id);
    }
    async create(item) {
        this.items.push(item);
        return item;
    }
    async update(item) {
        const index = this.items.findIndex(i => i.id === item.id);
        if (index === -1)
            throw new Error('Item not found');
        const updateditem = { ...this.items[index], ...item };
        this.items[index] = updateditem;
        return updateditem;
    }
    async delete(id) {
        const originalLength = this.items.length;
        this.items = this.items.filter(i => i.id !== id);
        return this.items.length < originalLength;
    }
    async findBy(filter) {
        return this.items.filter(item => Object.entries(filter).every(([key, value]) => item[key] === value));
    }
}
exports.BaseRepository = BaseRepository;
