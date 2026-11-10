import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { TbClick } from "react-icons/tb";
import { BsQrCode } from "react-icons/bs";
import QrModal from "./ui/Qrmodal";

const LinkCard = ({ shortUrl, originalUrl, clicks }) => {
  const [clickCount, setClickCount] = useState(clicks);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // QR image (free QR API)
  const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=10&data=${encodeURIComponent(
    originalUrl
  )}`;

  // Copy short link + update click count
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("textarea");
      input.value = shortUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }

    setClickCount((prevCount) => prevCount + 1);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Card */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[#EDEFF2] bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-[18px] sm:py-4">
        {/* Links */}
        <div className="min-w-0 flex-1">
          <p className="truncate font-mono text-sm font-medium text-primary sm:text-[15px]">
            {shortUrl}
          </p>
          <p className="mt-1 truncate text-xs text-subtext/80 sm:text-[13px]">
            {originalUrl}
          </p>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-gray-700">
            <TbClick className="text-base text-subtext" />
            {clickCount} clicks
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="flex min-w-[88px] cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:opacity-90"
          >
            {copied ? (
              <FiCheck className="text-base" />
            ) : (
              <FiCopy className="text-base" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
          >
            <BsQrCode className="text-sm" />
            QR
          </button>
        </div>
      </div>

      {/* QR Modal (separate component) */}
      <QrModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={originalUrl}
        qrImage={qrImage}
        fileName={`qr-${shortUrl.split("/").pop()}.png`}
      />
    </>
  );
};

export default LinkCard;