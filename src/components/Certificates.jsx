import React, { useState } from 'react'

const Certificates = ({ theme, setTheme, handleTheme }) => {
  const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const getImg = (src) => {
      setTempImgSrc(src);
      setModel(true);
    };

  const images = [
    "./img/certs/Cert1.jpg",
    "./img/certs/Cert2.jpg",
    "./img/certs/Cert3.jpg",
    "./img/certs/Cert4.jpg",
    "./img/certs/Cert5.jpg",
    "./img/certs/Cert6.jpg",
    "./img/certs/Cert7.jpg",
    "./img/certs/Cert8.jpg",
    "./img/certs/Cert9.png",
  ];

  return (
    <section
      section
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
          className="w-auto viewCerts h-auto min-h-full block leading-[0] box-border p-0 m-auto"
          src={tempImgSrc}
        />
      </div>

      <p className="mt-2 text-xl font-bold text-green-500 dark:text-white">
        Certificates
      </p>
      <div className="columns-1 sm:columns-2 lg:columns-3 md:py-5 gap-4">
        {images.map((src, index) => (
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

export default Certificates