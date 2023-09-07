import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import podcast from "../assets/podcast.jpg";
import community_1 from "../assets/community_1.jpg";
import community_2 from "../assets/community_2.jpg";

const Body = () => {
  return (
    <div className="px-10 pt-32 text-[#222222] max-2xl:pt-16">
      <div className="text-9xl max-2xl:text-6xl font-serif">
        <h1 className="font-semibold ">Create & monetize </h1>
        <span className="font-semibold relative mr-20 ">your p</span>
        <p className=" h-[80px] w-[80px] border-4 border-black border-dotted rounded-full absolute left-[25%] top-[37%] max-2xl:left-[19.6%] max-2xl:top-[30%] max-2xl:h-[75px] max-2xl:w-[75px]">
          <Image
            src={podcast}
            alt="podcast-image"
            className="rounded-full p-1"
          />
        </p>
        <span className="font-semibold">dcast</span>
      </div>
      <div className="mt-10 text-[20px] font-[500] max-2xl:text-[18px]">
        <p className=" font-serif ">
          Distribute your podcast to all the apps, including spotify just using
        </p>
        <p className="  font-serif italic">one tap.</p>
      </div>
      <div className="text-[20px] font-serif font-[500] pl-[84%] max-2xl:text-[18px]">
        <p> Join the fellow content creators.</p>
        <div className="flex items-center">
          <Button className="rounded-3xl bg-[#222222] hover:text-white p-6 px-10 mt-5 max-2xl:p-4 max-2xl:mt-2">
            Join Now!
          </Button>
          <div className=" ml-5 mt-5 max-2xl:mt-2">
            <p className="h-12 w-12 rounded-full  relative z-10">
              <Image
                src={community_1}
                alt="community_1"
                className="rounded-full p-[2px]"
              />
            </p>
            <p className="h-12 w-12 rounded-full right-[94px] bottom-[33%] absolute z-1 max-2xl:bottom-[25.1%] max-2xl:right-[32px]">
              <Image
                src={community_2}
                alt="community_2"
                className="rounded-full p-[2px] "
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
