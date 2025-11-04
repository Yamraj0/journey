import React, { useState } from "react";
import MenuData from "./data/MenuData";
import { IoMenu } from "react-icons/io5";

const App = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const menu = MenuData();
  return (
    <div>
      <nav className="top-0 z-50 fixed w-full bg-transparent flex  justify-between items-center px-4 py-2 basis-full">
        {/* Image section */}
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            className="h-10 w-10"
            src="https://raw.githubusercontent.com/Yamraj0/logo/9dc46e8e789d78110f3639f7aac3dc0eca75822b/logo-symbol.svg"
            alt=""
          />
          <h2 className="font-semibold">The Code Sutra</h2>
        </div>

        {/* Menu Section */}

        {/* Destop view */}
        <ul className="hidden md:flex items-center gap-4 font-semibold border px-5 bg-amber-50 py-2 rounded-full">
          {menu.map((e) => (
            <li>
              <a href={e.link}>{e.name}</a>
            </li>
          ))}
        </ul>

        

        <div className="flex gap-2">
          <button className="hidden md:flex border px-4 py-1 font-semibold text-black bg-amber-50  rounded text-center cursor-pointer">
            Log In
          </button>

          <button
          className="md:hidden"
            onClick={() => setIsOpen(!IsOpen)}
          >
          <IoMenu />
          </button>
        </div>
        
        
      </nav>
      {IsOpen && (
          <ul className=" md:hidden  flex flex-col items-center gap-4 font-semibold border px-5 bg-transparent rounded-2xl py-8">
            {menu.map((e) => (
              <li>
                <a href={e.link}>{e.name}</a>
              </li>
            ))}
          </ul>
        )}
       
    </div>
  );
};

export default App;
