import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { RenderContext } from "../context/RenderContext";

export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);
    const { rendered } = useContext(RenderContext);

    const projectTabStyle = `flex font-oxanium text-2xl justify-center items-center rounded-2xl bg-dfSecondary w-auto h-20 ${
        darkMode ? "bg-dfSecondaryDark" : "bg-dfSecondary"
    }`;

    const BeforeProps = [
        "Nerf gun",
        "Assassin's creed knife",
        "Combination Lock",
        "Blow dart tube",
        "Simple calculator"
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
    ];
    const CodingProps = [
        "This website",
        "Image to machine code",
        ".csv parser",
        "Robot controls"
    ];
    const categories = [
        { name: "Before", items: BeforeProps },
        { name: "Machining", items: MachiningProps },
        { name: "Design", items: DesignProps },
        { name: "Coding", items: CodingProps },
    ];

    return (
        <div
            className={`w-full h-full flex justify-center ${
                TabMode === "Projects" ? "TabIn" : "TabOut"
            }`}
        >
            <div
                className={`absolute lg:w-[90vw] w-[95vw] h-[95vh] mt-3 rounded-2xl pt-[10vh] 
                            ${
                                darkMode
                                    ? "bg-drSecondaryDark/80"
                                    : "bg-dfSecondary/80"
                            }`}
            >
                <div
                    className={`flex justify-center px-4 pt-3 h-[85vh] rounded-b-2xl text-xl overflow-y-auto [-webkit-overflow-scrolling:touch] scrollbar-thin scrollbar-webkit
                            ${
                                darkMode
                                    ? "bg-dr2SecondaryDark/80 text-lt2PrimaryDark/80"
                                    : "bg-ltSecondary/50 text-black"
                            }`}
                >
                    <div>
                        {categories.map((cat, ci) => (
                            <div key={ci}>
                                <h2 className="text-xl font-oxanium-bold mb-2 mt-4">{cat.name}</h2>
                                <div className="max-w-250 grid text-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
                                    {cat.items.map((item, i) => (
                                        <div key={i} className={projectTabStyle}>{item}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
