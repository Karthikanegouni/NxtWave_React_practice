import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState("dark")
  const value = { Theme, setTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
