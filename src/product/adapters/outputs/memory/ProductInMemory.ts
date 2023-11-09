import { Injectable } from '@nestjs/common';
import { Product } from '../../../domain/models/product.entity';
import { IProductRepository } from '../../../domain/output-ports/IProductRepository';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class ProductInMemory implements IProductRepository {
  private products: Product[] = [new Product(null, 'product__1', 1)];

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }
}
