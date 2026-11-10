// import PricingCard from "./ui/PricingCard";

// import PricingCard from "./ui/PricingCard";
import PricingCard from "./ui/Pricingcard";

const plans = [
  {
    id: 1,
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "Great for individuals and casual use.",
    features: [
      "Unlimited link shortening",
      "Basic click counter",
      "HTTPS security",
      "QR code (basic)",
      "Cross-device support",
    ],
    buttonText: "Get Started Free",
    highlighted: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "$9",
    period: "/per month",
    description: "For creators, marketers, and power users.",
    features: [
      "Everything in Free",
      "Custom short links",
      "Advanced analytics",
      "UTM builder",
      "QR code (custom)",
      "Browser extension",
      "Priority support",
    ],
    buttonText: "Start 14-Day Trial",
    highlighted: true,
  },
  {
    id: 3,
    name: "Business",
    price: "$29",
    period: "/per month",
    description: "For teams and growing companies.",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Developer API",
      "Bulk link creation",
      "White-label domain",
      "App integrations",
      "Dedicated support",
    ],
    buttonText: "Subscribe Now",
    highlighted: false,
  },
];

const Pricing = () => {
  // Simulated request — replace with your real API call
  const handleSelectPlan = (planName) =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${planName} plan request successful`);
        resolve();
      }, 1200);
    });

  return (
    <section className="w-full bg-white py-10 md:py-12 xl:py-section">
      <div className="mx-auto max-w-main px-4 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-subtext/70">
            Pricing
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 text-sm text-subtext sm:text-base">
            No hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-8 grid max-w-[1000px] grid-cols-1 justify-items-center gap-5 sm:mt-10 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="w-full max-w-[420px] lg:max-w-none">
              <PricingCard
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                highlighted={plan.highlighted}
                onSelect={handleSelectPlan}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
