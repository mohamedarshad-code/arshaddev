import SectionTitle from "@/components/SectionTitle";
import BentoSkills from "@/components/BentoSkills";
import { profile } from "@/data/site";

export const metadata = {
  title: "About | Mohamed Arshad",
  description: "About Mohamed Arshad, a full-stack web developer from Coimbatore, Tamil Nadu.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 space-y-12">
      <SectionTitle
        eyebrow="About"
        title="19-year-old builder focused on practical websites"
        description="I am an EEE first-year student and full-stack developer from Coimbatore, building modern websites for real-world client needs."
      />
      
      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-slate-300 shadow-xl leading-relaxed text-lg">
        <p>
          {profile.fullBio}
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-purple-500">#</span> Technical Skills
        </h3>
        <BentoSkills />
      </section>
    </main>
  );
}
