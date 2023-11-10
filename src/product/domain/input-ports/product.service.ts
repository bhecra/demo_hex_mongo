import { Inject, Injectable } from '@nestjs/common';
import { IProductUseCase } from './IProduct.usecase';
import { CreateProductResponseDto } from '../models/dtos/create-product-response.dto';
import { Product } from '../models/product.entity';
import { IProductRepository } from '../output-ports/IProductRepository';

@Injectable()
export class ProductService implements IProductUseCase {
  constructor(
    @Inject(IProductRepository)
    private productRepository: IProductRepository,
  ) {}

  async create(name: string, price: number): Promise<CreateProductResponseDto> {
    const newProduct = new Product(null, name, price);
    return this.productRepository.create(newProduct);
  }

  async findAll() {
    return this.productRepository.findAll();
  }
}
