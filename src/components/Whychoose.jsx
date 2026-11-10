import { FiZap, FiBarChart2, FiGlobe, FiLock, FiClock } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";

const features = [
  {
    id: 1,
    icon: FiZap,
    title: "Lightning Fast",
    description:
      "Shorten URLs instantly with our optimized infrastructure",
  },
  {
    id: 2,
    icon: FiBarChart2,
    title: "Detailed Analytics",
    description: "Track clicks, referrers, locations, and devices",
  },
  {
    id: 3,
    icon: FiGlobe,
    title: "Global CDN",
    description: "Fast redirects from anywhere in the world",
  },
  {
    id: 4,
    icon: BsQrCode,
    title: "QR Codes",
    description: "Generate QR codes for any shortened link",
  },
  {
    id: 5,
    icon: FiLock,
    title: "Secure",
    description: "All links are encrypted and malware scanned",
  },
  {
    id: 6,
    icon: FiClock,
    title: "Expiration Control",
    description: "Set expiry dates or click limits",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-[#F8F9FC] py-10 md:py-12 xl:py-section">
      <div className="mx-auto max-w-main px-4 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl md:text-4xl">
            Why Choose Our Platform?
          </h2>
          <p className="mt-3 text-sm text-subtext sm:text-base">
            Everything you need to manage and track your links
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {features.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="rounded-2xl border border-[#EDEFF2] bg-white p-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <Icon className="text-3xl text-primary" />

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-5">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-subtext sm:text-base sm:leading-7">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;