import React, { useState } from "react";

const Navbar = ({theme, setTheme, handleTheme}) => {
  return (
    <>
      <nav
        className={`${
          theme ? "dark" : ""
        } fixed top-0 z-50 flex flex-row w-full bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,.8)] backdrop-blur-lg border-black/10 shadow-lg`}
      >
        <div className="basis-1/2 p-5 text-left">
          <a
            href="#home"
            className="px-3 m-1 font-mono text-3xl text-center font-bold bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent leading-right border"
          >
            JAM<span className="text-blue-500">Solutions</span>
          </a>
        </div>
        <div className="basis-1/2 p-5 text-right">
          <button
            onClick={handleTheme}
            className="h-8 w-15 font-mono text-md text-center font-bold text-red-500 dark:text-white border-3 border-red-500 dark:border-white rounded-2xl hover:bg-red-500 dark:hover:bg-white hover:text-white dark:hover:text-black transition cursor-pointer"
          >
            {theme ? "☀︎" : "☾"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
