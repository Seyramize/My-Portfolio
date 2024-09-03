"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import ArduinoIcon from "@/assets/icons/Arduino.svg";
import DjangoIcon from "@/assets/icons/Django.svg";
import GitIcon from "@/assets/icons/Git.svg";
import AndriodstudioIcon from "@/assets/icons/Android Studio.svg";
import DockerIcon from "@/assets/icons/Docker.svg";
import UnityIcon from "@/assets/icons/Unity.svg";
import NetcoreIcon from "@/assets/icons/NET core.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NpmIcon from "@/assets/icons/NPM.svg";
import NextjsIcon from "@/assets/icons/Next.js.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CsharpIcon from "@/assets/icons/C# (CSharp).svg";
import MatlabIcon from "@/assets/icons/MATLAB.svg";
import JiraIcon from "@/assets/icons/Jira.svg";
import LivewireIcon from "@/assets/icons/Livewire.svg";
import PuttyIcon from "@/assets/icons/PuTTY.svg";
import WordpressIcon from "@/assets/icons/WordPress.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/grin-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems = [
  {
    title: "C#",
    iconType: CsharpIcon ,
  },
  {
    title: "Unity",
    iconType: UnityIcon ,
  },
  {
    title: "Git",
    iconType: GitIcon ,
  },
  {
    title: "Andriod Studio",
    iconType: AndriodstudioIcon ,
  },
  {
    title: "Wordpress",
    iconType: WordpressIcon ,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "React",
    iconType: ReactIcon ,
  },
  {
    title: "NetCore",
    iconType: NetcoreIcon  ,
  },
  {
    title: "MATLAB",
    iconType: MatlabIcon ,
  },
  {
    title: "Arduino",
    iconType: ArduinoIcon ,
  },
  {
    title: "Npm",
    iconType: NpmIcon ,
  },
  {
    title: "Github",
    iconType: GithubIcon ,
  },
  {
    title: "Livewire",
    iconType: LivewireIcon ,
  },
  {
    title: "Putty",
    iconType: PuttyIcon,
  },
  {
    title: "Jira",
    iconType: JiraIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Django",
    iconType: DjangoIcon,
  },
]

const hobbies = [
  {
    title: "Basketball",
    emoji: "🏀",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Sightseeing",
    emoji: "✈️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Partying",
    emoji: "🥳",
    left: "45%",
    top: "70%",
  }
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
  <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do and what inspires me"/>
      <div className="mt-20 flex flex-col gap-8">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-8 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1 after:outline-2 after:outline after:-outline-offset-2">
            <CardHeader title="My Reads" description="Explore the books shaping my perspective" />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>

          <Card className="h-[320px]  md:col-span-3 lg:col-span-2 after:outline-2 after:outline after:-outline-offset-2">
            <CardHeader title="My ToolBox" description="Explore the technologies and tools I use to craft exceptional digital and physical experiences." className="" />

            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:45s]"/>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 after:outline-2 after:outline after:-outline-offset-2">
            <CardHeader title="Beyond The Code" description="Explore my interests and hobbies beyond the work horizon." className="px-6 py-6"/>
          
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map(hobby => (
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-tr from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 after:outline-2 after:outline after:-outline-offset-2">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
  );
};
