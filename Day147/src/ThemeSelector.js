import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSelector = () => {
  const { changeTheme } = useTheme();

  return (
    <div>
      <label>Select Theme:</label>
      <select onChange={(e) => changeTheme(e.target.value)}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
        <option value="blue">Blue Mode</option>
        <option value="green">Green Mode</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
