import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { ProductDto } from './dtos/product.dto';

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
    const findAllProducts = await this.productModel
      .find({})
      .sort({ timestamp: -1 }); // -1 for descending order

    let categories = [];

    findAllProducts.forEach((product, i = 0) => {
      if (i === 2) return;
      if (!categories.includes(product.category)) {
        categories.push(product.category);
        i++;
      }
    });

    const filteredAllProducts = await this.productModel.find({
      category: categories[0],
    });
    const filteredAllProducts2 = await this.productModel.find({
      category: categories[1],
    });
    const filteredAllProducts3 = await this.productModel.find({
      category: categories[2],
    });

    const productsArray: any = [
      {
        categoryName: filteredAllProducts[0].category,
        products: filteredAllProducts,
      },
      {
        categoryName: filteredAllProducts2[0].category,
        products: filteredAllProducts2,
      },
      {
        categoryName: filteredAllProducts3[0].category,
        products: filteredAllProducts3,
      },
    ];
    return productsArray;
  }
}
