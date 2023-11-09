import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class ProductTable extends Document {
  // id: string // mongo lo da automáticamente

  @Prop({})
  name: string;

  @Prop()
  price: number;

  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  id: mongoose.Types.ObjectId;
}

export const productSchema = SchemaFactory.createForClass(ProductTable);
