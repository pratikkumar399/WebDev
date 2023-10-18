import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  const [themeMode, setThemeMode] = useState('light');
  const lightTheme = () => setThemeMode('light');
  const darkTheme = () => setThemeMode('dark');


  // insure that the theme is set to the last selected theme and renders the correct theme on toggle
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    // anything that comes inside the themseprovider will have access to the context
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}