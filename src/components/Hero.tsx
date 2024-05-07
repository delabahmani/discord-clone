import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#404EED] min-w-full 2xl:h-[550px] hero-section z-0">
      <div className="justify-center mx-auto text-center z-1">
        <h1 className="paytone text-white 2xl:text-7xl 2xl:pt-24">
          IMAGINE A PLACE...
        </h1>

        <span className="flex p-10 justify-center">
          <p className="arial font-medium text-white py-4 2xl:w-[800px] leading-8 2xl:text-[18px]">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </span>

        <div className="flex justify-center gap-4">
          <button className="bg-white rounded-full border-2 font-medium border-white px-[1rem] py-2 hover:text-[#404EED] hover:shadow-xl transition-all duration-300 ease-in-out">
            Download for Windows
          </button>
          <button className="bg-[#23272A] text-white hover:text-[#7289da]  font-medium rounded-full border-2 border-black px-[1rem] py-2 hover:shadow-xl transition-all duration-300 ease-in-out">
            Open Discord in your browser
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
