import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { TabContext } from "../context/TabContext";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { TabMode, setTabMode } = useContext(TabContext);

  const name = "Daniel Milevsky";
  const letters = name.split("");
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < letters.length) {
      const timeout = setTimeout(() => {
        setContent((prev) => prev + letters[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, letters]);

  const iconStyle = "transition text-3xl cursor-pointer";
  return (
    <div className={`flex mx-3 py-4 justify-between items-center
                    rounded-xl md:mx-40 sm:m-3 
                    ${darkMode ? "bg-ltSlate/80" : "shadow bg-lt2Gray/90"}`}>
      <div className="flex flex-row">
        <h1 className={`pl-3 text-4xl font-oxanium font-bold
                      ${darkMode ? "text-ltGreen" : "text-black"}`}>{content}</h1>
        <div className={`fastPulse m-1 w-0.5 h-8 
                      ${darkMode ? "bg-dfGreen" : "bg-black"}`}></div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-row group w-9 overflow-hidden"
             onClick={() => setDarkMode((prev) => !prev)}>
          <div className={`${darkMode ? "darkModeToggle" : "lightModeToggle"} flex flex-row`}>
            <i className={`${iconStyle} translate-x-0 fa-solid fa-sun mr-2 text-dfOrange hover:text-ltOrange `} />
            <i className={`${iconStyle} translate-x-0 fa-solid fa-moon text-dfGreen hover:text-ltGreen`} />
          </div>
          <div className={`absolute mt-10 hidden group-hover:block -translate-x-8 font-oxanium
                          px-3 py-1 text-sm rounded text-white shadow-lg select-none 
                          ${darkMode ? "bg-drSlate" : "bg-drGray"}`}>Dark/Light</div>
        </div>

        <i
          className={`${iconStyle} mx-8  mr-5 group fa-solid fa-house 
                      ${darkMode ? "text-dfGreen hover:text-ltGreen" : "text-dfOrange hover:text-ltOrange "}`}
          onClick={() => setTabMode("Home")}
        >
          <div className={`absolute mt-2 hidden group-hover:block -translate-x-3.5 font-oxanium
                              px-3 py-1 text-sm rounded text-white shadow-lg select-none 
                              ${darkMode ? "bg-drSlate" : "bg-drGray"}`}
               onClick={() => window.location.reload()}>Home</div>
        </i>
      </div>
    </div>
  );
}