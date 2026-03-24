import AnimatedButton from "@/components/AnimatedButton";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const metadata = {
  title: "Projects | Mohamed Arshad",
  description: "View my complete portfolio and the technologies I used to build them.",
};

export default function ProjectsPage() {
  return (
    <div className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          All <span className="text-cyan-400">Projects</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Here is a detailed view of my complete portfolio, updated with my latest open-source and client work.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <AnimatedButton href="/#home" nowText="Go!" playText="← Back to Home" />
      </div>
    </div>
  );
}
