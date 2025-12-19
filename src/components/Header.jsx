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
  return (
    <div className="flex justify-between items-center mt-3 py-4 rounded-xl md:mx-40 sm:m-0 border-gray-600 shadow bg-gray-200">
      <div className="flex">
        <i className={`${iconStyle} fa-solid fa-house`} />
        <h1 className="text-4xl font-oxanium font-bold">Daniel Milevsky</h1>
      </div>
      <i className={`${iconStyle} fa-solid fa-sun`} />
    </div>
  );
}
