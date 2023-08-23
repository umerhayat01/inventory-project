import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost', // Database host
  port: 5432, // Database port
  username: 'postgres', // Database username
  password: 'newpassword', // Database password
  database: 'newinventory', // Database name
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'], // Specify your entities here
  synchronize: false, // Auto create tables (for development only),
  seeds: ['dist/seeds/**/*.seed{.ts,.js}'],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
