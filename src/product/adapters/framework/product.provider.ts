import { ProductInMemory } from '../outputs/memory/ProductInMemory';
//import { ProductMongoDB } from '../adapters/outputs/mongoDB/ProductMongDB';
import { ProductPGRepository } from '../outputs/pg/product-pg.repository';
import { IProductRepository } from '../../domain/output-ports/IProductRepository';

export const productServiceProvider = (environment: string) => ({
  provide: IProductRepository,
  useClass: environment === 'local' ? ProductInMemory : ProductPGRepository,
  // useClass: environment === 'local' ? ProductInMemory : ProductMongoDB,
});
