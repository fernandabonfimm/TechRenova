import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dtos/product.dto';
import { Product } from './schemas/product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addNewProduct(@Body() newProduct: ProductDto): Promise<Product> {
    return await this.productService.addNewProduct(newProduct);
  }

  @Get()
  async getHomeProductList(): Promise<any> {
    return await this.productService.homePageProducts();
  }
}
