'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function UpdateScoresModal({ isOpen, onClose, onSave, initialData }: any) {
  const [rank, setRank] = useState(initialData.rank);
  const [percentile, setPercentile] = useState(initialData.percentile);
  const [currentScore, setCurrentScore] = useState(initialData.currentScore);

  const handleSave = () => {
    if (percentile < 0 || percentile > 100) {
      alert('Percentile must be between 0 and 100');
      return;
    }
    if (currentScore < 0 || currentScore > 15) {
      alert('Score must be between 0 and 15');
      return;
    }
    onSave({ rank, percentile, currentScore });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-black/10 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="fixed top-1/2 left-1/2 bg-white rounded-lg shadow-2xl z-50 p-8 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-extrabold text-black">Update scores</h3>
              <Image src="/html-logo.png" alt="HTML Logo" width={40} height={40} />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="bg-[#0b1c63] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  1
                </span>
                <p className="text-black font-bold flex-1">
                  Update your <span className="font-extrabold">Rank</span>
                </p>
                <input
                  type="number"
                  value={rank}
                  onChange={(e) => setRank(Math.max(0, Number(e.target.value)))}
                  className="border p-2 rounded w-24 text-black outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                />
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-[#0b1c63] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  2
                </span>
                <p className="text-black font-bold flex-1">
                  Update your <span className="font-extrabold">Percentile</span>
                </p>
                <input
                  type="number"
                  value={percentile}
                  onChange={(e) =>
                    setPercentile(Math.min(100, Math.max(0, Number(e.target.value))))
                  }
                  className="border p-2 rounded w-24 text-black outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                />
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-[#0b1c63] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  3
                </span>
                <p className="text-black font-bold flex-1">
                  Update your <span className="font-extrabold">Current Score (out of 15)</span>
                </p>
                <input
                  type="number"
                  value={currentScore}
                  onChange={(e) =>
                    setCurrentScore(Math.min(15, Math.max(0, Number(e.target.value))))
                  }
                  className="border p-2 rounded w-24 text-black outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                />
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={onClose}
                  className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-bold"
                >
                  cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-[#0b1c63] text-white px-6 py-2 rounded hover:bg-[#112277] font-bold"
                >
                  save →
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
