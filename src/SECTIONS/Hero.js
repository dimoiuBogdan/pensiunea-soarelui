import React from "react";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="h-screen w-full text-center flex items-center justify-between flex-col"
    >
      <div></div>
      <div>
        <h1 className="text-white text-6xl">Pensiunea Soarelui</h1>
        <h2 className="mt-4 text-gray-200 text-3xl tracking-wide">
          un moment de <span className="text-blue-300">confort</span> si{" "}
          <span className="text-blue-300">relaxare</span> pentru oricine
        </h2>
      </div>
      <div className="hidden items-center justify-evenly md:flex text-white text-left w-full lg:text-3xl text-2xl">
        <div className="lg:w-1/4 rounded-t-md p-2 px-5 shadow-md bg-black bg-opacity-30 border-blue-200 border-opacity-50 border-2 border-b-0">
          <h2 className="font-medium">11 Camere</h2>
          <p className="lg:text-2xl text-xl text-blue-50">+ Mansarda</p>
        </div>
        <div className="lg:w-1/4 rounded-t-md p-2 px-5 shadow-md bg-black bg-opacity-30 border-blue-200 border-opacity-50 border-2 border-b-0">
          <h2 className="font-medium">Sala de Sedinte</h2>
          <p className="lg:text-2xl text-xl text-blue-50">30 Locuri</p>
        </div>
        <div className="lg:w-1/4 rounded-t-md p-2 px-5 shadow-md bg-black bg-opacity-30 border-blue-200 border-opacity-50 border-2 border-b-0">
          <h2 className="font-medium">Relaxare</h2>
          <p className="lg:text-2xl text-xl text-blue-50">
            Piscina | Sauna | Drumetii
          </p>
        </div>
      </div>
      <div className="flex md:hidden"></div>
    </div>
  );
};

export default Hero;
