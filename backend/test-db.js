require('dotenv').config({ path: './.env' });
const { Client } = require('pg');

(async () => {
  console.log('Testing raw pg connection...');
  console.log('Host:', process.env.DB_HOST);
  console.log('User:', process.env.DB_USER);
  console.log('DB:', process.env.DB_NAME);
  console.log('Password type:', typeof process.env.DB_PASSWORD);
  console.log('Password length:', process.env.DB_PASSWORD?.length);

  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    await client.connect();
    console.log('✅ Raw pg connection SUCCESS');
    const res = await client.query('SELECT NOW()');
    console.log('Time from DB:', res.rows[0]);
  } catch (err) {
    console.error('❌ Raw pg connection FAILED');
    console.error(err);
  } finally {
    await client.end();
  }
})();
