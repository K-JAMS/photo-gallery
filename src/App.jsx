import React, { useState } from "react";
import Navbar from "./Navbar";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";

const App = () => {
  const [showProj, setShowProj] = useState(true);
  const onShowProj = () => {
    if (showProj == false) {
      setShowProj(true);
      setShowCert(false);
    };
  };

  const [showCert, setShowCert] = useState(false);
  const onShowCert = () => {
    if (showCert == false) {
      setShowCert(true);
      setShowProj(false);
    };
  };

  const [theme, setTheme] = useState(!"dark");
  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <section
        id="home"
        className={`${
          theme ? "dark" : ""
        } pt-30 px-10 bg-[#e0e0e0] dark:bg-[#0f0f0f]`}
      >
        <h1 className=" mx-1 my-3 text-3xl font-bold text-gray-600 dark:text-white">
          Gallery
        </h1>

        <button
          onClick={onShowProj}
          className="px-3 m-1 text-md text-center font-bold text-orange-500 dark:text-yellow-400 border-3 border-orange-500 dark:border-yellow-400 rounded-2xl hover:bg-orange-500 dark:hover:bg-yellow-400 hover:text-white transition cursor-pointer "
        >
          Projects
        </button>
        <button
          onClick={onShowCert}
          className="px-3 m-1 text-md text-center font-bold text-red-500 dark:text-purple-400 border-3 border-red-500 dark:border-purple-400 rounded-2xl hover:bg-red-500 dark:hover:bg-purple-400 hover:text-white transition cursor-pointer"
        >
          Certificates
        </button>
      </section>
      <Navbar theme={theme} setTheme={setTheme} handleTheme={handleTheme} />
      {showProj && (
        <Projects theme={theme} setTheme={setTheme} handleTheme={handleTheme} />
      )}
      {showCert && (
        <Certificates
          theme={theme}
          setTheme={setTheme}
          handleTheme={handleTheme}
        />
      )}
    </>
  );
};

export default App;
