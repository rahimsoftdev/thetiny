import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiDownload } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const QrModal = ({ isOpen, onClose, url, qrImage, fileName = "qr-code.png" }) => {
  const [show, setShow] = useState(false);

  // Lock body scroll, close on Escape, and run the open animation
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    const frame = requestAnimationFrame(() => setShow(true));

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(frame);
      setShow(false);
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
      className={`fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 sm:items-center sm:p-4 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Mobile: slides up from the bottom | Tablet+: centered */}
      <div
        className={`relative max-h-[90vh] w-full max-w-full overflow-y-auto rounded-t-3xl bg-white px-5 pb-6 pt-3 text-center shadow-2xl transition-all duration-300 ease-out [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:max-w-[400px] sm:rounded-3xl sm:px-6 sm:py-6 ${
          show
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 sm:translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle (mobile only) */}
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-300 sm:hidden" />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 cursor-pointer text-xl text-subtext transition-colors duration-300 hover:text-gray-900 sm:right-4 sm:top-4"
        >
          <IoClose />
        </button>

        {/* Icon */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 sm:h-14 sm:w-14 sm:rounded-2xl">
          <BsQrCode className="text-xl text-primary sm:text-2xl" />
        </div>

        <h3 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
          QR Code
        </h3>

        <p className="mt-2 break-all text-xs leading-5 text-subtext sm:text-sm sm:leading-6">
          {url}
        </p>

        {/* QR Image */}
        <img
          src={qrImage}
          alt="QR Code"
          className="mx-auto mt-4 w-full max-w-[150px] sm:max-w-[180px]"
        />

        {/* Download */}
        <button
          type="button"
          onClick={handleDownload}
          className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:opacity-90"
        >
          <FiDownload className="text-base" />
          Download QR Code
        </button>
      </div>
    </div>,
    document.body
  );
};

export default QrModal;