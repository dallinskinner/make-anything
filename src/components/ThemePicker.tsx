"use client";

import React, { useEffect, useState } from "react";
import { Select } from "react-daisyui";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
];

export function ThemePicker() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="max-w-xs"
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </Select>
  );
}
