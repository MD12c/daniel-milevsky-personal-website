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
            <div className={`absolute w-20 h-20 rounded-full ball 
                            ${darkMode ? "bg-dfGreen moveBallDown" : "bg-amber-950/60 moveBallUp"} 
                            left-[5vw] 
                            lg:left-[15vw] 
                            xl:left-[25vw] 
                            darkBallAppearence`} />
                              
            <div className={`absolute w-20 h-20 rounded-full ball
                            ${darkMode ? "bg-dr2Green moveBallUp" : "bg-amber-500/60 moveBallDown"} 
                            right-[5vw] 
                            lg:right-[15vw] 
                            xl:right-[25vw] 
                            lightBallAppearence`} />
        </div>
    </div>
  );
}