import React from "react";
import Image from "next/image";
import HeroContent from "./components/main/sub/HeroContent";  
import Hero from "./components/main/Hero";

export default function Home() {
  return (
    <main className="h-full w-full" >
      <div className="flex flex-col h-[1140px] gap-20 " >
           <Hero/>
           <HeroContent/>
      </div>
   
   </main>
  );
}
