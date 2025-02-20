import React, { createContext, useState, useContext } from "react";

const themes = {
  light: {
    background: "#fff",
    color: "#000",
    buttonBackground: "#ddd",
  },
  dark: {
    background: "#333",
    color: "#fff",
    buttonBackground: "#555",
  },
  blue: {
    background: "#1e3a8a",
    color: "#fff",
    buttonBackground: "#3b82f6",
  },
  green: {
    background: "#10b981",
    color: "#fff",
    buttonBackground: "#34d399",
  },
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        style={{
          backgroundColor: themes[theme].background,
          color: themes[theme].color,
          height: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
