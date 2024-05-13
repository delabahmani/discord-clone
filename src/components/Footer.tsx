import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-[#23272A] text-white xl:pt-[80px] xl:h-[675px] xl:w-[100%]">
      <div className="arial grid grid-cols-5 xl:w-[1000px] justify-center mx-auto xl:pb-[64px] xl:text-[16px]">
      <div className="flex align-middle gap-1 ">
        <p className="flex xl:text-[14px]">
          <Image
            src="/assets/flag.png"
            width={1000}
            height={1000}
            alt="american flag"
            className=" xl:h-[16px] xl:w-[24px] mr-[10px]"
          />
          English
        </p>
      </div>
      <div className="flex flex-col ">
        <p className="text-[#5865F2BD] xl:mb-3">Product</p>
        <a href="https://discord.com/download">Download</a>
        <a href="https://discord.com/nitro">Nitro</a>
        <a href="https://discordstatus.com/">Status</a>
        <a href="https://discord.com/application-directory">App Directory</a>
        <a href="https://discord.com/mobile">New Mobile Experience</a>
      </div>
      <div className="flex flex-col ">
        <p className="text-[#5865F2BD]">Company</p>
        <a href="https://discord.com/company">About</a>
        <a href="https://discord.com/careers">Jobs</a>
        <a href="https://discord.com/branding">Brand</a>
        <a href="https://discord.com/newsroom">Newsroom</a>
      </div>
      <div className="flex flex-col ">
        <p className="text-[#5865F2BD]">Resources</p>
        <a href="https://discord.com/college">College</a>
        <a href="https://support.discord.com/hc">Support</a>
        <a href="https://discord.com/safety">Safety</a>
        <a href="https://discord.com/blog">Blog</a>
        <a href="https://support.discord.com/hc/en-us/community/topics">
          Feedback
        </a>
        <a href="https://discord.com/streamkit">StreamKit</a>
        <a href="https://discord.com/creators">Creators</a>
        <a href="https://discord.com/community">Community</a>
        <a href="https://discord.com/build">Developers</a>
        <a href="https://discord.com/gaming">Gaming</a>
        <a href="https://discord.com/quests">Quests</a>
        <a href="https://discordmerch.com/evergreenfooter">
          Official 3rd Party Merch
        </a>
      </div>
      <div className="flex flex-col ">
        <p className="text-[#5865F2BD]">Policies</p>
        <a href="https://discord.com/terms">Terms</a>
        <a href="https://discord.com/privacy">Privacy</a>
        <a href="https://discord.com/#">Cookie Settings</a>
        <a href="https://discord.com/guidelines">Guidelines</a>
        <a href="https://discord.com/acknowledgements">Acknowledgements</a>
        <a href="https://discord.com/licenses">Licenses</a>
        <a href="https://discord.com/company-information">
          Company Information
        </a>
      </div>
      </div>
      <div>
        <hr className="" />
        <Image
          src="/assets/discord-logo.svg"
          width={1000}
          height={1000}
          alt="discord logo"
          className="logo xl:h-[60px] xl:w-[130px] xl:py-2"
        />
        <button>
          <a href="https://discord.com/channels/@me"></a>Open Discord
        </button>
      </div>
    </div>
  );
};

export default Footer;
