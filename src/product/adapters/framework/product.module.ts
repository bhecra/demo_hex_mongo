import { Module } from '@nestjs/common';
import { ProductService } from '../../domain/input-ports/product.service';
import { ProductController } from '../inputs/product.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductTable, productSchema } from '../outputs/mongoDB/product.entity';
import { ProductEntity } from '../outputs/pg/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { productServiceProvider } from './product.provider';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: ProductTable.name,
        schema: productSchema,
      },
    ]),
    TypeOrmModule.forFeature([ProductEntity]),
  ],
  providers: [ProductService, productServiceProvider(process.env.ENVIRONMENT)],
  controllers: [ProductController],
  exports: [MongooseModule],
})
export class ProductModule {}
