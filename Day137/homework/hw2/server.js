import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';

dotenv.config();

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
