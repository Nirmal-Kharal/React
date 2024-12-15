import React, { useEffect } from "react";
import { ThemeProvider } from "./context/Theme";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  //actual theme change

  useEffect(() => {
    let html =  document.querySelector("html")
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* ThemeBtn UI */}
            </div>

            <div className="w-full max-w-sm mx-auto">{/* Card */}</div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
