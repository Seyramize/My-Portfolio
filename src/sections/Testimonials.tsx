import memojiAvatar1 from "@/assets/images/asabir.png";
import memojiAvatar2 from "@/assets/images/charles.png";
import memojiAvatar3 from "@/assets/images/roger.png";
import memojiAvatar4 from "@/assets/images/jpm.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Mr. Asabir",
    position: "Chief Executive Officer @ TAAM",
    text: "Mr.Alifo played a pivotal role in establishing our organization's network infrastructure, turning it into a robust foundation for our operations. His meticulous approach and deep understanding of our specific needs were exceptional. We are extremely satisfied with the outcome!",
    avatar: memojiAvatar1,
  },
  {
    name: "Ing. Charles",
    position: "Chief Executive Officer @ ALTO Systems",
    text: "Working with Seyram was a pleasure. His expertise in mechanical, electrical, and plumbing systems brought our project to life in ways we hadn’t envisioned. The overall execution and quality of work exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Ing. Roger",
    position: "Low Current Engineer @ UESD",
    text: "Seyram's ability to design efficient and reliable electrical systems is unmatched. Since implementing his work, our operations have seen a significant improvement in performance and efficiency. We couldn't be more satisfied.",
    avatar: memojiAvatar3,
  },
  {
    name: "Mr. John",
    position: "Founder @ NYCJPM",
    text: "Seyram is a true software and app development wizard. His insight on how he details how he worked on a complex product and transformed it into an intuitive and engaging application. We're already seeing positive feedback from our users.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="Don't just take my word for it. See what my clients have to say about my work."/>

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] outline-dashed after:outline-2 after:outline after:-outline-offset-2">
            {[... new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
               {testimonials.map(testimonial => (
                <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="mt-4md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
                ))}
              </Fragment>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};
