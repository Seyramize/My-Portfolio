'use client';

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return ( 
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="Contact">
      <div className="container relative">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative">
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{
              backgroundImage: `url(${grainImage.src})`
            }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative">
            <div className="relative">
              <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
              <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let's connect and discuss, I can help you achieve your goals.</p>
            </div>
            <div className="relative">
              <a 
                href="https://wa.me/qr/F4XVVMH4ZKWDG1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <span className="font-semibold">Contact Us</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};