import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
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

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return await this.productService.deleteProduct(id);
  }

}
