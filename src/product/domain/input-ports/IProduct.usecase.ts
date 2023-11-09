import { CreateProductResponseDto } from '../models/dtos/create-product-response.dto';

export interface IProductUseCase {
  create(name: string, price: number): Promise<CreateProductResponseDto>;
  findAll(): Promise<CreateProductResponseDto[]>;
}
