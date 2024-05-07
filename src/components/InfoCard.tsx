import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  content: string;
  src: string;
};

import card1Svg from "/public/assets/card-1.svg"
import card2Svg from "/public/assets/card-2.svg"
import card3Svg from "/public/assets/card-3.svg"


const InfoCard = ({ title, content, src }: Props) => {
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
    <div className="grid grid-rows-2 xl:pb-[130px] xl:pt-[120px]">
      <div className="">
        <Image
          src={imageSrc}
          alt="image of discord channels"
          width={200}
          height={300}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
