import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
        <h1 className="text-3xl font-bold underline">Hellooo world!</h1>
        <button className="bg-slate-200 px-4 py-4 rounded hover:bg-slate-300 dark:text-white dark:bg-neutral-700" onClick={handleChangeTheme}>

          Cambiar formato
        </button>
      </div>
    </>
  );
}

export default App;
