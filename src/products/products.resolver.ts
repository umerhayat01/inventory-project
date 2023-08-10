import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return await this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  async getAllProducts(): Promise<Product[]> {
    return await this.productsService.getAllProducts();
  }

  @Query(() => Product)
  getProductById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return await this.productsService.updateProduct(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  async removeProduct(@Args('id', { type: () => Int }) id: number) {
    return await this.productsService.remove(id);
  }
}
