import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const configService = new ConfigService();
export const ConnectTypeORM = async (): Promise<DataSourceOptions> => ({
  type: configService.get<'postgres' | 'mysql'>('DB_TYPE'),
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  synchronize: true,
  logging: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
});

const dataSource: Promise<DataSource> = (async () =>
  new DataSource(await ConnectTypeORM()))();
export default dataSource;
