import React from "react";

type Props = {
  href: string;
  title: string;
};

const NavbarItem = ({ href, title }: Props) => {
  return (
    <a
      href={href}
      className="arial mx-[10px] lg:p-[10px] font-serif text-[16px] font-semibold text-white hover:underline"
    >
      {title}
    </a>
  );
};

export default NavbarItem;
