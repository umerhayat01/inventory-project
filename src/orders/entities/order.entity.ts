import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
