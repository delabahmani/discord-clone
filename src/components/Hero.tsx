import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#404EED] min-w-full min-h-full">
      <div className="hero-section z-0">
        <div className="justify-center mx-auto text-center z-1">
          <h1 className="paytone text-white text-5xl">IMAGINE A PLACE...</h1>
          <span className="p-10 justify-center">
            <p className="arial font-medium text-white py-5 xl:w-[700px]">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
          </span>
          <div className="flex justify-center">
            <button className="bg-white rounded-full border-2 px-[1rem] py-2 hover:text-[#7289da] hover:shadow-xl">Download for Windows</button>
            <button>Open Discord in your browser</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
