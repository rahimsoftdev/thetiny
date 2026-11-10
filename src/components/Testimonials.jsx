import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Nadim Majid",
    role: "User",
    rating: 5,
    comment: "A good platform for Link management.",
  },
  {
    id: 2,
    name: "Sadia Rahman",
    role: "Digital Marketer",
    rating: 5,
    comment:
      "The analytics are simple and clear. I can track every campaign link without any hassle.",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Developer",
    rating: 5,
    comment:
      "Fast redirects, clean API and QR codes in seconds. Exactly what my projects needed.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F8F9FC] pt-10 md:pt-12 xl:pt-section">
      <div className="mx-auto max-w-main px-4 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-subtext/70 sm:text-sm">
            Testimonials
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:leading-tight">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex h-full flex-col rounded-3xl border border-[#EDEFF2] bg-white p-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg sm:p-6 lg:p-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} className="text-base text-primary sm:text-lg" />
                ))}
              </div>

              {/* Comment */}
              <p className="mt-4 text-sm leading-6 text-gray-900 sm:text-base sm:leading-7">
                &quot;{item.comment}&quot;
              </p>

              {/* User */}
              <div className="mt-auto pt-6">
                <h4 className="text-sm font-bold text-gray-900 sm:text-base">
                  {item.name}
                </h4>
                <p className="text-sm text-subtext sm:text-base">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;