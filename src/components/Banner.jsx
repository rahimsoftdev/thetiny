import { FiTrendingUp, FiLock, FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="w-full bg-[#F2F4FE] pb-10 md:pb-12 xl:pb-section pt-10 xl:pt-13">
      <div className="mx-auto max-w-main px-4 text-center lg:px-10">
        {/* Badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 sm:px-4">
          <FiTrendingUp className="text-xs text-primary sm:text-sm" />
          <span className="text-xs font-medium text-primary sm:text-sm">
            Trusted by thousands of users
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-[34px] font-extrabold leading-[1.1] tracking-tight text-black sm:mt-6 sm:text-5xl md:text-6xl">
          Shorten Your URL
          <span className="block text-primary">in seconds</span>
        </h1>

        {/* Sub text */}
        <p className="mx-auto mt-5 max-w-[620px] text-sm leading-6 text-subtext sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
          Create short, memorable links that you can share anywhere. Track every
          click with powerful analytics.
        </p>

        {/* Card */}
        <div className="mx-auto mt-8 w-full max-w-[710px] rounded-2xl border border-[#EDEFF2] bg-white px-5 py-8 shadow-[0_10px_40px_rgba(91,33,243,0.08)] sm:mt-10 sm:px-10 sm:py-12 md:py-14">
          {/* Lock icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 sm:h-[72px] sm:w-[72px]">
            <FiLock className="text-2xl text-primary sm:text-3xl" />
          </div>

          <h2 className="mt-5 text-xl font-bold text-gray-900 sm:mt-6 sm:text-2xl">
            Login to make your URL short
          </h2>

          <p className="mx-auto mt-3 max-w-[500px] text-sm leading-6 text-subtext sm:text-base sm:leading-7">
            Sign in or create a free account to start shortening links,
            generating QR codes, and tracking every click in real time.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary px-6 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:opacity-90 sm:w-auto sm:px-8 sm:text-base"
            >
              <FiLock className="text-base " />
              Login to Make URL
            </button>

            <button
              type="button"
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-2 text-sm font-semibold text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white sm:w-auto sm:px-8 sm:text-base"
            >
              Sign Up Free
              <FiArrowRight className="text-base transition-transform duration-300 ease-in-out group-hover:translate-x-1 sm:text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;