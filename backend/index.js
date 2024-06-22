require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { errors } = require('celebrate');
const authRoutes = require('./routes/authRoutes');

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

const app = express();

const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./utilities");


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!"});
});

app.use('/api', authRoutes);

// Error handling middleware for Celebrate
app.use(errors());

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT);
});

module.exports = app;