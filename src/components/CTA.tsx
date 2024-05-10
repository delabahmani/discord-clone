import React from "react";
import Image from "next/image";
import { TbDownload } from "react-icons/tb";

const CTA = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="flex flex-col justify-center text-center xl:pt-32">
        <h1 className="nordblack text-[#23272A] xl:text-[40px]">
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <p className=" arial mx-auto font-normal text-[#23272A] xl:w-[1000px] xl:pt-3 xl:text-[18px]">
          Low-latency voice and video feels like you're in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <div className="flex justify-center border-2 border-black">
        <Image
          src="/assets/cta-img.svg"
          alt="example snippet of a discord group call"
          width={1000}
          height={1000}
          className="xl:h-[700px] xl:w-[1180px]"
        />
      </div>
      <div className="relative mx-auto flex flex-col items-center justify-center border-2 border-black xl:h-[350px] xl:w-[980px] gap-8">
        <Image
          src="/assets/cta-bg.svg"
          alt="4 multicolored sparkles"
          width={1000}
          height={1000}
          className="absolute z-0 mx-auto xl:w-full left-0 top-16"
        />
        <h2 className="gintonormal text-center xl:text-[32px]">
          Ready to start your journey?
        </h2>
        <button
          className=" z-10 mx-auto flex items-center justify-center rounded-full border-2 border-[#5865F2] bg-[#5865F2] font-medium text-white transition-all duration-300
          ease-in-out hover:shadow-xl xl:h-[55px] xl:w-[300px] xl:text-lg "
        >
          <TbDownload className="mr-[10px] xl:h-[24px] xl:w-[24px]" />
          Download for Windows
        </button>
      </div>
    </div>
  );
};

export default CTA;
