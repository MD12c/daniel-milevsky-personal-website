import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { RenderContext } from "../context/RenderContext";

export default function ProgressBar({ barWidth }) {
  const { darkMode } = useContext(DarkModeContext);
  const { TabMode } = useContext(TabContext);
  const { rendered } = useContext(RenderContext);


  return (
    <div className="absolute ml-45 mt-2 w-50 h-4 bg-drSecondary rounded-full overflow-visible">
        <div className={`ml-0 h-4 bg-dfPrimary rounded-full`}
            style={{ width: `${barWidth}%`}}></div>
    </div>
  );
}