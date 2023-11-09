import { Injectable } from '@nestjs/common';
import { ProductTable } from './product.entity';
import { IProductRepository } from '../../../domain/output-ports/IProductRepository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductResponseDto } from 'src/product/domain/models/dtos/create-product-response.dto';
import { CreateProductDto } from '../../dtos/create-product.dto';
import { Product } from 'src/product/domain/models/product.entity';

@Injectable()
export class ProductMongoDB implements IProductRepository {
  constructor(
    @InjectModel(ProductTable.name)
    private productModel: Model<ProductTable>,
  ) {}

  async create(product: Product): Promise<Product> {
    return this.productModel.create(product);
  }

  async findAll(): Promise<CreateProductResponseDto[]> {
    return this.productModel.find({});
  }
}
