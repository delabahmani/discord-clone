import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

const Header = () => {
  return (
    <header className="bg-[#404EED] flex justify-between pb-7 pt-3 h-[90px]">
      <div className="mx-20">
        <Image
          src="/assets/discord-logo.svg"
          alt="discord logo"
          width={150}
          height={200}
          className="logo border-2 py-2"
        />
      </div>
      <div className="flex border-2 justify-center">
        <NavbarItem href="https://discord.com/download" title="Download" />
        <NavbarItem href="https://discord.com/nitro" title="Nitro" />
        <NavbarItem href="https://discord.com/servers" title="Discover" />
        <NavbarItem href="https://discord.com/safety" title="Safety" />
        <NavbarItem
          href="https://support.discord.com/hc/en-us"
          title="Support"
        />
        <NavbarItem href="https://discord.com/blog" title="Blog" />
        <NavbarItem href="https://discord.com/careers" title="Careers" />
      </div>
      <div className="mx-20">
        <button className="bg-white rounded-full hover:text-[#7289da] border-2 px-[1rem] py-2  hover:shadow-xl">
          <a
            href="https://discord.com/channels/@me"
            className="arial font-bold"
          >
            Open Discord
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
