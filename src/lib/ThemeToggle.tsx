"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState("light");

  // Initialize from localStorage or default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "light";
    setMode(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  function toggleTheme() {
    const newTheme = mode === "dark" ? "light" : "dark";
    setMode(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-black  transition-colors"
    >
      {mode === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
