import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  id: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  surname: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsNumber()
  @IsOptional()
  category: Number;
}
