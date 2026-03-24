import PricingGrid from "@/components/PricingGrid";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Pricing | Mohamed Arshad",
  description: "Six clear website pricing plans in INR with delivery timeline and revisions.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle
        eyebrow="Pricing"
        title="Transparent packages with clear scope"
        description="Choose a plan based on your business stage. Add-ons and maintenance can be included as needed."
      />
      <PricingGrid />
      <section className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-300">
        <p>Payment milestones: 50 percent advance and 50 percent before final handover.</p>
        <p className="mt-2">For custom app projects: 40 percent start, 40 percent after main features, 20 percent on final delivery.</p>
      </section>
    </main>
  );
}
