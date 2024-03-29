"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const themeSwitchHandler = (newTheme: string) => {
    if (newTheme === "dark" || newTheme === "light") {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <div className="flex items-center justify-center border-2 border-yellow-200 size-8">
      {theme === "dark" ? (
        <button className="size-6" onClick={() => themeSwitchHandler("light")}>
          🌙
        </button>
      ) : (
        <button onClick={() => themeSwitchHandler("dark")}>🌞</button>
      )}
    </div>
  );
}
