import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FiDownload } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const QrModal = ({ isOpen, onClose, url, qrImage, fileName = "qr-code.png" }) => {
  // Lock body scroll + close on Escape while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  // Download QR image
  const handleDownload = async () => {
    try {
      const res = await fetch(qrImage);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback: open the image in a new tab
      window.open(qrImage, "_blank", "noopener,noreferrer");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Scrollbar is hidden (still scrollable on very small screens) */}
      <div
        className="relative max-h-[95vh] w-full max-w-[520px] overflow-y-auto rounded-3xl bg-white px-5 py-6 text-center shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 sm:py-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 cursor-pointer text-2xl text-subtext transition-colors duration-300 hover:text-gray-900 sm:right-5 sm:top-5"
        >
          <IoClose />
        </button>

        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 sm:h-16 sm:w-16">
          <BsQrCode className="text-2xl text-primary" />
        </div>

        <h3 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
          QR Code
        </h3>

        <p className="mt-3 break-all text-sm leading-6 text-subtext sm:text-base">
          {url}
        </p>

        {/* QR Image */}
        <img
          src={qrImage}
          alt="QR Code"
          className="mx-auto mt-5 w-full max-w-[260px] sm:max-w-[300px]"
        />

        {/* Download */}
        <button
          type="button"
          onClick={handleDownload}
          className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:opacity-90 sm:text-base"
        >
          <FiDownload className="text-lg" />
          Download QR Code
        </button>
      </div>
    </div>,
    document.body
  );
};

export default QrModal;