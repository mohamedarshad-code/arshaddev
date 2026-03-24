import SectionTitle from "@/components/SectionTitle";
import PricingCard from "@/components/PricingCard";
import { pricingPlans } from "@/data/site";

export const metadata = {
  title: "Services | Mohamed Arshad",
  description: "Affordable website development packages for students, freelancers, and small businesses.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle
        eyebrow="Services"
        title="Web services built for fast business growth"
        description="Perfect for students, freelancers, and small businesses who want a modern website without agency-level pricing."
      />

      <section className="mt-8 flex flex-wrap justify-center gap-8">
        {pricingPlans.slice(0, 5).map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </section>

      <section className="mt-16 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h3 className="text-lg font-semibold text-white">Project process</h3>
        <ol className="mt-4 grid gap-3 text-sm text-slate-300 md:grid-cols-4">
          <li>1. Requirement call and scope freeze</li>
          <li>2. Design preview and content setup</li>
          <li>3. Development and feedback rounds</li>
          <li>4. Final testing, payment, and handover</li>
        </ol>
      </section>
    </main>
  );
}
