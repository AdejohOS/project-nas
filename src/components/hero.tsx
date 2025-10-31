import React from "react";
import Globe from "./globe";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <Globe />
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full p-2  text-gray-300">
        <div className="max-w-7xl mx-auto mb-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 border-t border-gray-700 divide-x divide-gray-700 rounded-lg bg-black/40 backdrop-blur-sm">
          <div className="p-2 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-amber-600">7,810+</h2>
            <span className="text-gray-400">Customers</span>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-amber-600">25+</h2>
            <span className="text-gray-400">States</span>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-amber-600">101+</h2>
            <span className="text-gray-400">Trips</span>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-amber-600">300+</h2>
            <span className="text-gray-400">Routes</span>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-amber-600">5,000+</h2>
            <span className="text-gray-400">Projections</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
