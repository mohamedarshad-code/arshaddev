import HeroCard from "@/components/HeroCard";
import AnimatedButton from "@/components/AnimatedButton";
import BentoSkills from "@/components/BentoSkills";
import { profile } from "@/data/site";
import { MoveRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
      <section id="home" className="flex flex-col-reverse items-center justify-between gap-12 pt-16 lg:flex-row lg:pt-24">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I am <span className="text-cyan-400">{profile.name}</span>
          </h1>
          <h2 className="text-2xl font-semibold text-slate-300 sm:text-3xl">
            {profile.role}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 lg:mx-0">
            {profile.shortBio}
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <AnimatedButton href="/projects" nowText="View Work" playText="Click!" />
            <AnimatedButton href="/contact" nowText="Contact Me" playText="Lets chat" />
          </div>
        </div>
        <div className="flex w-full flex-1 justify-center lg:justify-end">
           <HeroCard name={profile.name} role={profile.role} github={profile.github} linkedin={profile.linkedin} />
        </div>
      </section>

      <section id="about-me" className="mt-32">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-8 space-y-4 text-slate-300">
             <p className="text-lg leading-relaxed text-slate-300">
               {profile.fullBio}
             </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold text-white">Tech Stack</h3>
          <BentoSkills />
        </div>
      </section>
    </main>
  );
}
