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
import { ProductProvider } from './adapters/providers/productProvider';
// import { IProductRepository } from './domain/output-ports/IProductRepository';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductInMemory,
    ProductMongoDB,
    ProductProvider,
    // { provide: IProductRepository, useClass: ProductProvider },
  ],
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
