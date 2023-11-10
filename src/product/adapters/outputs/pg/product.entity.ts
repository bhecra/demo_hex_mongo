import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('text', {
    unique: true,
  })
  title: string;

  @Column('float')
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;
}
