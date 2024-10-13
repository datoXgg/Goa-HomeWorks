import React from 'react';
import './App.css'; 

const favoriteMovies = [
  "Jurrasic park",
  "Real steel",
  "Interstellar",
];

const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <h1>Favorite Movies</h1>
        <p>Discover your next favorite film!</p>
      </header>
      <main>
        <h2>My Favorite Movies:</h2>
        <ul>
          {favoriteMovies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;

const arrMap = [1, 2, 3, 4, 5, 6].map((item) => item * 2);
console.log(arrMap); 

const arrMapStrings = ['a', 'b', 'c'].map((item) => item.toUpperCase());
console.log(arrMapStrings);

const arrFilter = [1, 2, 3, 4, 5, 6].filter((item) => item % 2 === 0);
console.log(arrFilter);

const arrFilterGreaterThanThree = [1, 2, 3, 4, 5, 6].filter((item) => item > 3);
console.log(arrFilterGreaterThanThree);

const find = [4, 5, 1, 8, 2, 0].find((item) => item > 3);
console.log(find); 

const findFirstEven = [1, 3, 5, 8, 9].find((item) => item % 2 === 0);
console.log(findFirstEven); 

const findIndex = [4, 5, 1, 8, 2, 0].findIndex((item) => item > 3);
console.log(findIndex); 

const findIndexOdd = [1, 2, 3, 4, 5].findIndex((item) => item % 2 === 1);
console.log(findIndexOdd); 

const arrJoin = [1, 3, 4, 5, 6, 7].join(", ");
console.log(arrJoin); 

const arrJoinSpace = ['Hello', 'World'].join(" ");
console.log(arrJoinSpace); 

console.log("Dato ".repeat(3)); 

console.log("SoloLearn".indexOf("log")); 
console.log("SoloLearn".indexOf("o", 4));

console.log("SoloLearn".startsWith("Solo", 0));
console.log("SoloLearn".endsWith("Learn", 5)); 

console.log("SoloLearn".includes("loLe")); 
console.log("SoloLearn".includes("olo", 1)); 
console.log("SoloLearn".includes("olo", 2)); 
