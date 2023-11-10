import { Injectable } from '@nestjs/common';
import { ProductModel } from '../../../domain/models/product.Model';
import { IProductRepository } from '../../../domain/output-ports/IProductRepository';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class ProductInMemory implements IProductRepository {
  private products: ProductModel[] = [new ProductModel(null, 'product__1', 1)];

  async create(product: ProductModel): Promise<ProductModel> {
    this.products.push(product);
    return product;
  }

  async findAll(): Promise<ProductModel[]> {
    return this.products;
  }
}
