import useClickOutside from "../HOOKS/useClickOutside";
import { useEffect, useState } from "react";

import HomeIcon from "@material-ui/icons/Home";
import HotelIcon from "@material-ui/icons/Hotel";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const Navbar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutside(false);
  const [navBackground, setNavBackground] = useState(0);

  // Set nav background opacity as you scroll
  const scrollFunction = () => {
    setNavBackground(window.scrollY / 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="z-10 py-5 fixed left-0 right-0 px-4 text-white"
      style={{
        backgroundColor: `rgba(75, 85, 99, ${navBackground})`,
        borderBottom: `2px solid rgba(96, 165, 250, ${navBackground})`,
      }}
    >
      <div className="container mx-auto items-center justify-between flex">
        <img src="" alt="" />
        <div>
          <div
            id="hamburger"
            className="w-10 cursor-pointer lg:hidden"
            onClick={() => setIsVisible((prevValue) => !prevValue)}
          >
            <div className="h-1 w-full transition duration-1000 rounded-full bg-blue-400 my-1"></div>
            <div
              className={`h-1 transition-all delay-100 duration-700 w-4/5 ml-auto rounded-full bg-blue-400 my-1 ${
                isVisible ? "w-full" : ""
              }`}
            ></div>
            <div
              className={`h-1 transition-all delay-300 duration-700 w-1/2 ml-auto rounded-full bg-blue-400 my-1 ${
                isVisible ? "w-full" : ""
              }`}
            ></div>
          </div>
          <div
            className={`lg:border-0 lg:flex-row lg:bg-opacity-0 lg:relative lg:w-auto
          flex-col flex transition-all duration-1000 fixed top-0 h-full md:w-1/3 w-2/3 min-w-30rem border-r-2 border-blue-400 left-0 bg-black bg-opacity-70 justify-evenly text-2xl items-center
          ${isVisible ? "left-0" : "-left-full lg:left-0"}`}
          >
            <a
              href="#Hero"
              className="mx-4 flex items-center cursor-pointer transition-all hover:text-blue-400 transform hover:scale-105"
            >
              Acasa <HomeIcon className="ml-1" />
            </a>
            <a
              href="#RoomTypes"
              className="mx-4 flex items-center cursor-pointer transition-all hover:text-blue-400 transform hover:scale-105"
            >
              Cazare <HotelIcon className="ml-1" />
            </a>
            <a
              href="#Facilities"
              className="mx-4 flex items-center cursor-pointer transition-all hover:text-blue-400 transform hover:scale-105"
            >
              Agrement <BubbleChartIcon className="ml-1" />
            </a>
            <a
              href="#Restaurant"
              className="mx-4 flex items-center lg:mr-8 cursor-pointer transition-all hover:text-blue-400 transform hover:scale-105"
            >
              Restaurant <FastfoodIcon className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
