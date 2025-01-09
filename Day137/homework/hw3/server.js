import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import path from 'path';

dotenv.config();

const app = express();

connectDB();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
