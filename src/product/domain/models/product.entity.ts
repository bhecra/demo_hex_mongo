import { randomUUID } from 'crypto';

export class Product {
  constructor(
    public id: string | null,
    public name: string,
    public price: number,
  ) {
    this.id = this.id || randomUUID();
  }
}
