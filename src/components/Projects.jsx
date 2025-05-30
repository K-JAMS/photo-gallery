import React, { useState } from "react";

const Projects = ({ theme, setTheme, handleTheme }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };
  const edit = [
    "./img/projs/Edit1.jpg",
    "./img/projs/Edit2.jpg",
    "./img/projs/Edit3.jpg",
    "./img/projs/Edit4.jpg",
    "./img/projs/Edit5.jpg",
    "./img/projs/Edit6.jpg",
  ];

  const digi = [
    "./img/projs/Digital1.jpg",
    "./img/projs/Digital2.jpg",
    "./img/projs/Digital3.png",
    "./img/projs/Digital4.PNG",
    "./img/projs/Digital5.jpg",
    "./img/projs/Digital6.gif",
  ];

  return (
    <section
      className={`${
        theme ? "dark" : ""
      } -mt-5 p-10 bg-[#e0e0e0] dark:bg-[#0f0f0f]`}
    >
      <div
        className={`${
          model ? "visible opacity-100" : "invisible opacity-0"
        }  min-h-screen w-full -mt-50 -ml-10 fixed flex justify-center items-center bg-black/80 transition duration-300 overflow-hidden z-50`}
      >
        <button
          className="absolute top-1 right-2 text-white text-4xl bg-white-600 px-2  hover:text-gray-400 transition duration-300 cursor-pointer"
          onClick={() => setModel(false)}
        >
          &times;
        </button>
        <img
          className="w-auto view h-auto min-h-full block leading-[0] box-border p-0 m-auto"
          src={tempImgSrc}
        />
      </div>

      <p className="mt-2 text-xl font-bold text-blue-500 dark:text-white">
        Photo Editing
      </p>
      <div className="columns-1 sm:columns-2 lg:columns-3 md:py-5 gap-4">
        {edit.map((src, index) => (
          <div key={index} className="mb-5 break-inside-avoid">
            <img
              src={src}
              className="w-full object-over rounded-lg cursor-pointer"
              onClick={() => getImg(src)}
            />
          </div>
        ))}
      </div>

      <p className="font-mono mt-2 text-xl font-bold text-blue-500 dark:text-white">
        Digital Arts
      </p>
      <div className="columns-1 sm:columns-2 lg:columns-3 md:py-5 gap-4">
        {digi.map((src, index) => (
          <div key={index} className="mb-5 break-inside-avoid">
            <img
              src={src}
              className="w-full object-over rounded-lg cursor-pointer"
              onClick={() => getImg(src)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
