'use client';

import Image from 'next/image';

export default function QuickStatsCard({rank, percentile, currentScore,
}: {
  rank: number;
  percentile: number;
  currentScore: number;
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-3 shadow">
      <h3 className="text-lg font-bold text-black mb-4">Quick Statistics</h3>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex items-center gap-4 flex-1 w-full">
          <div className="bg-gray-100 p-3 rounded-full">
            <Image src="/trophy.png" alt="Trophy" width={30} height={30} />
          </div>
          <div>
            <p className="text-xl font-bold text-black">{rank}</p>
            <p className="text-gray-500 text-xs">YOUR RANK</p>
          </div>
        </div>

        <div className="hidden sm:block w-px h-16 bg-gray-300" />

        <div className="flex items-center gap-4 flex-1 w-full pl-0 sm:pl-2">
          <div className="bg-gray-100 p-3 rounded-full">
            <Image src="/percentile.png" alt="Percentile" width={30} height={30} />
          </div>
          <div>
            <p className="text-xl font-bold text-black">{percentile}%</p>
            <p className="text-gray-500 text-xs">PERCENTILE</p>
          </div>
        </div>

        <div className="hidden sm:block w-px h-16 bg-gray-300" />

        <div className="flex items-center gap-4 flex-1 w-full pl-0 sm:pl-2">
          <div className="bg-gray-100 p-3 rounded-full">
            <Image src="/check.png" alt="Check" width={30} height={30} />
          </div>
          <div>
            <p className="text-xl font-bold text-black">
              {currentScore} <span className="font-bold">/ 15</span>
            </p>
            <p className="text-gray-500 text-xs">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
