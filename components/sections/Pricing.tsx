import Link from "next/link";

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PLANS = [
  {
    name: "Free",
    price: "$0",
    note: "forever",
    features: ["10 documents / month", "3 templates", "50 previews / month", "5MB max file size"],
    cta: "Get started",
    ctaVariant: "btn-outline",
    featured: false,
  },
  {
    name: "Pro",
    price: "$XX",
    priceSuffix: "/mo",
    note: "billed monthly",
    features: ["500 documents / month", "50 templates", "API access", "Watermark-free previews"],
    cta: "Get started",
    ctaVariant: "btn-primary",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Business",
    price: "$XX",
    priceSuffix: "/mo",
    note: "billed monthly",
    features: ["5,000 documents / month", "500 templates", "Priority support", "Higher rate limits"],
    cta: "Get started",
    ctaVariant: "btn-outline",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    note: "custom pricing",
    features: ["Unlimited documents", "Unlimited templates", "Dedicated support", "Custom integrations"],
    cta: "Contact sales",
    ctaVariant: "btn-outline",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple plans that grow with you</h2>
          <p>Start free. Upgrade when you need more documents, more templates, or API access.</p>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div className={`price-card${plan.featured ? " featured" : ""}`} key={plan.name}>
              {plan.badge && <span className="price-card-badge">{plan.badge}</span>}
              <h3>{plan.name}</h3>
              <div className="price" style={plan.price === "Contact us" ? { fontSize: 26 } : undefined}>
                {plan.price}
                {plan.priceSuffix && <span>{plan.priceSuffix}</span>}
              </div>
              <div className="price-note">{plan.note}</div>
              <ul className="price-list">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    {CHECK}
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#" className={`btn ${plan.ctaVariant}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="pricing-footnote">
          All plans include unlimited team members. Prices shown are placeholders — update before publishing.
        </p>
      </div>
    </section>
  );
}
