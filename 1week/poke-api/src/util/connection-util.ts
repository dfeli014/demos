import { Pool } from 'pg';

export const connectionPool = new Pool({
  user: process.env['DB_USERNAME'],
  host: process.env['DB_HOST'],
  database: process.env['DB_DATABASE'],
  password: process.env['DB_PASSWORD'],
  port: 5432,
  max: 3 // max number of connections
});