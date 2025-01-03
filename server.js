const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const petRoutes = require('./routes/petRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

// CORS configuration (optional)
const corsOptions = {
  origin: 'https://ipetmypets-backend.onrender.com/',  // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use('/api/v1/pets', petRoutes);  // Versioned API
app.use('/api/v1/users', userRoutes);  // Versioned API
app.get('/api', (req, res) => {
  res.json({ message: "Welcome to the iPetMyPets API!" });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
