import { useContext } from "react";
import { TabContext } from "../context/TabContext";

export default function Projects() {
    const { TabMode } = useContext(TabContext);

    return (
        <div className="z-0 w-full h-full flex justify-center">
            <div
                className={`w-full h-full absolute inset-0 backdrop-blur-sm pointer-events-none
                          ${(TabMode === "Home" || TabMode === "none") ? "TabBlurOut" : "TabBlurIn"}`}
            ></div>
        </div>
    );
}
