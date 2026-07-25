import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function ArrowClock() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Arrow Clock</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                I am tiered of digital clocks and I didn't like the look of
                arrow clocks that were available, so I made my own.
            </p>
            <div className="my-5 flex flex-row items-center">
                <ImageLoader
                    imgAdress={"ArrowClock/ArrowClock.png"}
                    key={ProjectTab}
                />
            </div>
            <div className="mt-5 flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Conclusion</h3>
            </div>
            <p>
                Code can be found on my github:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/sketch-solver"
                >
                    here
                </a>
            </p>
        </div>
    );
}
