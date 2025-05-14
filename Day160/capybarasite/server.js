const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

let capybaras = [
  { id: 1, name: "Cappy", age: 3 },
  { id: 2, name: "Bara", age: 5 }
];

app.get('/api/capybaras', (req, res) => {
  res.json(capybaras);
});

app.post('/api/capybaras', (req, res) => {
  const newCapy = { id: Date.now(), ...req.body };
  capybaras.push(newCapy);
  res.json(newCapy);
});

app.delete('/api/capybaras/:id', (req, res) => {
  capybaras = capybaras.filter(c => c.id != req.params.id);
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));