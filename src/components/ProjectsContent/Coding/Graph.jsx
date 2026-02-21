import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";

export default function Graph() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Graph</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                After learning the basics of OpenGL during my winter break, I
                decided to reinforce my knowlege with a simple project. I chose
                to make a graphical calculator that plots a mathematical
                function on the screen. For more detail, visit my github{"  "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/Graph-Calculator"
                >
                    here
                </a>
            </p>
            <div className="flex justify-center w-full mt-5 ml-1.5">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/Preview.png`}
                    alt="Cannot load img"
                    className="sm:w-200 w-full rounded-2xl"
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
                I learned how to setup most of the OpenGL boiler-plate code into
                organized classes, how to use ImGui interface and I was
                introduced to software architecture.
            </p>
        </div>
    );
}
