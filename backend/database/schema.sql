-- GovAssist AI - MySQL Schema
-- Run this file first: mysql -u root -p < schema.sql

CREATE DATABASE IF NOT EXISTS govassist_ai;
USE govassist_ai;

-- ============================
-- Users Table
-- ============================
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL, -- bcrypt hash
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================
-- Profiles Table (1:1 with Users)
-- ============================
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
);

-- ============================
-- Schemes Table
-- ============================
-- eligibility_criteria is stored as JSON text so backend logic can
-- parse it and run deterministic eligibility filtering (NOT via Gemini).
-- Expected JSON shape:
-- {
--   "min_age": 18, "max_age": 40,
--   "genders": ["All"] | ["Female"] | ["Male", "Female"],
--   "states": ["All"] | ["Delhi","Maharashtra"],
--   "occupations": ["All"] | ["Farmer","Student"],
--   "max_income": 250000,
--   "education": ["All"] | ["10th Pass","Graduate"],
--   "social_categories": ["All"] | ["SC", "ST", "OBC", "General", "EWS"]
-- }
CREATE TABLE IF NOT EXISTS schemes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  scheme_name VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  eligibility_criteria JSON NOT NULL,
  application_url VARCHAR(500) DEFAULT '',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_schemes_category ON schemes(category);
