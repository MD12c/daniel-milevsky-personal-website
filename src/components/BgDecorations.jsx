import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
export default function BgDecorations() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div>
        <div className="absolute overflow-hidden h-screen w-screen flex items-center justify-center shadow-black/50">
            <div className={`absolute w-170 h-170 rounded-full border-25 
                            ${darkMode ? "border-drGreen/50" : "border-amber-700/50"}
                            circleAppearence`} />
        </div>
        <div className="absolute h-screen w-screen overflow-hidden">
            <div className={`absolute w-20 h-20 rounded-full top-[5vh]
                            ${darkMode ? "bg-dr2Green right-[5vw]" : "bg-amber-950/60 left-[5vw]"}
                            ${darkMode ? "lg:right-[15vw]" : "lg:left-[15vw]"}
                            ${darkMode ? "xl:right-[25vw]" : "xl:left-[25vw]"}
                            ${darkMode ? "2xl:right-[40vw]" : "2xl:left-[30vw]"}
                            darkBallAppearence`} />
                              
            <div className={`absolute w-20 h-20 rounded-full bottom-[5vh] 
                            ${darkMode ? "bg-dfGreen left-[5vw]" : "bg-amber-500/60 right-[5vw]"} 
                            ${darkMode ? "lg:left-[15vw]" : "lg:right-[15vw]"} 
                            ${darkMode ? "xl:left-[25vw]" : "xl:right-[25vw]"} 
                            ${darkMode ? "2xl:left-[40vw]" : "2xl:right-[30vw]"}
                            lightBallAppearence`} />
        </div>
    </div>
  );
}