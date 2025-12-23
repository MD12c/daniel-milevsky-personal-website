import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { RenderContext } from "../context/RenderContext";

export default function ProgressBar({ barWidth }) {
  const { darkMode } = useContext(DarkModeContext);
  const { TabMode } = useContext(TabContext);
  const { rendered } = useContext(RenderContext);


  return (
    <div className={`mt-2 w-50 h-4 rounded-full overflow-visible
    ${darkMode ? "bg-drSecondaryDark" : "bg-drSecondary"}`}>
        <div className={`ml-0 h-4 rounded-full
        ${darkMode ? "bg-dfPrimaryDark" : "bg-dfPrimary"}`}
            style={{ width: `${barWidth}%`}}></div>
    </div>
  );
}