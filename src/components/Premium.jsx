import { FiCheck } from "react-icons/fi";

const features = [
  "Custom branded short links",
  "UTM parameter builder",
  "Powerful analytics dashboard",
  "QR Code generator (PNG/SVG)",
  "REST API with full documentation",
];

const analytics = [
  { url: "shorturl.bd/ig9Kp2", clicks: 1247 },
  { url: "shorturl.bd/yt3Nm8", clicks: 589 },
  { url: "shorturl.bd/lk7Rv1", clicks: 312 },
  { url: "shorturl.bd/fb2Wx9", clicks: 198 },
];

const maxClicks = Math.max(...analytics.map((item) => item.clicks));

const Premium = () => {
  return (
    <section className="w-full bg-[#F8F9FC] py-10 md:py-12 xl:py-section">
      <div className="mx-auto max-w-main px-4 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left content */}
          <div>
            <span className="block text-left max-sm:text-center text-xs font-bold uppercase tracking-[0.15em] text-primary sm:text-sm">
              Premium
            </span>

            <h2 className="mt-2 max-sm:text-center text-[28px] font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl lg:text-[44px]">
              Unlock powerful tools for serious growth.
            </h2>

            <p className="mt-5 max-sm:text-center max-w-[620px] text-sm leading-7 text-subtext sm:text-base sm:leading-8">
              Go beyond basic shortening with a full suite of marketing and
              developer tools — custom branded links, UTM builders, deep
              analytics, QR codes, and a REST API for your apps.
            </p>

            <ul className="mt-7 space-y-3.5 sm:mt-8">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <FiCheck className="text-xs text-primary" />
                  </span>
                  <span className="text-sm font-medium text-gray-900 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Analytics card */}
          <div className="rounded-2xl bg-primary p-5 sm:rounded-3xl sm:p-8 lg:p-10">
            <h3 className="text-base font-bold text-white sm:text-lg lg:ml-0">
              Link Analytics Dashboard
            </h3>

            <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">
              {analytics.map((item) => (
                <div key={item.url}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="truncate font-mono text-xs text-white/70 sm:text-sm">
                      {item.url}
                    </span>
                    <span className="shrink-0 text-xs font-bold text-white sm:text-sm">
                      {item.clicks.toLocaleString()}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-2.5 h-2 w-full rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-white/30"
                      style={{ width: `${(item.clicks / maxClicks) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;