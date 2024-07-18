const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');

const connectDB = require('./config/mongoose');
const analysisRoutes = require('./routes/analysisRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB() ; 

app.use('/analyze', analysisRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
