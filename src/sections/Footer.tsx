import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Whatsapp",
    href: "https://wa.me/qr/F4XVVMH4ZKWDG1",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/the_s.eyram?igsh=d21laTZ2bHRmMiFp&utm_source=qr",
  },
  {
    title: "X",
    href: "https://x.com/sarxttech?s=21",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/channel/UCPIa_YaAoTMLZKs9592G-VA",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All Rights Reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
