'use client';

import Image from 'next/image';

export default function SkillTestCard({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
      <div className="flex items-center gap-4">
        <Image
          src="/html-logo.png"
          alt="HTML Logo"
          width={50}
          height={50}
          className="hidden lg:block"
        />
        <div>
        <h3 className="text-black font-bold text-base sm:text-lg">Hyper Text Markup Language</h3>
        <p className="text-gray-500 text-xs sm:text-sm">
            Questions: 15 | Duration: 15 mins | Submitted on 26 March 2025
          </p>
        </div>
      </div>

      <button
        onClick={onOpenModal}
        className="bg-[#0b1c63] text-white font-bold px-6 py-2 rounded shadow hover:bg-[#112277] transition self-center lg:self-auto"
      >
        Update
      </button>
    </div>
  );
}
