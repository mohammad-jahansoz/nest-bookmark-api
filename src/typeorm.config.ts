import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'bookmark',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
  // in development should true and in production should false and handle manually
};
