'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

export default function QuestionAnalysisCard({ currentScore }: { currentScore: number }) {
  const totalQuestions = 15;
  const correct = currentScore;
  const incorrect = totalQuestions - correct;

  const data = [
    { name: 'Correct', value: correct },
    { name: 'Incorrect', value: incorrect },
  ];

  const COLORS = ['#3B82F6', '#E0ECFF']; // blue and light blue

  const getFeedback = () => {
    if (correct >= 13) return 'Great job! You performed really well.';
    if (correct <= 6) return 'You need to work on your fundamentals.';
    return 'However it still needs some improvements';
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6.5 shadow flex flex-col gap-4 items-center">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-lg font-bold text-black">Question Analysis</h3>
        <p className="text-blue-600 font-bold text-md">{correct}/15</p>
      </div>

      <p className="text-sm text-gray-700 text-left w-full leading-snug">
        <span className="font-bold text-black">
          You scored {correct} question correct out of {totalQuestions}.
        </span>{' '}
        {getFeedback()}
      </p>

      <div className="w-full flex justify-center items-center">
        <div className="relative w-48 h-48"> {/* 🍩 Bigger Donut Chart */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="70%"
                outerRadius="100%"
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/target.png" alt="Target" width={36} height={36} />
          </div>
        </div>
      </div>
    </div>
  );
}
