import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function BresenhamLine() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Bresenham Line</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                I wanted to get more familiar with C programming language and
                learn raylib as a simple substitute for OpenGl. I found
                Bresenham Line and midpoint circle algorithms to be a good
                excuse to do just that.
            </p>
            <div className="my-5 flex flex-row items-center">
                <ImageLoader
                    imgAdress={"BresenhamLine/BresenhamLine.jpg"}
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
                I created a simple vector class to represent lines and circles.
                The algorithm itself wasnt that hard to implement but it was
                hard to wrap my head around how it works on an intuitive level
                (especially the optimized version of the midpoint circle
                algorithm). I tried to derive the solution myself but
                rediscovered Digital Differential Analyzer algorithm by accident
                thinking that it was the Bresenham Line. Code can be found on my
                github: Code can be found on my github:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/Bresenham-line"
                >
                    here
                </a>
            </p>
        </div>
    );
}
