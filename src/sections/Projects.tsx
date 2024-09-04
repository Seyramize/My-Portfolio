import vaalLanding from "@/assets/images/vaal.png";
import symliqLanding from "@/assets/images/symliq.png";
import emyzeraLanding from "@/assets/images/emyzera.png";
import uesdLanding from "@/assets/images/uesd.png";
import techmartLanding from "@/assets/images/techmartgh.png";
import taamLanding from "@/assets/images/taam.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "The Asabir Asset Management",
    year: "2024",
    title: "IT Infrastructure Contractor",
    results: [
      { title: "Configuring Network adapters" },
      { title: "Insatlled AP's and routers" },
      { title: "Running diagnostics on existing network infrastructure" },
    ],
    link: "https://taam.world/",
    image: taamLanding,
  },
  {
    company: "NYCJPM",
    year: "2024",
    title: "Software Developer",
    results: [
      { title: "Developing apps" },
      { title: "Developing the company's website" },
      { title: "Creating websites for new clients" },
    ],
    link: "https://techmartgh.com",
    image: techmartLanding,
  },
  {
    company: "VAAL Real Estate",
    year: "2023",
    title: "M.E.P Supervising Engineer",
    results: [
      { title: "Supervising Electrical works on the site" },
      { title: "Supervising Plumbling works on the site" },
      { title: "Supervising HVAC works on the site" },
    ],
    link: "https://vaal.com.gh",
    image: vaalLanding,
  },
  {
    company: "UESD",
    year: "2024",
    title: "Electrical Engineer",
    results: [
      { title: "Supervising Electrical Works on the site" },
      { title: "Simultaneously managing electrical teams on site" },
      { title: "Relaying site plans to the technicians on site" },
    ],
    link: "https://thebftonline.com/2022/05/25/prez-cuts-sod-for-construction-of-ueas-at-bunso/",
    image: uesdLanding,
  },
  {
    company: "Symliq Developers",
    year: "2022",
    title: "Web/Software Developer",
    results: [
      { title: "Developed and managed websites for clients" },
      { title: "Helped with web app documentations" },
      { title: "Gave technical advice to clients" },
    ],
    link: "http://www.symliq.com/",
    image: symliqLanding,
  },
  {
    company: "Emyzera Enterprise",
    year: "2022",
    title: "Chief Operations Manager",
    results: [
      { title: "Managed the digital presence of the facility" },
      { title: "Created Ads for produts on sale" },
      { title: "Made use of SEO's" },
    ],
    link: "#",
    image: emyzeraLanding,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader 
        eyebrow="Real-world Results"
        title="Featured Projects" 
        description="See how I transformed concepts into engaging digital experiences"
      />
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project, ProjectIndex) => (
          <Card 
            key={project.title} 
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl after:outline-2 after:outline after:-outline-offset-2 sticky" style={{
              top: `calc(64px + ${ ProjectIndex * 40}px`
              }}>
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
