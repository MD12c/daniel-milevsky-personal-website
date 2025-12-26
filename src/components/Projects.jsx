import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { ProjectTabContext } from "../context/ProjectTabContext";
import NerfGun from "./ProjectsContent/NerfGun";
import AssassinsCreedKnife from "./ProjectsContent/AssassinsCreedKnife";
import Divider from "./ProjectsContent/Divider";
import CombinationLock from "./ProjectsContent/CombinationLock";
import BlowDartTube from "./ProjectsContent/BlowDartTube";
import SimpleCalculator from "./ProjectsContent/SimpleCalculator";
import KaliLinux from "./ProjectsContent/KaliLinux";

export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);
    const { ProjectTab, setProjectTab } = useContext(ProjectTabContext);

    const projectTabStyle = `flex font-oxanium text-2xl justify-center items-center rounded-2xl bg-dfSecondary w-auto h-20
    hover:shadow-md hover:cursor-pointer px-2 active:shadow-inner
    ${
        darkMode ? "bg-dfSecondaryDark hover:bg-ltPrimaryDark/30 active:bg-ltPrimaryDark/60" : "bg-dfSecondary hover:bg-ltPrimary/30 active:bg-ltPrimary/60"
    }`;

    const BeforeProps = [
        "Nerf gun",
        "Assassin's creed knife",
        "Combination Lock",
        "Blow dart tube",
        "Simple calculator",
        "Kali linux"
    ];
    const MachiningProps = [
        "Hammer",
        "Gears",
        "C clamp",
        "Welding",
        "Screw driver",
        "Hole puncher",
    ];
    const DesignProps = [
        "Air engine",
        "Glider",
        "Glasses",
        "Plotter",
        "Robot",
        "Storage tank",
        "Hand"
    ];
    const CodingProps = [
        "This website",
        "Image to machine code",
        ".csv parser",
        "Robot controls"
    ];
    const categories = [
        { name: "Before College", items: BeforeProps },
        { name: "Machining", items: MachiningProps },
        { name: "Design", items: DesignProps },
        { name: "Coding", items: CodingProps }
    ];

    return (
         <div className={`absolute w-full h-full flex justify-center inset-0 
            ${TabMode === "Projects" ? "TabIn" : "TabOut"}`}>
            <div
                className={`lg:w-250 w-[95vw] h-[95vh] mt-3 rounded-2xl pt-[10vh] 
                            ${
                                darkMode
                                    ? "bg-drSecondaryDark/80"
                                    : "bg-dfSecondary/80"
                            }`}
            >
                <div
                    className={`px-4 pt-3 h-[85vh] rounded-b-2xl text-xl overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch] scrollbar-thin scrollbar-webkit
                            ${
                                darkMode
                                    ? "bg-dr2SecondaryDark/80 text-lt2PrimaryDark/80"
                                    : "bg-ltSecondary/50 text-black"
                            }`}
                >
                    <div className="flex flex-col items-center">
                        <div>
                            {categories.map((cat, ci) => (
                                <div key={ci} className="pb-2">
                                    <h2 className="text-xl font-oxanium-bold mb-2 mt-4">{cat.name}</h2>
                                    <div className="max-w-250 grid text-center w-[80vw] sm:w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                        {cat.items.map((item, i) => (
                                            <div key={i} className={projectTabStyle}
                                            onClick={() => setProjectTab(item)}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div><AssassinsCreedKnife /></div>
                    <Divider />
                    <div><NerfGun /></div>
                    <Divider />
                    <div><CombinationLock /></div>
                    <Divider />
                    <div><BlowDartTube /></div>
                    <Divider />
                    <div><SimpleCalculator /></div>
                    <Divider />
                    <div><KaliLinux /></div>
                </div>
            </div>
        </div>
    );
}
