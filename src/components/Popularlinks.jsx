import LinkCard from "./LinkCard";

const popularLinks = [
  {
    id: 1,
    shortUrl: "https://thetiny.site/ARLSeN",
    originalUrl:
      "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+partner+of+bangla+puzzle",
    clicks: 419,
  },
  {
    id: 2,
    shortUrl: "https://thetiny.site/BArxCj",
    originalUrl: "https://leena45945.softr.app",
    clicks: 269,
  },
  {
    id: 3,
    shortUrl: "https://thetiny.site/kLrnXd",
    originalUrl:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-code-feature",
    clicks: 85,
  },
  {
    id: 4,
    shortUrl: "https://thetiny.site/qQNTp0",
    originalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBliGp4uunkBsQVLy_zLWcwkWhExample/viewform",
    clicks: 64,
  },
  {
    id: 5,
    shortUrl: "https://thetiny.site/k4dIp8",
    originalUrl: "https://solverfirm.com/",
    clicks: 33,
  },
];

const PopularLinks = () => {
  return (
    <section className="w-full bg-white py-10 md:py-12 xl:py-section">
      <div className="mx-auto max-w-main px-4 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl md:text-4xl">
            Most Popular Links
          </h2>
          <p className="mt-3 text-sm text-subtext sm:text-base">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4">
          {popularLinks.map((link) => (
            <LinkCard
              key={link.id}
              shortUrl={link.shortUrl}
              originalUrl={link.originalUrl}
              clicks={link.clicks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLinks;