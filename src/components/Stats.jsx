const stats = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

const Stats = () => {
  return (
    <section className="w-full bg-primary py-10">
      <div className="mx-auto max-w-main px-4 lg:px-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-center lg:grid-cols-4 lg:gap-x-10">
          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                {item.value}
              </h3>
              <p className="mt-1 text-sm text-white/80 sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;