import { useState, useEffect } from "react";
export default function Header() {
  const iconStyle = "transition text-3xl cursor-pointer";

  //   return (
  //     <div className="flex justify-between items-center mt-3 py-4 rounded-xl mx-40 border-gray-600 shadow bg-gray-200">
  //         <i className={`${iconStyle} fa-solid fa-house`}></i>
  //         <h1 className="text-4xl font-oxanium font-bold">
  //         Daniel Milevsky
  //         </h1>
  //         <i className={`${iconStyle} fa-solid fa-sun`}></i>
  //     </div>
  //   );
  // }

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

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex mx-3 z-50 justify-between items-center py-4 
                    rounded-xl md:mx-40 sm:m-3 
                    ${darkMode ? "bg-drSlate" : "shadow bg-lt2Gray"}`}>
      <div className="flex flex-row">
        <h1 className={`pl-3 text-4xl font-oxanium font-bold
                      ${darkMode ? "text-dfGreen" : "text-black"}`}>{content}</h1>
        <div className={`fastPulse m-1 w-0.5 h-8 
                      ${darkMode ? "bg-dfGreen" : "bg-black"}`}></div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-row group w-9 overflow-hidden"
             onClick={() => setDarkMode((prev) => !prev)}>
          <div className={`${darkMode ? "darkModeToggle" : "lightModeToggle"} flex flex-row`}>
            <i className={`${iconStyle} translate-x-0 fa-solid fa-sun mr-2 text-dfOrange hover:text-ltOrange `} />
            <i class={`${iconStyle} translate-x-0 fa-solid fa-moon 
                       ${darkMode ? "text-dfGreen hover:text-ltGreen" : "text-dfOrange hover:text-orange-300"}`} />
          </div>
          <div className="absolute mt-10 hidden group-hover:block -translate-x-8 font-oxanium
                          px-3 py-1 text-sm rounded bg-drGray text-white shadow-lg select-none">Dark/Light</div>
        </div>

        <i
          className={`${iconStyle} mx-8  mr-5 group fa-solid fa-house 
                      ${darkMode ? "text-dfGreen hover:text-ltGreen" : "text-dfOrange hover:text-orange-300"}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="absolute mt-2 hidden group-hover:block -translate-x-4 font-oxanium
                              px-3 py-1 text-sm rounded bg-gray-600 text-white shadow-lg select-none"
               onClick={() => window.location.reload()}>Home</div>
        </i>
      </div>
    </div>
  );
}
