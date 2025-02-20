import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ScoreTable from "./Scoretable";
import ThemeSelector from "./ThemeSelector";

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <ThemeSelector />
        <ScoreTable />
      </div>
    </ThemeProvider>
  );
}

export default App;
