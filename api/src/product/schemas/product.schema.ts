import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  productUsageDuration: string;

  @Prop()
  brand: string;

  @Prop()
  description: string;

  @Prop()
  manufacturingDate: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
