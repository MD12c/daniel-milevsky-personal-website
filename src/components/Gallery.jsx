import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";
import ImageLoader from "./ProjectsContent/ImageLoader";
import VideoLoader from "./VideoLoader";

export default function Gallery() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);

    const projectTabStyle = `flex font-oxanium text-2xl justify-center items-center rounded-2xl bg-dfSecondary w-auto h-20
    hover:shadow-md hover:cursor-pointer px-2 active:shadow-inner
    ${
        darkMode
            ? "bg-dfSecondaryDark hover:bg-ltPrimaryDark/30 active:bg-ltPrimaryDark/60"
            : "bg-dfSecondary hover:bg-ltPrimary/30 active:bg-ltPrimary/60"
    }`;

    const makeId = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const scrollToItem = (item) => {
        const el = document.getElementById(makeId(item));
        const container = el?.closest("[data-scroll-container]");

        if (!el || !container) return;

        const y = el.offsetTop - 150;

        container.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };
    const scrollToTop = () => {
        const container = document.querySelector("[data-scroll-container]");
        if (!container) return;

        container.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    var keyIndex = 0;
    function makeKey() {
        () => keyIndex++;
    }

    const photos = [
        "hiddenblade",
        "blowdart/blowdart2",
        "blowdart/blowdart3",
        "lock/lock",
        "lock/lock2",
        "nerfgun",
        "Cclamp/Cclamp",
        "Cclamp/Cclamp2",
        "gears/gears",
        "gears/gears2",
        "hammer/hammer3",
        "hammer/hammer",
        "hammer/hammer2",
        "screwdriver/screwdriver",
        "screwdriver/screwdriver2",
        "Vblock/Vblock2",
        "Vblock/Vblock",
        "punchpress/punchpress2",
        "punchpress/punchpress",
        "glider/glider",
        "plotter",
        "robot/robot2",
        "robot/robot3",
        "hand/hand2",
        "hand/hand3",
        "hand/hand",
        "slot",
        "CADlife",
        "self3Dprint",
    ];
    const videosVert = [ 
        "mill",
        "No/pneumaticsC1No",
        "No/pneumaticsC2No",
        "No/pneumaticsC3No",
        "No/pneumaticsC4No",
    ];
    const videosHor = [
        "gears","nerfgun","nerfgun2","punchpress","No/fluidcimNo","No/CclampNo",
    ];

    return (
        <div
            className={`absolute min-h-screen w-full flex justify-center inset-0 
            ${TabMode === "Gallery" ? "TabIn" : "TabOut"}`}
        >
            <div
                className={`lg:w-250 w-[95vw] h-[95vh] mt-3 rounded-2xl pt-[10vh] 
                            ${
                                darkMode
                                    ? "bg-drSecondaryDark/80"
                                    : "bg-dfSecondary/80"
                            }`}
            >
                <div
                    data-scroll-container
                    className={`px-4 pt-3 h-[85vh] rounded-b-2xl text-xl overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch] scroll-smooth scrollbar-thin scrollbar-webkit
                            ${
                                darkMode
                                    ? "bg-dr2SecondaryDark/80 text-lt2PrimaryDark/80"
                                    : "bg-ltSecondary/50 text-black"
                            }`}
                >
                    {/* prettier-ignore */}
                    <div>
                        <div className="flex flex-row flex-wrap gap-3 mx-5 my-10 justify-center">
                            {photos.map((item, i) => (
                                <div className="lg:w-70 md:w-60 w-full">
                                    <ImageLoader imgAdress={item+".jpg"} key={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row flex-wrap gap-3 mx-5 my-10 justify-center">
                            {videosHor.map((video, h) => (
                                <div className="lg:w-70 md:w-60 w-full" key={h}>
                                    <VideoLoader videoAdress={video + ".mp4"} />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row flex-wrap gap-3 mx-5 my-10 justify-center">
                            {videosVert.map((video, v) => (
                                <div className="lg:w-70 md:w-60 w-full" key={v}>
                                    <VideoLoader videoAdress={video + ".mp4"} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
