import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const arrMovieNames = ['Inception', 'The Matrix', 'Avatar', 'Titanic', 'Interstellar'];
  const arrNav = ['About', 'Contacts', 'Services', 'Blog'];

  return (
    <div>
      <nav>
        <ul>
          {arrNav.map((item, index) => (
            <li key={index}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
          ))}
        </ul>
      </nav>

      <h1>Welcome to My Mini Website</h1>

      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <h2>Popular Movies</h2>

      <ul>
        {arrMovieNames.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
