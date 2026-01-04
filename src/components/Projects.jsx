import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { ProjectTabContext } from "../context/ProjectTabContext";
import { MobileContext } from '../context/MobileContext'
import NerfGun from "./ProjectsContent/BeforeCollege/NerfGun";
import AssassinsCreedKnife from "./ProjectsContent/BeforeCollege/AssassinsCreedKnife";
import Divider from "./ProjectsContent/Divider";
import CombinationLock from "./ProjectsContent/BeforeCollege/CombinationLock";
import BlowDartTube from "./ProjectsContent/BeforeCollege/BlowDartTube";
import SimpleCalculator from "./ProjectsContent/BeforeCollege/SimpleCalculator";
import KaliLinux from "./ProjectsContent/BeforeCollege/KaliLinux";
import Hammer from "./ProjectsContent/Machining/Hammer";
import Gears from "./ProjectsContent/Machining/Gears";
import Cclamp from "./ProjectsContent/Machining/Cclamp";
import ScrewDriver from "./ProjectsContent/Machining/ScrewDriver";
import VBlock from "./ProjectsContent/Machining/VBlock";
import HolePuncher from "./ProjectsContent/Machining/HolePuncher";
import Glider from "./ProjectsContent/Design/Glider";
import Glasses from "./ProjectsContent/Design/Glasses";
import BikeFrame from "./ProjectsContent/Design/BikeFrame";
import Plotter from "./ProjectsContent/Design/Plotter";
import Robot from "./ProjectsContent/Design/Robot";
import StorageTank from "./ProjectsContent/Design/StorageTank";
import Hand from "./ProjectsContent/Design/Hand";
import ThisWebsite from "./ProjectsContent/Coding/ThisWebsite";
import ImageToMachineCode from "./ProjectsContent/Coding/ImageToMachineCode";
import CSVParser from "./ProjectsContent/Coding/CSVParser";
import RobotControls from "./ProjectsContent/Coding/RobotControls";

