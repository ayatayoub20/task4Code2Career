import { IRepository } from './IRepository';

export class BaseRepository<T extends { id: string }> implements IRepository<T> {
  protected items: T[] = [];

  constructor(initialData: T[] = []) {
    this.items = initialData;
  }

  async getAll(): Promise<T[]> {
    return this.items;
  }

  async getById(id: string): Promise<T | undefined> {
    return this.items.find(item => item.id === id);
  }

  async create(item: T): Promise<T> {
    this.items.push(item);
    return item;
  }

  async update(item: Partial<T>): Promise<T> {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index === -1) throw new Error('Item not found');
    const updateditem = {...this.items[index] , ...item}
    this.items[index] = updateditem;
    return updateditem;
  }

  async delete(id: string): Promise<boolean> {
    const originalLength = this.items.length;
    this.items = this.items.filter(i => i.id !== id);
    return this.items.length < originalLength;
  }

  async findBy(filter: Partial<T>): Promise<T[]> {
    return this.items.filter(item =>
      Object.entries(filter).every(([key, value]) => item[key as keyof T] === value)
    );
  }
}
