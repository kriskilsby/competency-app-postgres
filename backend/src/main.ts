import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config({ path: './.env' });

// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '***' : 'undefined');
// console.log('DB_NAME:', process.env.DB_NAME);

// test to remove
// console.log('DB_PASSWORD RAW:', JSON.stringify(process.env.DB_PASSWORD));
// console.log('Type:', typeof process.env.DB_PASSWORD);

// 🟢 Safe DB logging for debug (no actual password printed)
const dbHost = String(process.env.DB_HOST).trim();
const dbUser = String(process.env.DB_USER).trim();
const dbPassword = String(process.env.DB_PASSWORD).trim();
const dbName = String(process.env.DB_NAME).trim();
const dbPort = Number(process.env.DB_PORT || 5432);

// console.log('ENV FILE CHECK DONE');
// console.log('DB_HOST:', dbHost);
// console.log('DB_USER:', dbUser);
// console.log('DB_PASSWORD LENGTH:', dbPassword.length); // avoids printing password
// console.log('DB_NAME:', dbName);
// console.log('DB_PORT:', dbPort);

console.log('CWD:', process.cwd());
console.log('=== ENV & PASSWORD CHECK ===');
console.log('DB_HOST:', dbHost);
console.log('DB_USER:', dbUser);
console.log('DB_PASSWORD LENGTH:', dbPassword.length); // avoids printing password
console.log('DB_NAME:', dbName);
console.log('DB_PORT:', dbPort);
console.log('DB_PASSWORD CHAR CODES:', dbPassword.split('').map((c) => c.charCodeAt(0)));
console.log('============================\n');

// Quick test: check all characters of the password
// console.log(
//   'DB_PASSWORD CHAR CODES:',
//   dbPassword.split('').map((c) => c.charCodeAt(0))
// );

// 🔹 Raw PostgreSQL connection test before Nest starts
async function testRawPgConnection() {
  console.log('Testing raw pg connection...');
  const client = new Client({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName,
  });

  try {
    await client.connect();
    const res = await client.query('SELECT now()');
    console.log('✅ Raw pg connection SUCCESS');
    console.log('Time from DB:', res.rows[0]);
    await client.end();
  } catch (err) {
    console.error('❌ Raw pg connection FAILED:', (err as Error).message);
    process.exit(1); // stop app if DB fails
  }
}

async function bootstrap() {
  // ✅ Test raw connection first
  await testRawPgConnection();

  // 🔹 Create Nest app
  const app = await NestFactory.create(AppModule);

  // 🔹 Test TypeORM connection
  const dataSource = app.get(DataSource);
  try {
    await dataSource.initialize();
    console.log('✅ TypeORM DataSource initialized successfully!');
  } catch (err) {
    console.error('❌ TypeORM DataSource failed to initialize:', err);
    process.exit(1);
  }

  // 🔹 Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://competencyapp-api.azurewebsites.net',
      'https://www.kriskilsby.com',
      'https://www.kriskilsby.com/competency-phase1',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  const port = process.env.PORT ? Number(process.env.PORT) : 3001;
  await app.listen(port);
  console.log(`🚀 Nest backend running on port ${port}`);
}

bootstrap();
