import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum status {
  PENDING = 'pending',
  APPROVED = 'Approved',
}

registerEnumType(status, {
  name: 'staus',
});

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column({ type: 'enum', enum: status, default: status.PENDING })
  @Field()
  orderStatus: status;

  @ManyToOne(() => User)
  @Field()
  user: User;

  @ManyToOne(() => Product)
  @Field()
  product: Product;
}
