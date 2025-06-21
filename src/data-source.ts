// src/data-source.ts
import { DataSource } from 'typeorm';
import { UserEntity } from './domain/entities/user.entity';
import { Content } from './domain/entities/content.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // o 'db' si estás usando docker-compose y el servicio se llama así
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'realculture',
  synchronize: false,
  logging: false,
  entities: [UserEntity, Content],
  migrations: ['src/migrations/*.ts'],
});
