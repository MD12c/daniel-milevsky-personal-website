import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ProjectTabContext } from "../../context/ProjectTabContext";

export default function VBlock() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">V block</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                A machining project where the teacher gave each of us drawings
                and instructions to then machine a V block using equipment
                in the machine shop.
            </p>
            <div className="mt-5 flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Conclusion</h3>
            </div>
            <p>
                Learned how to use a surface grinder and heat treat steel.
            </p>
        </div>
    );
}
