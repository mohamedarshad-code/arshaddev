import { pricingPlans } from "@/data/site";

type PricingGridProps = {
  compact?: boolean;
};

export default function PricingGrid({ compact = false }: PricingGridProps) {
  const plans = compact ? pricingPlans.slice(0, 3) : pricingPlans;

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {plans.map((plan) => (
        <article key={plan.id} className="rounded-2xl border border-white/10 bg-slate-900/65 p-5 shadow-lg shadow-black/15">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Plan {plan.id}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{plan.name}</h3>
          <p className="mt-1 text-lg font-semibold text-amber-300">{plan.priceRange}</p>
          <p className="mt-3 text-sm text-slate-300">Best for: {plan.bestFor}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>Delivery: {plan.delivery}</li>
            <li>Revisions: {plan.revisions}</li>
          </ul>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            className="mt-5 inline-block rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Choose Plan
          </a>
        </article>
      ))}
    </div>
  );
}
