import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import MyImage from "../components/assets/rtwd_img.jpeg";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi! Welcome to my portfolio site!",
      "I'm Ron The Web Dev",
      "Owner of CreatiqueMedia LLC",
      "I'm a Web Developer that LOVES to code!",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "AngularJS",
      "NextJS",
      "ReactJS",
      "VueJS",
      "Bootstrap",
      "Tailwind CSS",
      "WordPress",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mt-40ya0">
      <Image
        src={MyImage}
        alt="Picture of the author"
        width="280px"
        height="280px"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-widest">Web Developer</h2>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      </div>
    </div>
  );
}
