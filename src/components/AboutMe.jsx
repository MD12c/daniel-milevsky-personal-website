import { useState, useContext } from 'react'
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext"
import { RenderContext } from "../context/RenderContext";

export default function AboutMe() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);
    const { rendered } = useContext(RenderContext);
    console.log("render "+rendered);

    
    return (
        <div className="absolute z-0 w-full h-full overflow-hidden flex justify-center">
            <div className={`absolute w-full h-full backdrop-blur-sm 
                            ${TabMode === "#AboutMe" ? "TabBlurIn" : "TabBlurOut"}`}>
            </div>
            <div className={`z-20 sm:w-[90vw] w-full h-[90vh] mt-3 rounded-2xl 
                            ${darkMode ? "bg-drSlate/80" : "bg-dfGray/80"}
                            ${TabMode === "#AboutMe" ? "TabIn" : "TabOut"}`}>
                <div className="pt-[10vh] px-4">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed provident ut praesentium nisi molestiae dolorem quos
                 totam assumenda officia. Quasi cumque voluptatem voluptas praesentium perspiciatis dolore, neque non labore!</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed provident ut praesentium nisi molestiae dolorem quos
                 totam assumenda officia. Quasi cumque voluptatem voluptas praesentium perspiciatis dolore, neque non labore!</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed provident ut praesentium nisi molestiae dolorem quos
                 totam assumenda officia. Quasi cumque voluptatem voluptas praesentium perspiciatis dolore, neque non labore!</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed provident ut praesentium nisi molestiae dolorem quos
                 totam assumenda officia. Quasi cumque voluptatem voluptas praesentium perspiciatis dolore, neque non labore!</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed provident ut praesentium nisi molestiae dolorem quos
                 totam assumenda officia. Quasi cumque voluptatem voluptas praesentium perspiciatis dolore, neque non labore!</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed provident ut praesentium nisi molestiae dolorem quos
                 totam assumenda officia. Quasi cumque voluptatem voluptas praesentium perspiciatis dolore, neque non labore!</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed provident ut praesentium nisi molestiae dolorem quos
                 totam assumenda officia. Quasi cumque voluptatem voluptas praesentium perspiciatis dolore, neque non labore!</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed provident ut praesentium nisi molestiae dolorem quos
                 totam assumenda officia. Quasi cumque voluptatem voluptas praesentium perspiciatis dolore, neque non labore!</p>
                </div>
            </div>
        </div>
    );
}