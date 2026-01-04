import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function Hammer() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Hammer</h2>
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
                and instructions to then machine a hammer using equipment in the
                machine shop.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row mt-3">
                <ImageLoader imgAdress={"hammer/hammer3.jpg"} key={ProjectTab} />
                <ImageLoader imgAdress={"hammer/hammer.jpg"} key={ProjectTab} />
                <ImageLoader imgAdress={"hammer/hammer2.jpg"} key={ProjectTab} />
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
                I learned how to do more advanced lathe work, such as knurling,
                long taper-passes, fillets, learned how to calibrate a 4 jaw
                chuck with a dial indicator. I also worked with weaker materials
                such as plastic and brass and used threaded inserts to attach
                them to the hammer head, then coated the handle with black oxide
                to prevent rust.
            </p>
        </div>
    );
}
