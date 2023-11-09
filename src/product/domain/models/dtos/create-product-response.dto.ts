import { IsString } from 'class-validator';
import { CreateProductDto } from '../../../adapters/dtos/create-product.dto';

export class CreateProductResponseDto extends CreateProductDto {
  @IsString()
  id: string;
}
