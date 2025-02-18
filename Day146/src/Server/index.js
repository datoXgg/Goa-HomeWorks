const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "The Dark Knight", year: 2008 },
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.listen(5000, () => console.log("Server running on port 5000"));
