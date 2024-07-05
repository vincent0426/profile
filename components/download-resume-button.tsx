"use client";
import confetti from "canvas-confetti";
import { Download } from "lucide-react";

const ConfettiAction = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const handleDownload = () => {
  ConfettiAction();
  const link = document.getElementById("download-resume");
  link?.click();
};

export default function DownloadResumeButton() {
  return (
    <button onClick={handleDownload} className="flex items-center justify-center space-x-2 p-2 rounded-lg">
      <p>Resumé</p>
      <Download size={16} />
      <a href={process.env.NEXT_PUBLIC_RESUME_URL} target="_blank" className="hidden" download="Vincent Hsieh.pdf" id="download-resume" />
    </button>
  );
}

