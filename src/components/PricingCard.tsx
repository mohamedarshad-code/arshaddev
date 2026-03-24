import React from 'react';
import './PricingCard.css';
import { PricingPlan } from '@/data/site';

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div className="card h-full">
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <p className="price">
        {plan.priceRange}
      </p>
      <p className="text-sm text-slate-400 mt-2 mb-4">
        Best for: {plan.bestFor}
      </p>
      <a href={`https://wa.me/919952589394?text=Hi%20Arshad%2C%20I%20am%20interested%20in%20the%20${plan.name}%20plan.`} target="_blank" rel="noreferrer" className="action">
        Get started
      </a>
      <ul className="lists flex-1">
        {plan.features.map((feature, idx) => (
          <li className="list" key={idx}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-medium">
        <p className="mb-1">🚀 Delivery: <span className="text-white">{plan.delivery}</span></p>
        <p>🔄 Revisions: <span className="text-white">{plan.revisions}</span></p>
      </div>
    </div>
  );
}

export default PricingCard;
