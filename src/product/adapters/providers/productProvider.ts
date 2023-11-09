import { Injectable } from '@nestjs/common';
import { ProductInMemory } from '../outputs/memory/ProductInMemory';
import { ProductMongoDB } from '../outputs/mongoDB/ProductMongDB';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductProvider {
  constructor(
    private productInMemory: ProductInMemory,
    private productMongoDB: ProductMongoDB,
  ) {}

  env() {
    const configEnv = new ConfigService();
    const environment = configEnv.get<string>('environment');
    console.log('environment:::', environment);

    if (environment === 'local') return this.productInMemory;
    return this.productMongoDB;
  }
}
