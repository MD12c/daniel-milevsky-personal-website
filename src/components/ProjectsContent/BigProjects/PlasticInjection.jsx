import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";
import VideoLoader from "../../VideoLoader";

export default function PlasticInjection() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">
                Plastic Injection
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
                For our final project of the program, the goal was to
                demonstrate the things we have learned over the 3 years in
                Dawson by making a prototype that would solve an environmental
                problem. My team and I decided to make a prototype of a
                pneumatically-actuated plastic injection molding machine, which
                is a machine that can melt plastic pellets and inject them into
                a mold to create a plastic part. We took on this challenge
                because the department of Mech-Tech at Dawson was producing a
                lot of plastic waste from 3D printing. We wanted to find a way
                to recycle that waste and make it into new parts. I was the team
                leader in the design and assisted in the manufacturing, ordering
                and documentation. Here is how it came out:
            </p>

            <div className="my-10">
                <ImageLoader
                    imgAdress={"PlasticInjection/PlasticInjection.png"}
                    key={ProjectTab}
                />
            </div>
            <p>
                The frame of the machine is made from 1x1 and 1x2 inch
                extrusions from a local supplier:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://www.fazstore.ca"
                >
                    FAZTEK
                </a>{" "}
                with 3D printed corner brackets and mild steel plate at the top.
                The molds are made from temperature resistant 3D printed resin
                for prototype purposes. The heating element was a 300W nozzle
                heater ordered from:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://micabandheater.com/stock-nozzle-heaters.php#list"
                >
                    NSI inc.
                </a>
                The machine is controlled by an INKBIRD ITC-100VH PID
                Temperature controller that is connected to a thermocouple and a
                solid state relay. The machine is operated by setting the
                desired temperature on the controller, waiting for it to heat up
                and then manually injecting the plastic into the mold using a
                lever.
                <br />
                We used a Bimba pneumatic piston we salvaged from the pneumatics
                lab and the vice was simply bought from amazon. The rest was
                machined and printed in the school workshop.
            </p>
            <div className="flex flex-row flex-wrap gap-3 mx-5 my-10 justify-center">
                <video
                    className="rounded-2xl"
                    width="full"
                    height="240"
                    controls
                >
                    <source
                        src={`/daniel-milevsky-personal-website/portfolio-img/videos/No/Finalvid.mp4`}
                        type="video/mp4"
                    />
                </video>
            </div>
            <p>
                The mold itself is a horse chess piece my teammate modeled. As
                you can see, the molded part came out pretty well, for a second
                test we ran. The defects on the base of the horse are from us
                being impatient and trying to remove the part before it was
                fully cooled. 😔
            </p>
            <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/PlasticInjection/stand.png`}
                    alt="Cannot load img"
                    className="sm:w-200 w-full rounded-2xl"
                />
            </div>
            <p>
                We then presented this project at Dawson's annual science fest.
                Above is a picture of our stand for the presentation. We also
                made a poster to explain the project to the visitors.
            </p>
            <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/PlasticInjection/Poster.png`}
                    alt="Cannot load img"
                    className="sm:w-200 w-full rounded-2xl"
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
                This project was a great way to apply the skills I learned in
                the program as well as train my collaborative and team
                management skills in the process. We learned about:
                <ul className="list-disc list-inside">
                    <li>Team management</li>
                    <li>Plastic injection molding</li>
                    <li>PID temperature controlling</li>
                    <li>Design with aluminum extrusions</li>
                    <li>Heater selection</li>
                    <li>Design with O-rings</li>
                </ul>
            </p>
        </div>
    );
}
