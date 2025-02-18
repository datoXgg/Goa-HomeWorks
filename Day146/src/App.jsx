import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Movies 🎬</h1>
      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id} className="p-3 bg-gray-800 rounded-lg">
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
