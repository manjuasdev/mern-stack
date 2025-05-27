const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/goalRoutes');
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', userRoutes)

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))