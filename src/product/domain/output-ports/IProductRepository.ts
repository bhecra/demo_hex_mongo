import { Product } from '../models/product.entity';

/**
 * Interface for Ticket Repository, outbound port
 */
export interface IProductRepository {
  create(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
}

export const IProductRepository = Symbol('IProductRepository');
