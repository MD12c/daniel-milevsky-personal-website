import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";

export default function ContactMe() {
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

    return (
        <div
            className={`absolute min-h-screen w-full flex justify-center inset-0 
            ${TabMode === "ContactMe" ? "TabIn" : "TabOut"}`}
        >
            <div
                className={`lg:w-250 w-[95vw] h-[20vh] mt-3 rounded-2xl pt-[10vh] 
                            ${
                                darkMode
                                    ? "bg-drSecondaryDark/80"
                                    : "bg-dfSecondary/80"
                            }`}
            >
                <div
                    data-scroll-container
                    className={`px-4 pt-3 h-[10vh] rounded-b-2xl text-xl overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch] scroll-smooth scrollbar-thin scrollbar-webkit
                            ${
                                darkMode
                                    ? "bg-dr2SecondaryDark/80 text-lt2PrimaryDark/80"
                                    : "bg-ltSecondary/50 text-black"
                            }`}
                >
                    <div className="text-2xl flex flex-col items-center">
                        <div>
                            <h2>
                                <span className="font-oxanium-bold">
                                    email:
                                </span>{" "}
                                danielmilevsky@gmail.com
                            </h2>
                            <h2>
                                <span className="font-oxanium-bold">
                                    linkedin:
                                </span>{" "}
                                <a
                                    className={`underline underline-offset-1 ${
                                        darkMode
                                            ? "text-dfPrimaryDark"
                                            : "text-dfPrimary"
                                    }`}
                                    href="https://www.linkedin.com/in/daniel-milevsky-467914332/"
                                >
                                    Daniel Milevsky
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
