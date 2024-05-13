import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <main className="">
      <div>
        <Header />
        <Hero />
        <InfoCard
          title="Create an invite-only place where you belong"
          content="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
          src="/assets/card-1.svg"
          bgColor="white"
          order="order-first"
        />
        <InfoCard
          title="Where hanging out is easy"
          content="Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call."
          src="/assets/card-2.svg"
          bgColor="bg-[#F6F6F6]"
          order="order-last"
        />
        <InfoCard
          title="From few to a fandom"
          content="Get any community running with a moderation tools and custom member access. Give member special powers, set up private channels, and more."
          src="/assets/card-3.svg"
          bgColor="white"
          order=""
        />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
