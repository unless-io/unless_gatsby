import React from "react"

// Our global theme context with default values
export const ThemeContext = React.createContext({
  themeMode: "dark",
  setThemeMode: () => {},
})

// Theme provider component with state
const ThemeProvider = props => {
  let localStorageTheme, clientSchemePreference
  if (typeof window !== `undefined`) {
    clientSchemePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light"
    localStorageTheme = localStorage.getItem("theme")
  }
  const themePresent = localStorageTheme || clientSchemePreference
  const [themeMode, setThemeMode] = React.useState(themePresent)
  const value = { themeMode, setThemeMode }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

const wrapper = ({ element }) => <ThemeProvider>{element}</ThemeProvider>

// Exports a ThemeProvider wrapper
export default wrapper
