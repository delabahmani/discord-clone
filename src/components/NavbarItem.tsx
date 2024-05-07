import React from "react";

type Props = {
  href: string;
  title: string;
};

const NavbarItem = ({ href, title }: Props) => {
  return (
    <a
      href={href}
      className="font-serif arial font-semibold text-white text-[16px] mx-[10px] p-[10px] hover:underline"
    >
      {title}
    </a>
  );
};

export default NavbarItem;
