require('dotenv').config();
const express  = require('express');
const cors = require('cors');
const nasaRoutes = require('../backend/src/api/routes/nasaRoutes');
const errorHandler = require('../backend/src/middleware/errorHandler');

const app = express();

//Global Middlewares
app.use(cors());
app.use(express.json());

app.use('/api', nasaRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})