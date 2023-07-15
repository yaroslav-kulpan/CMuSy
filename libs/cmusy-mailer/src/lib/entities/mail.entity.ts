import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  to: string;

  @Column({
    type: 'varchar',
  })
  from: string;

  @Column({
    type: 'varchar',
  })
  subject: string;

  @Column({
    type: 'varchar',
  })
  template: string;

  @Column({
    type: 'jsonb',
    default: {},
  })
  context: Record<string, unknown>;
}
