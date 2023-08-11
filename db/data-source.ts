import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost', // Database host
  port: 5432, // Database port
  username: 'postgres', // Database username
  password: 'newpassword', // Database password
  database: 'newinventory', // Database name
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'], // Specify your entities here
  synchronize: false, // Auto create tables (for development only),
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
