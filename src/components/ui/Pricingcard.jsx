import { useState } from "react";
import { FiCheck, FiArrowRight, FiLoader, FiCheckCircle } from "react-icons/fi";

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  highlighted = false,
  onSelect,
}) => {
  // idle | loading | success
  const [status, setStatus] = useState("idle");

  const handleClick = async () => {
    if (status !== "idle") return;

    setStatus("loading");
    try {
      await onSelect?.(name);
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("idle");
    }
  };

  return (
    <div
      className={`flex h-full w-full flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out sm:p-7 ${
        highlighted
          ? "border-primary bg-primary text-white shadow-[0_20px_60px_rgba(91,33,243,0.25)]"
          : "border-[#EDEFF2] bg-white text-gray-900 hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      {/* Plan name */}
      <p
        className={`text-xs font-bold uppercase tracking-[0.12em] ${
          highlighted ? "text-white/80" : "text-subtext"
        }`}
      >
        {name}
      </p>

      {/* Price */}
      <div className="mt-2 flex items-end gap-2">
        <span className="text-4xl font-extrabold leading-none tracking-tight sm:text-[40px]">
          {price}
        </span>
        <span
          className={`pb-0.5 text-xs ${
            highlighted ? "text-white/70" : "text-subtext"
          }`}
        >
          {period}
        </span>
      </div>

      {/* Description */}
      <p
        className={`mt-3 text-sm ${
          highlighted ? "text-white/80" : "text-subtext"
        }`}
      >
        {description}
      </p>

      {/* Features */}
      <ul className="mb-8 mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                highlighted ? "bg-white/20" : "bg-primary/10"
              }`}
            >
              <FiCheck
                className={`text-[11px] ${
                  highlighted ? "text-white" : "text-primary"
                }`}
              />
            </span>
            <span
              className={`text-sm ${
                highlighted ? "text-white" : "text-gray-800"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        type="button"
        onClick={handleClick}
        disabled={status !== "idle"}
        className={`mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed ${
          highlighted
            ? "bg-white text-primary hover:bg-white/90"
            : "bg-primary text-white hover:opacity-90"
        } ${status === "success" ? "!bg-green-500 !text-white" : ""}`}
      >
        {status === "idle" && (
          <>
            {buttonText}
            <FiArrowRight className="text-base" />
          </>
        )}
        {status === "loading" && (
          <>
            <FiLoader className="animate-spin text-base" />
            Processing...
          </>
        )}
        {status === "success" && (
          <>
            <FiCheckCircle className="text-base" />
            Request Successful
          </>
        )}
      </button>
    </div>
  );
};

export default PricingCard;