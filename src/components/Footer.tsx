import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#23272A] text-white xl:h-[700px] xl:w-[100%] xl:pt-[80px] ">
      <div className="arial mx-auto flex justify-between xl:w-[1180px] gap-5 xl:text-[15px]">
        <div className="flex flex-col gap-1 xl:w-1/3 xl:h-[120px]">
          <p className="flex items-center xl:mb-4 xl:text-[14px]">
            <Image
              src="/assets/flag.png"
              width={1000}
              height={1000}
              alt="american flag"
              className="flex mr-[10px] xl:h-[16px] xl:w-[24px]"
            />
            English
          </p>
          <div className="flex justify-start xl:mt-7 space-x-5 max-w-fit">
            <a href="https://twitter.com/discord">
              <img src="/assets/x.svg" alt="X logo" />
            </a>
            <a href="https://www.instagram.com/discord/">
              <img src="/assets/instagram.svg" alt="discord logo" />
            </a>
            <a href="https://www.facebook.com/discord/">
              <img src="/assets/facebook.svg" alt="facebook logo" />
            </a>
            <a href="https://www.youtube.com/discord">
              <img src="/assets/youtube.svg" alt="youtube logo" />
            </a>
            <a href="https://www.tiktok.com/@discord">
              <img src="/assets/tiktok.svg" alt="tiktok logo" />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-3 w-1/6 h-fit">
          <p className="text-[#5865F2BD] xl:mb-4">Product</p>
          <a href="https://discord.com/download">Download</a>
          <a href="https://discord.com/nitro">Nitro</a>
          <a href="https://discordstatus.com/">Status</a>
          <a href="https://discord.com/application-directory">App Directory</a>
          <a href="https://discord.com/mobile">New Mobile Experience</a>
        </div>
        <div className="flex flex-col space-y-3 w-1/6 h-fit">
          <p className="text-[#5865F2BD] xl:mb-4">Company</p>
          <a href="https://discord.com/company">About</a>
          <a href="https://discord.com/careers">Jobs</a>
          <a href="https://discord.com/branding">Brand</a>
          <a href="https://discord.com/newsroom">Newsroom</a>
        </div>
        <div className="flex flex-col space-y-3 w-1/6 h-fit">
          <p className="text-[#5865F2BD] xl:mb-4">Resources</p>
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
        <div className="flex flex-col space-y-3 w-1/6 h-fit">
          <p className="text-[#5865F2BD] xl:mb-4">Policies</p>
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
      <div className="mx-auto xl:w-[1180px]">
        <div className="flex justify-between mt-7 border-t-[1px] pt-8 border-[#5865f2]">
          <Image
            src="/assets/discord-logo.svg"
            width={1000}
            height={1000}
            alt="discord logo"
            className="logo xl:h-[35px] xl:w-[125px]"
          />
          <button
            className="flex items-center justify-center rounded-full border-2 border-[#5865F2] bg-[#5865F2] font-semibold text-white transition-all duration-300
          ease-in-out hover:shadow-xl xl:h-[39px] xl:w-[115px] xl:text-[13px] hover:bg-[#8891f2] hover:border-[#8891f2]"
          >
            <a href="https://discord.com/channels/@me"></a>Open Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
