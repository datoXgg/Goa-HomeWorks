import React from 'react';
import ReactDOM from 'react-dom/client';

const Button = ({ children }) => (
  <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
    {children}
  </button>
);

const HomePage = () => (
  <section style={{ textAlign: 'center', padding: '30px' }}>
    <h1>Welcome to My Mini Website</h1>
    <Button>Learn More</Button>
  </section>
);

const Section = ({ title, content }) => (
  <section style={{ margin: '20px auto', textAlign: 'center' }}>
    <h2>{title}</h2>
    <p>{content}</p>
  </section>
);

const App = () => (
  <div>
    <HomePage />
    <Section title="My Portfolio" content="Here are some projects I've built: Personal Website, React App, Portfolio Page" />
    <Section title="Top Action Movies" content="Some top action movies: Mad Max: Fury Road, Die Hard, The Dark Knight" />
    <Section title="About GOA - Goal Oriented Academy" content="GOA is a programming academy where you can learn web development, backend, and data structures." />
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
