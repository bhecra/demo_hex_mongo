import { Inject, Injectable } from '@nestjs/common';
import { IProductUseCase } from './IProduct.usecase';
import { CreateProductResponseDto } from '../models/dtos/create-product-response.dto';
import { Product } from '../models/product.entity';
import { IProductRepository } from '../output-ports/IProductRepository';
import { ProductInMemory } from 'src/product/adapters/outputs/memory/ProductInMemory';
import { ProductMongoDB } from 'src/product/adapters/outputs/mongoDB/ProductMongDB';
import { ProductProvider } from 'src/product/adapters/providers/productProvider';

@Injectable()
export class ProductService implements IProductUseCase {
  productRepository: IProductRepository;

  constructor(
    @Inject(ProductProvider)
    private productProvider: ProductProvider, // private productRepository: IProductRepository,
  ) {
    this.productRepository = productProvider.env();
  }

  async create(name: string, price: number): Promise<CreateProductResponseDto> {
    const newProduct = new Product(null, name, price);
    return this.productRepository.create(newProduct);
  }

  async findAll() {
    return this.productRepository.findAll();
  }
}
