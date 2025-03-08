import React from "react";
import { TextHero } from "./TextHero";
import Image from "next/image";
import Link from "next/link";


function Hero() {
  return (
    <div className="flex items-center justify-center h-screen bg-[url(/img/hero-img.png)] bg-no-repeat w-full bg-cover relative rounded-3xl mb-16">
      <Link
        href="#"
        className="bg-gray-300 w-12 h-12 rounded-full absolute -bottom-5 z-10 ring-4 ring-white flex items-center justify-center hover:translate-y-1 hover:rotate-360 transition-all duration-500"
      >
        <Image
          src="img/arrow-down.svg"
          width={24}
          height={24}
          alt="arrow-down"
        />
      </Link>
      <div className="absolute inset-0 bg-black/75 rounded-3xl "></div>
      <TextHero />

    </div>
  );
}

export default Hero;
