import { randomUUID } from 'crypto';

export class ProductModel {
  constructor(
    public id: string | null = null,
    public name: string,
    public price: number,
  ) {
    this.id = this.id || randomUUID();
  }
}
