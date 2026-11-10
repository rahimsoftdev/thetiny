import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const productLinks = [
  "Features",
  "Pricing",
  "API Docs",
  "Browser Extension",
  "Report Malicious URL",
];

const companyLinks = [
  "About Us",
  "Blog",
  "Terms & Conditions",
  "Privacy Policy",
  "Cookie Policy",
  "Refund Policy",
];

const bottomLinks = [
  "Privacy Policy",
  "Refund Policy",
  "Cookie Policy",
  "Terms & Conditions",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/rahimsoftdev",
    icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rahimsoftdev/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/rahimsoftdev",
    icon: FaGithub,
  },
  {
    name: "Portfolio",
    href: "https://rahimsoftdev.vercel.app/",
    icon: FaGlobe,
  },
];

const Footer = () => {
  // All footer links go to the home page top
  const goHome = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full  bg-white">
      <div className="mx-auto max-w-main px-4 lg:px-10">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-12 pt-12 lg:grid-cols-[2fr_1fr_1fr] lg:gap-x-10 lg:pt-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" onClick={goHome} className="inline-block">
              <img src={logo} alt="TheTiny.Site" className="h-9 w-auto" />
            </a>

            <p className="mt-2 lg:mt-6 max-w-[380px] text-sm leading-7 text-subtext">
              The fastest way to shorten, track, and manage your URLs. Trusted
              by thousands of marketers, developers, and businesses across
              Bangladesh and beyond.
            </p>

            {/* Social icons */}
            <div className="mt-2 lg:mt-6  flex items-center gap-3 sm:gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] text-[#374151] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary hover:text-white sm:h-[52px] sm:w-[52px]"
                >
                  <Icon className="text-xl transition-transform duration-300 ease-in-out" />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-3 break-all text-sm text-subtext">
                <FaEnvelope className="shrink-0 text-base text-primary" />
                webdesignrahim4061@gmail.com
              </p>
              <p className="flex items-center gap-3 text-sm text-subtext">
                <FaPhoneAlt className="shrink-0 text-sm text-primary" />
                +880 1873135444
              </p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-subtext">
              Product
            </h3>
            <ul className="mt-6 space-y-4">
              {productLinks.map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    onClick={goHome}
                    className="text-sm text-subtext transition-colors duration-300 ease-in-out hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-subtext">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    onClick={goHome}
                    className="text-sm text-subtext transition-colors duration-300 ease-in-out hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-[#EDEFF2] py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-subtext">
            © {new Date().getFullYear()}{" "}
            <a href="/" onClick={goHome} className="text-primary">
              Bangla Puzzle Limited
            </a>
            . All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:gap-x-9">
            {bottomLinks.map((item) => (
              <li key={item}>
                <a
                  href="/"
                  onClick={goHome}
                  className="text-sm text-subtext transition-colors duration-300 ease-in-out hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;