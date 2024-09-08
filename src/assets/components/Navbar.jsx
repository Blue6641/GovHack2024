import React, { useState } from "react";
import Burger from "../icons/burger-menu";
import Close from "../icons/close";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="fixed z-10 h-20 w-screen bg-primary-bg drop-shadow-lg">
      <div className="flex h-full w-full items-center justify-between px-2">
        <div className="flex justify-center">
          <h1 className="font-primary mx-4 text-3xl text-primary-main sm:text-4xl">
            GovHack 2024
          </h1>
        </div>
        {/* <div className="hidden md:flex">
          <ul className="flex">
            <li>Home</li>
            <li>Data Analysis</li>
            <li>Map</li>
          </ul>
          <button className="height-[10px] mx-5 px-5">Contact Me</button>
        </div> */}

        {/*Burger Menu Section*/}
        <div className="mr-4 md:hidden" onClick={handleClick}>
          {!nav ? <Burger className="h-5 w-5" /> : <Close className="w-5" />}
        </div>
      </div>

      {/* <ul className={!nav ? "hidden" : "absolute w-full bg-white px-8"}>
        <li className="w-full border-b-2 border-black">Home</li>
        <li className="w-full border-b-2 border-black">Data Analysis</li>
        <li className="w-full border-b-2 border-black">Map</li>
        <div className="my-4 flex justify-start">
          <button className="w-full rounded-md">Contact Me</button>
        </div>
      </ul> */}

      {/* -- Old NavBar
        <div className='flex items-center'>
          <a href="" className='text-base mx-5 font-primary'>Projects</a>
          <a href="" className='text-base mx-5 font-primary'>Experience</a>
          <button className="bg-primary-main hover:bg-primary-highlight text-white font-bold py-2 px-5 mx-5 rounded-full">Contact Me</button>          </div>
    */}
    </div>
  );
};

export default Navbar;
