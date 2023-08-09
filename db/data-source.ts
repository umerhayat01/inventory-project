import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost', // Database host
  port: 5432, // Database port
  username: 'postgres', // Database username
  password: 'newpassword', // Database password
  database: 'inventory', // Database name
  entities: [], // Specify your entities here
  synchronize: true, // Auto create tables (for development only)
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
