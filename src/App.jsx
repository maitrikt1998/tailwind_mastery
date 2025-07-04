import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import BannerImg from "./assets/young_boy.png";
import OurTeam from "./assets/our_team.png";
import HeroImg from "./assets/boy_sitting_chair.png";
import { Footer } from "./components/Footer/Footer";
import { Mission_services } from "./components/Services/Mission_services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero
        reverse={false}
        image={HeroImg}
        text="Get an amazing logo for your startup in 60 seconds"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio consequuntur nisi vero dolores eaque cupiditate culpa recusandae blanditiis, facere aperiam iure architecto atque veritatis aut reprehenderit ipsam, a ab ex."
      />
      <Services />
      <Hero
        reverse={true}
        image={BannerImg}
        text="From concept to iconic mark—no design skills required"
        desc="Drag, drop, and customize. In three simple steps you’ll have a logo that captures your story, resonates with customers, and scales across every platform."
      />
      <Mission_services />
      <Hero
        reverse={false}
        image={OurTeam}
        text="Meet the creatives who make the magic happen"
        desc="We’re a passionate crew of designers and developers committed to turning bold ideas into beautiful brands—ready to collaborate and elevate your vision."
      />
      <Footer />
    </div>
  );
};

export default App;
