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
      if(!findAllProducts) throw new HttpException('Erro ao buscar os produtos', HttpStatus.I_AM_A_TEAPOT);
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

      const top3AllProductsArray(){
        const top3ProductsArrayReturn[] = productsArray;
        //top3ProductsArrayReturn.forEach(categories, i=0){
          top3AllProductsArray[0] = filteredAllProducts[0]
          top3AllProductsArray[1] = filteredAllProducts2[0]
          top3AllProductsArray[2] = filteredAllProducts3[0]
        }
    

    } catch (E) {
      return E;
    }
  } 

  

    async searchById(id: string): Promise<any> {
      try{
        const productModel = await this.productModel.findById(id).exec();
        if(!productModel){
          throw new HttpException("Product wasn't found...", HttpStatus.NOT_FOUND);
        }
        return productModel;
      }
      catch (error){
      return "Error: " + error;
    }
  }
}
