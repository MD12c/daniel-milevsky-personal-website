import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ProjectTabContext } from "../../context/ProjectTabContext";

export default function Hand() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Hand</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                The goal of this project was to create something of our choice
                that would relate to the theme of Frankenstein for my English
                class. I did what I do best and designed a wrist with movable
                fingers that are controlled by strings.
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
                This project didn't teach me anything new, I just applied what I
                already knew.
            </p>
        </div>
    );
}
