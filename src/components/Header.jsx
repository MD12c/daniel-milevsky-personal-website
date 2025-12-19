import { useState, useEffect } from "react";
export default function Header() {
  const iconStyle =
    "mx-8 text-orange-500 hover:text-orange-300 transition text-3xl cursor-pointer";

  //   return (
  //     <div className="flex justify-between items-center mt-3 py-4 rounded-xl mx-40 border-gray-600 shadow bg-gray-200">
  //         <i className={`${iconStyle} fa-solid fa-house`}></i>
  //         <h1 className="text-4xl font-oxanium font-bold">
  //         Daniel Milevsky
  //         </h1>
  //         <i className={`${iconStyle} fa-solid fa-sun`}></i>
  //     </div>
  //   );
  // }

  const name = "Daniel Milevsky";
  const letters = name.split("");
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < letters.length) {
      const timeout = setTimeout(() => {
        setContent((prev) => prev + letters[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, letters]);

  

  return (
      <div className="flex mx-3 z-50 justify-between items-center py-4 rounded-xl md:mx-40 sm:m-3 border-gray-600 shadow bg-gray-200">
        <div className="flex flex-row">
          <h1 className="pl-3 text-4xl font-oxanium font-bold">{content}</h1>
          <div className="fastPulse m-1 w-0.5 h-8 bg-black"></div>
        </div>
          <div className="flex flex-row">
            <i className={`${iconStyle} mr-0 group fa-solid fa-sun`}>
              <div className="absolute mt-2 hidden group-hover:block -translate-x-8 font-oxanium
                              px-3 py-1 text-sm rounded bg-gray-600 text-white shadow-lg select-none">Dark/Light</div>
            </i>
            <i className={`${iconStyle} mr-5 group fa-solid fa-house`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="absolute mt-2 hidden group-hover:block -translate-x-4 font-oxanium
                              px-3 py-1 text-sm rounded bg-gray-600 text-white shadow-lg select-none"
                    onClick={() => window.location.reload()}>Home</div>
            </i>
        </div>
      </div>
  );
}
