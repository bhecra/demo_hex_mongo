import { Module } from '@nestjs/common';
import { ProductService } from './domain/input-ports/product.service';
import { ProductController } from './adapters/inputs/product.controller';
import { ProductInMemory } from './adapters/outputs/memory/ProductInMemory';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProductTable,
  productSchema,
} from './adapters/outputs/mongoDB/product.entity';
import { ProductMongoDB } from './adapters/outputs/mongoDB/ProductMongDB';
import { ConfigModule } from '@nestjs/config';
import { IProductRepository } from './domain/output-ports/IProductRepository';

ConfigModule.forRoot();

const configServiceProvider = {
  provide: IProductRepository,
  useClass:
    process.env.ENVIRONMENT === 'local' ? ProductInMemory : ProductMongoDB,
};

@Module({
  controllers: [ProductController],
  providers: [ProductService, configServiceProvider],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: ProductTable.name,
        schema: productSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class ProductModule {}
