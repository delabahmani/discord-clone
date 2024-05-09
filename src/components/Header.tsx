import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex justify-center z-20">
      <div className="absolute mx-auto flex h-[90px] justify-between  pb-7 pt-3 xl:w-[1280px]">
        <div>
          <Link href="/">
            <Image
              src="/assets/discord-logo.svg"
              alt="discord logo"
              width={150}
              height={200}
              className="logo border-2 py-2 lg:h-[60px] lg:w-[130px]"
            />
          </Link>
        </div>
        <div className="flex justify-center">
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
        <div className="">
          <button className="rounded-full border-2 bg-white px-[1rem] py-2 hover:text-[#7289da] hover:shadow-xl ">
            <a
              href="https://discord.com/channels/@me"
              className="arial font-bold"
            >
              Open Discord
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