export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);
    const { ProjectTab, setProjectTab } = useContext(ProjectTabContext);
      const { mobileMode } = useContext(MobileContext);

    const projectTabStyle = `flex font-oxanium text-2xl justify-center items-center rounded-2xl bg-dfSecondary h-20
    hover:shadow-md hover:cursor-pointer px-2 active:shadow-inner
    ${
        darkMode
            ? "bg-dfSecondaryDark hover:bg-ltPrimaryDark/30 active:bg-ltPrimaryDark/60"
            : "bg-dfSecondary hover:bg-ltPrimary/30 active:bg-ltPrimary/60"
    }`;

    const BeforeProps = [
        "Hidden blade",
        "Nerf gun",
        "Combination Lock",
        "Blow dart tube",
        "Simple calculator",
        "Kali linux",
    ];
    const MachiningProps = [
        "C clamp",
        "Gears",
        "Hammer",
        "Screw driver",
        "V block",
        "Hole puncher",
    ];
    const DesignProps = [
        // "Air engine",
        "Glider",
        "Glasses",
        "Bike frame",
        "Plotter",
        "Robot",
        // "Storage tank",
        "Hand",
    ];
    const CodingProps = [
        "This website",
        "Image to machine code",
        ".csv parser",
        "Robot controls",
    ];
    const categories = [
        { name: "Before College", items: BeforeProps },
        { name: "Machining", items: MachiningProps },
        { name: "Design", items: DesignProps },
        { name: "Coding", items: CodingProps },
    ];

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

    return (
        <div
            className={`relative min-h-screen w-full flex justify-center inset-0 
            ${TabMode === "ProjectsJournal" ? "TabIn" : "TabOut"}`}
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
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-oxanium-bold mb-4 mt-4">Big Projects</h1>
                        <div className="flex flex-col md:flex-row justify-center w-[80vw] max-w-210 text-center gap-2 text-nowrap">
                            <div className={projectTabStyle+" md:w-80"}>Plotter 2V{!mobileMode && <br />} will be here</div>
                            <div className={projectTabStyle+" md:w-80"}>Dawsons cap-stone{!mobileMode && <br />} will be here</div>
                            <div className={projectTabStyle+" md:w-80"}>OpenGL stuff{!mobileMode && <br />} will be here</div>
                        </div>
                        <h1 className="text-3xl font-oxanium-bold mb-2 mt-14">Small Projects + Assignments</h1>
                        <div>
                            {categories.map((cat, ci) => (
                                <div key={ci} className="pb-2">
                                    <h2 className="text-xl font-oxanium-bold mb-2 mt-2">
                                        {cat.name}
                                    </h2>
                                    <div className="max-w-250 grid text-center w-[80vw] sm:w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                        {cat.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className={projectTabStyle}
                                                onClick={() =>
                                                    scrollToItem(item)
                                                }
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sticky top-[90%] flex justify-end">
                        <div
                            onClick={scrollToTop}
                            className={`flex justify-center items-center rounded-2xl w-15 h-15 shadow-2xs active:shadow-inner hover:cursor-pointer ${
                                darkMode
                                    ? "bg-drSecondaryDark/30 hover:bg-dfSecondaryDark/80"
                                    : "bg-drSecondary/30 hover:bg-dfSecondary/80"
                            }`}
                        >
                            <i
                                class={`text-4xl fa-solid fa-arrow-up
                                ${
                                    darkMode
                                        ? "text-dfPrimaryDark"
                                        : "text-black/60 hover:text-black"
                                }`}
                            ></i>
                        </div>
                    </div>
                    <Divider />
                    <div id={`${makeId("Hidden blade")}`}>
                        <AssassinsCreedKnife />
                    </div>
                    <Divider />
                    <div id={`${makeId("Nerf gun")}`}>
                        <NerfGun />
                    </div>
                    <Divider />
                    <div id={`${makeId("Combination Lock")}`}>
                        <CombinationLock />
                    </div>
                    <Divider />
                    <div id={`${makeId("Blow dart tube")}`}>
                        <BlowDartTube />
                    </div>
                    <Divider />
                    <div id={`${makeId("Simple calculator")}`}>
                        <SimpleCalculator />
                    </div>
                    <Divider />
                    <div id={`${makeId("Kali linux")}`}>
                        <KaliLinux />
                    </div>
                    <Divider />
                    <div id={`${makeId("C clamp")}`}>
                        <Cclamp />
                    </div>
                    <Divider />
                    <div id={`${makeId("Hammer")}`}>
                        <Hammer />
                    </div>
                    <Divider />
                    <div id={`${makeId("Gears")}`}>
                        <Gears />
                    </div>
                    <Divider />
                    <div id={`${makeId("Screw driver")}`}>
                        <ScrewDriver />
                    </div>
                    <Divider />
                    <div id={`${makeId("V block")}`}>
                        <VBlock />
                    </div>
                    <Divider />
                    <div id={`${makeId("Hole puncher")}`}>
                        <HolePuncher />
                    </div>
                    {/*<Divider />
                     <div id={`${makeId("Air engine")}`}>
                        <AirEngine />
                    </div> */}
                    <Divider />
                    <div id={`${makeId("Glider")}`}>
                        <Glider />
                    </div>
                    <Divider />
                    <div id={`${makeId("Glasses")}`}>
                        <Glasses />
                    </div>
                    <Divider />
                    <div id={`${makeId("Bike frame")}`}>
                        <BikeFrame />
                    </div>
                    <Divider />
                    <div id={`${makeId("Plotter")}`}>
                        <Plotter />
                    </div>
                    <Divider />
                    <div id={`${makeId("Robot")}`}>
                        <Robot />
                    </div>
                    {/* <Divider />
                    <div id={`${makeId("Storage tank")}`}>
                        <StorageTank />
                    </div> */}
                    <Divider />
                    <div id={`${makeId("Hand")}`}>
                        <Hand />
                    </div>
                    <Divider />
                    <div id={`${makeId("This website")}`}>
                        <ThisWebsite />
                    </div>
                    <Divider />
                    <div id={`${makeId("Image to machine code")}`}>
                        <ImageToMachineCode />
                    </div>
                    <Divider />
                    <div id={`${makeId(".csv parser")}`}>
                        <CSVParser />
                    </div>
                    <Divider />
                    <div id={`${makeId("Robot controls")}`}>
                        <RobotControls />
                    </div>
                    <Divider />
                </div>
            </div>
        </div>
    );
}
