import { Injectable } from '@nestjs/common';
import { ProductModel } from '../../../domain/models/product.Model';
import { MemoryRepository } from 'src/core/domain/repository/memory.repository';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class ProductInMemory extends MemoryRepository<ProductModel> {
  constructor() {
    super([new ProductModel(null, 'product__1', 1)]);
  }
}
// export class ProductInMemory implements IProductRepository {
//   private products: ProductModel[] = [new ProductModel(null, 'product__1', 1)];

//   async create(product: ProductModel): Promise<ProductModel> {
//     this.products.push(product);
//     return product;
//   }

//   async findAll(): Promise<ProductModel[]> {
//     return this.products;
//   }
// }
