import React from "react";
import Image from "next/image";
import card1Svg from "/public/assets/card-1.svg";
import card2Svg from "/public/assets/card-2.svg";
import card3Svg from "/public/assets/card-3.svg";

type Props = {
  title: string;
  content: string;
  src: string;
  bgColor?: string;
  direction?: string;
};

const InfoCard = ({ title, content, src, bgColor = "white", direction = "flex-row" }: Props) => {
  let imageSrc;
  switch (src) {
    case "/assets/card-1.svg":
      imageSrc = card1Svg;
      break;
    case "/assets/card-2.svg":
      imageSrc = card2Svg;
      break;
    case "/assets/card-3.svg":
      imageSrc = card3Svg;
      break;
    default:
      imageSrc = src;
  }
  return (
    <div className={`bg-${bgColor}`}>
    <div className={`mx-auto grid grid-cols-2 content-center justify-center xl:w-[1280px] xl:pb-[130px] xl:pt-[120px] ${direction}`}>
      <div className="flex justify-center">
        <Image
          src={imageSrc}
          alt="image of discord channels"
          width={1000}
          height={1000}
          className="xl:w-[92%] "
        />
      </div>
      <div className="flex flex-col justify-center  px-24 leading-[50px] xl:w-full">
        <h1 className="arial mb-6 font-bold text-[#23272A] xl:text-[45px]">
          {title}
        </h1>
        <p className="arial text-[#23272A] xl:w-[380px] xl:text-lg">
          {content}
        </p>
      </div>
    </div>
    </div>
  );
};

export default InfoCard;
