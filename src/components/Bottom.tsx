import React from "react";
import bottom_bg from "../assets/bottom_bg.jpg";
import Image from "next/image";
const Bottom = () => {
  return (
    <div className="border-solid border-2 bg-[#C7D8B7] rounded-lg  h-[calc(668px-361px)] w-full mt-2 max-2xl:h-[calc(668px-528px)]">
      <div className="p-10 flex gap-16 justify-center">
        <div>
          <h1 className="text-6xl max-2xl:text-3xl">34K</h1>
          <p className="font-serif ml-3 max-2xl:text-[10px] max-2xl:ml-0">
            Users joined
          </p>
        </div>
        <div>
          <h1 className="text-6xl max-2xl:text-3xl">200</h1>
          <p className="font-serif ml-1 max-2xl:text-[10px] max-2xl:ml-0">
            Teams Created
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
