import { Injectable } from '@nestjs/common';
import { ProductTable } from './product.entity';
import { IProductRepository } from '../../../domain/output-ports/IProductRepository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductResponseDto } from 'src/product/domain/models/dtos/create-product-response.dto';
import { ProductModel } from 'src/product/domain/models/product.Model';

@Injectable()
export class ProductMongoDB implements IProductRepository {
  constructor(
    @InjectModel(ProductTable.name)
    private productModel: Model<ProductTable>,
  ) {}

  // async create(product: ProductModel): Promise<ProductModel> {
  //   return this.productModel.create(product);
  // }

  async create(product: ProductModel): Promise<ProductModel> {
    return this.productModel.create(product);
  }

  async findAll(): Promise<CreateProductResponseDto[]> {
    return this.productModel.find({});
  }
}
