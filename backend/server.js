const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { testConnection } = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
const schemeRoutes = require('./routes/scheme.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'GovAssist AI API is running.' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api', schemeRoutes); // exposes /api/schemes, /api/recommendations

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error.' });
});

async function start() {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`🚀 GovAssist AI backend running on http://localhost:${PORT}`);
  });
}

start();
