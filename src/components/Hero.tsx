import Image from "next/image";
import React from "react";
import { TbDownload } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="hero-section relative z-0 min-w-full bg-[#404EED] xl:h-[650px]">
      <div className="z-1 mx-auto justify-center text-center xl:pt-14">
        <h1 className="nordblack relative top-10 text-white 2xl:pt-24 2xl:text-[56px]">
          IMAGINE A PLACE...
        </h1>

        <span className="flex justify-center p-9">
          <p className="arial font-normal leading-8 text-white xl:mt-10 2xl:w-[785px] 2xl:text-[18px]">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </span>

        <div className="flex justify-center gap-5">
          <button
            className=" flex items-center justify-center rounded-full border-2 border-white bg-white px-[1rem] font-medium transition-all duration-300 ease-in-out hover:text-[#404EED] hover:shadow-xl
          xl:h-[55px] xl:w-[300px] xl:text-lg z-10"
          >
            <TbDownload className="mr-[10px] xl:h-[24px] xl:w-[24px]" />
            Download for Windows
          </button>
          <button className="rounded-full border-2 border-black  bg-[#23272A] px-[1rem] font-medium text-white transition-all duration-300 ease-in-out hover:text-[#7289da] hover:shadow-xl xl:h-[55px] xl:w-[310px] xl:text-lg z-10">
            Open Discord in your browser
          </button>
          <div className="absolute bottom-0 flex w-full justify-between ">
            <Image
              src="/assets/hero-left.svg"
              alt=""
              width={1000}
              height={1000}
              priority
              className="relative right-[95px] xl:bottom-[-11.4px] xl:w-[700px]"
            />
            <Image
              src="/assets/hero-right.svg"
              alt=""
              width={1000}
              height={1000}
              priority
              className="relative left-[95px] w-[650px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//   background-image: url(/assets/hero-left.svg), url(/assets/hero-right.svg),
// url(/assets/clouds.svg);

export default Hero;
