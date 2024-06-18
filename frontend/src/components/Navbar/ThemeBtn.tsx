import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react";

const ThemeBtn = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <button onClick={toggleTheme}>
      {/* show moon icon if dark theme, show sun icon if light theme */}
      {isDarkTheme ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default ThemeBtn