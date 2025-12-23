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
                            ${TabMode === "AboutMe" ? "TabBlurIn" : "TabBlurOut"}`}>
            </div>
            <div className={`z-20 lg:w-[90vw] w-full h-[90vh] mt-3 rounded-2xl pt-[10vh]
                            ${darkMode ? "bg-drSecondaryDark/80" : "bg-dfSecondary/80"}
                            ${TabMode === "AboutMe" ? "TabIn" : "TabOut"}`}>
                <div className={`px-4 pt-3 max-h-[80vh] rounded-b-xl text-xl atkinson-hyperlegible-regular overflow-y-auto scrollbar-thin scrollbar-webkit resize-none 
                            ${darkMode ? "bg-dr2SecondaryDark/80 text-lt2PrimaryDark/80" : "bg-ltSecondary/50 text-black"}`}>
                    {/* <h2 className="text-3xl text-center mb-3">About me</h2> */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quisquam
                        tenetur ullam, eveniet cumque, fugiat dicta laborum repellendus unde,|
                        consequuntur nam similique dolor fugit repellat quasi enim voluptates quod!

                    </p>
                </div>
            </div>
        </div>
    );
}