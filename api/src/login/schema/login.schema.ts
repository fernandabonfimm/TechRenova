import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum UserCateogry {
  ADMIN = 1,
  SELLER = 2,
  USER = 3,
}
@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  category: UserCateogry;
}

export const UserSchema = SchemaFactory.createForClass(User);
