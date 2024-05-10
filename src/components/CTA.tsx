import React from "react";
import Image from "next/image";
import { TbDownload } from "react-icons/tb"

const CTA = () => {
  return (
    <div>
      <div>
        <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
        <p>
          Low-latency voice and video feels like you're in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <div>
        <Image
          src="/assets/cta-img.svg"
          alt="example snippet of a discord group call"
          width={1000}
          height={1000}
          className=""
        />
      </div>
      <div>
        <h2>Ready to start your journey?</h2>
        <button
          className=" flex items-center justify-center rounded-full border-2 border-white bg-white px-[1rem] font-medium transition-all duration-300 ease-in-out hover:text-[#404EED] hover:shadow-xl
          xl:h-[55px] xl:w-[300px] xl:text-lg"
        >
          <TbDownload className="mr-[10px] xl:h-[24px] xl:w-[24px]" />
          Download for Windows
        </button>
      </div>
    </div>
  );
};

export default CTA;
