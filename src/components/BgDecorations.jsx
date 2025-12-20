import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
export default function BgDecorations() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div>
        <div className="absolute overflow-hidden h-screen w-screen flex items-center justify-center shadow-black/50">
            <div className={`absolute w-170 h-170 rounded-full border-25 
                            ${darkMode ? "border-drGreen/50" : "border-amber-700/50"}`} />
        </div>
        <div className="absolute h-screen w-screen">
            <div className={`absolute w-20 h-20 rounded-full 
                             ${darkMode ? "bg-dr2Green" : "bg-amber-950/60"} 
                             top-[5vh] left-[5vh]
                             lg:top-[15vh] lg:left-[15vh]
                             xl:top-[15vh] xl:left-[25vh]
                             2xl:top-[15vh] 2xl:left-[40vh]
                             3xl:top-[15vh] 3xl:left-[55vh]`} />
                              
            <div className={`absolute w-20 h-20 rounded-full 
                             ${darkMode ? "bg-dfGreen" : "bg-amber-500/60"}
                             bottom-[5vh] right-[5vh]
                             lg:bottom-[15vh] lg:right-[15vh]
                             xl:bottom-[15vh] xl:right-[25vh]
                             2xl:bottom-[15vh] 2xl:right-[40vh]
                             3xl:bottom-[15vh] 3xl:right-[55vh]`} />
        </div>
    </div>
  );
}