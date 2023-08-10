import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductInput: CreateProductInput): Promise<Product> {
    const product = this.productRepository.create(createProductInput);
    return await this.productRepository.save(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getProductById(id: number): Promise<Product> {
    return await this.productRepository.findOneOrFail({ where: { id: id } });
  }

  async updateProduct(id: number, updateProductInput: UpdateProductInput) {
    const product = await this.productRepository.findOne({ where: { id: id } });
    if (product) {
      return await this.productRepository.save({
        ...product,
        ...updateProductInput,
      });
    } else {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne({ where: { id: id } });
    if (product) {
      return this.productRepository.remove(product);
    } else {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }
}
