const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const SCHEMES_DATA = require('../data/schemesData');

async function runSeed() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'raghuveer',
    database: process.env.DB_NAME || 'govassist_ai',
  });

  try {
    console.log(`🌱 Seeding database with ${SCHEMES_DATA.length} Government Schemes...`);
    
    // Clear and reset auto-increment
    await connection.query('DELETE FROM schemes');
    await connection.query('ALTER TABLE schemes AUTO_INCREMENT = 1');

    for (const scheme of SCHEMES_DATA) {
      await connection.query(
        'INSERT INTO schemes (scheme_name, description, category, eligibility_criteria, application_url) VALUES (?, ?, ?, ?, ?)',
        [
          scheme.scheme_name,
          scheme.description,
          scheme.category,
          JSON.stringify(scheme.eligibility_criteria),
          scheme.application_url || '',
        ]
      );
    }

    const [rows] = await connection.query('SELECT COUNT(*) as total FROM schemes');
    console.log(`✅ Successfully seeded ${rows[0].total} government schemes into MySQL!`);
  } catch (err) {
    console.error('❌ Error during seeding:', err.message);
  } finally {
    await connection.end();
  }
}

runSeed();
