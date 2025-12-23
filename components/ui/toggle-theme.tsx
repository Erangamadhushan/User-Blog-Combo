"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()

    return (
        <button
            className="p-2 pt-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </button>
    )
}