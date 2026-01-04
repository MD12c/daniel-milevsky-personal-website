import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function CombinationLock() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">
                Combination Lock
            </h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                This time I decided to make the mechanism of a combination
                padlock with 4 rotary dials as a step up from my previous
                projects.
            </p>
            <div className="flex flex-col gap-3 md:flex-row mt-3">
                <ImageLoader imgAdress={"lock/lock4.jpg"} key={ProjectTab} />
                <ImageLoader imgAdress={"lock/lock2.jpg"} key={ProjectTab}/>
                <ImageLoader imgAdress={"lock/lock.jpg"} key={ProjectTab} />
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
                I learned how combination locks work internally and that writing
                with a sharpie on PLA plastic is a bad idea.
            </p>
        </div>
    );
}
