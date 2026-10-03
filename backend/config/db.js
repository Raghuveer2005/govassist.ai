const mysql = require('mysql2/promise');
require('dotenv').config();

const poolConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'raghuveer',
  database: process.env.DB_NAME || 'govassist_ai',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

if (process.env.DB_SSL === 'true' || process.env.MYSQL_SSL === 'true' || process.env.NODE_ENV === 'production') {
  poolConfig.ssl = { rejectUnauthorized: false };
}

const pool = mysql.createPool(poolConfig);

// Helper to verify DB connectivity and auto-create required tables
async function testConnection() {
  try {
    const conn = await pool.getConnection();
    console.log('✅ MySQL connected successfully');

    // Automatically create tables if they do not exist
    await conn.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await conn.query(`
      CREATE TABLE IF NOT EXISTS profiles (
        user_id INT PRIMARY KEY,
        age INT NOT NULL,
        gender VARCHAR(50) NOT NULL DEFAULT 'Other',
        state VARCHAR(100) NOT NULL,
        occupation VARCHAR(100) NOT NULL,
        annual_income DECIMAL(12, 2) NOT NULL,
        education VARCHAR(100) NOT NULL,
        social_category VARCHAR(50) NOT NULL DEFAULT 'General',
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_profiles_user
          FOREIGN KEY (user_id) REFERENCES users(id)
          ON DELETE CASCADE
      )
    `);

    // Ensure social_category column exists if table was created previously without it
    try {
      const [socialColRows] = await conn.query(`
        SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE()
          AND TABLE_NAME = 'profiles'
          AND COLUMN_NAME = 'social_category'
      `);
      if (socialColRows.length === 0) {
        await conn.query(`
          ALTER TABLE profiles ADD COLUMN social_category VARCHAR(50) NOT NULL DEFAULT 'General'
        `);
        console.log('✅ Added social_category column to profiles table');
      }
    } catch (migrationErr) {
      console.warn('Social category migration notice:', migrationErr.message);
    }

    // Ensure gender column exists if table was created previously without it
    try {
      const [genderColRows] = await conn.query(`
        SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE()
          AND TABLE_NAME = 'profiles'
          AND COLUMN_NAME = 'gender'
      `);
      if (genderColRows.length === 0) {
        await conn.query(`
          ALTER TABLE profiles ADD COLUMN gender VARCHAR(50) NOT NULL DEFAULT 'Other'
        `);
        console.log('✅ Added gender column to profiles table');
      }
    } catch (migrationErr) {
      console.warn('Gender migration notice:', migrationErr.message);
    }

    await conn.query(`
      CREATE TABLE IF NOT EXISTS schemes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        scheme_name VARCHAR(200) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        eligibility_criteria JSON NOT NULL,
        application_url VARCHAR(500) DEFAULT '',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('✅ MySQL tables (users, profiles, schemes) verified');
    conn.release();
  } catch (err) {
    console.error('❌ MySQL connection failed:', err.message);
    process.exit(1);
  }
}

module.exports = { pool, testConnection };
