import { ProductModel } from '../models/product.Model';

export interface IProductRepository {
  create(product: ProductModel): Promise<ProductModel>;
  findAll(): Promise<ProductModel[]>;
}

export const IProductRepository = Symbol('IProductRepository');
