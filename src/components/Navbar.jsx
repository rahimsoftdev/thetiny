import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Terms", href: "/terms" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only Home is active/clickable, other links do nothing
  const handleLinkClick = (e, name) => {
    e.preventDefault();
    if (name === "Home") {
      setActive("Home");
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
      <nav className="mx-auto flex h-[64px] max-w-main items-center justify-between px-4 lg:px-10">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, "Home")}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="TheTiny.Site"
            className="h-14 w-auto "
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.name;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.name)}
                  className={`inline-block border-b-2 pb-1 text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "border-primary text-primary"
                      : "cursor-default border-transparent text-gray-500"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-[#EDEFF2] bg-white px-6 py-2 text-[16px] font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Log In
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-primary px-6 py-2 text-[16px] font-semibold text-white transition hover:opacity-90"
          >
            Get Started Free
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#EDEFF2] text-gray-800 md:hidden"
        >
          {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#EDEFF2] bg-white shadow-lg transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 border-b-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-main px-4 pb-6 pt-2">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = active === link.name;
              return (
                <li key={link.name} className="border-b border-[#EDEFF2]">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.name)}
                    className={`block py-3.5 text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "cursor-default text-gray-500"
                    }`}
                  >
                    <span
                      className={`inline-block border-b-2 pb-0.5 ${
                        isActive ? "border-primary" : "border-transparent"
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="w-full cursor-pointer rounded-lg border border-[#EDEFF2] bg-white px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Log In
            </button>
            <button
              type="button"
              className="w-full cursor-pointer rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;