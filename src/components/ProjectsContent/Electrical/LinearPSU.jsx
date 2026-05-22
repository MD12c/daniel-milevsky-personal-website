import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function LinearPSU() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">
                Linear Power Supply
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
                After watching this playlist about{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://www.youtube.com/playlist?list=PLUl4u3cNGP62UTc77mJoubhDELSC8lfR0"
                >
                    power electronics
                </a>{" "}
                and dissasembling a couple of power supplies, I decided to try
                and make my own. I decided to make a linear power supply because
                they are simple and make for a good starting project.
                <br />
                First, I found this transformer in an uninterruptible power
                supply.
                <br />
                Second, I designed and simulated the circuit in LTspice, then I
                salvaged the components from an old ATX power supply and
                assembled the circuit on a perfboard.
            </p>
            <ImageLoader
                imgAdress={"LinearPSU/transformer.png"}
                key={ProjectTab}
            />
            <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/LinearPSU/LTSpice.png`}
                    alt="Cannot load img"
                    className="w-full rounded-2xl"
                />
            </div>
            <p>
                The circuit starts with a common mode choke, then proceeds to
                the transformer which steps down the voltage from 120V to 25V.
                After that, the voltage is rectified by a full bridge rectifier
                and filtered by two large electrolytic capacitors and an
                inductor. Finally, for small load currents, the voltage is
                regulated by a linear voltage regulator on the base of a TL431
                controlled by a potentiometer and for large load currents, the
                voltage is simply taken from the output of the inductor. I am
                considering adding a buck converter after the inductor to be
                able to regulate the voltage at large load currents as well.
                <br />
                After several tests on the breadboard, I found out that
                everything was working as expected. I proceeded to solder the
                circuit on a perfboard and gave it a try. The voltage was very
                low and did not reach the desired value. I found that due to the
                low value of the resistor on the cathode of the TL431, the
                current going through the TL431 was above the rated current
                specified on the datasheet.
                <br />I found another resistor with a higher value, but couldn't
                find another TL431. I decided to put this project on hold until
                I finish the semester.
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
                I learned about power electronics and simulation in LTspice
                while working on this project. I upgraded my soldering skills
                and got some experiance with perfboard assembly.
            </p>
        </div>
    );
}
