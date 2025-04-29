const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const app = express();

app.use(cors());
app.use(express.json());

const db = new Database('database.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    duration INTEGER,
    album TEXT,
    added_date DATE DEFAULT CURRENT_DATE
  )
`).run();

app.get('/songs', (req, res) => {
  const songs = db.prepare('SELECT * FROM songs').all();
  res.json(songs);
});

app.post('/songs', (req, res) => {
  const { title, artist, duration, album } = req.body;
  const stmt = db.prepare(`
    INSERT INTO songs (title, artist, duration, album) 
    VALUES (?, ?, ?, ?)
  `);
  stmt.run(title, artist, duration, album);
  res.sendStatus(201);
});

app.delete('/songs/:id', (req, res) => {
  db.prepare('DELETE FROM songs WHERE id = ?').run(req.params.id);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server is running on port 3000'));