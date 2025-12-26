import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ProjectTabContext } from "../../context/ProjectTabContext";

export default function KaliLinux() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Kali Linux</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                I never understood how the internet worked. To me, it was magic
                that I wasn't supposed to touch. This was frustrating because
                pretty much everyone uses it every day, including me. I started
                watching channels on youtube like{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-dfPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://www.youtube.com/@PowerCertAnimatedVideos"
                >
                    PowerCert Animated Videos
                </a>{" "}
                that explained what was going on under the hood, when I came
                across hacking channels. One video in particular blew my mind about
                how easy it is to create malware:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-dfPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://www.youtube.com/watch?v=_C7nRJ6WsmI"
                >
                    Complete Metasploit System Hacking Tutorial!
                </a>{" "}
                Naturaly, I followed the tutorial, after which I created an .exe
                file that, if opened, would give another computer full access
                to everything on the first device.
                <br />
                Then my brother and I tested that on our computers and it
                unsurprisingly worked.
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
                I learned the basics of networking, setting up a virtual
                machine, the basics of linux OS and the importance of cyber-security.
            </p>
        </div>
    );
}
