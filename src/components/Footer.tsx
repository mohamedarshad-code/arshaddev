import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900/60 text-slate-400 border-t border-white/10 mt-20 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo + Copyright */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <div className="w-8 h-8 bg-cyan-400 text-black flex items-center justify-center rounded-md font-bold">
                A
              </div>
              Arshad
            </div>
            <p className="text-sm">
              &copy; copyright {new Date().getFullYear()} Mohamed Arshad. All rights reserved.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services & Pricing", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-cyan-400 transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                <a href={profile.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "UI/UX Design", "SEO Optimization"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="hover:text-cyan-400 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom watermark text */}
      <div className="relative overflow-hidden pointer-events-none pb-4">
        <h1 className="text-[100px] md:text-[180px] font-extrabold text-white/5 text-center select-none leading-none tracking-tighter">
          ARSHAD
        </h1>
      </div>
    </footer>
  );
}
