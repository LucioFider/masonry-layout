import React from "react";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
} from "../assets";

const Masonry = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">
        Masonry Layout
      </h1>
      <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
        <div className="bg-gray-200 break-inside-avoid">
          <img src={pic1} alt="pic01" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={pic2} alt="pic02" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={pic3} alt="pic03" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={pic4} alt="pic04" className="w-96 h-96" />
        </div>
      </div>
    </div>
  );
};

export default Masonry;
