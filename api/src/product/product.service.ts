import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { ProductDto } from './dtos/product.dto';
import { async } from 'rxjs';
import { error } from 'console';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async addNewProduct(product: ProductDto): Promise<Product> {
    try {
      const newProduct = await this.productModel.create(product);
      if (!newProduct)
        throw new HttpException(
          'Erro criando o produto',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      return newProduct;
    } catch (E) {
      return E;
    }
  }

  async homePageProducts(): Promise<any> {
    try {
      const findAllProducts = await this.productModel
        .find({})
        .sort({ timestamp: -1 }); // -1 for descending order
        
      if (!findAllProducts || findAllProducts.length === 0) {
        throw new HttpException(
          'Erro ao buscar os produtos',
          HttpStatus.I_AM_A_TEAPOT,
        );
      }
  
      const productsArray: any = {
        categoryName: 'PRODUTOS',
        products: findAllProducts,
      };
  
      return productsArray;
    } catch (error) {
      return error;
    }
  }
  

  async searchById(id: string): Promise<any> {
    try {
      const productModel = await this.productModel.findById(id).exec();
      if (!productModel) {
        throw new HttpException(
          "Product wasn't found...",
          HttpStatus.NOT_FOUND,
        );
      }
      return productModel;
    } catch (error) {
      return 'Error: ' + error;
    }
  }
}
