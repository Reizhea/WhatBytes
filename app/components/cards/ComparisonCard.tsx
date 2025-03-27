'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from 'recharts';
import Image from 'next/image';

export default function ComparisonGraphCard({ percentile }: { percentile: number }) {
  const averagePercentile = 75;

  const data = [
    { percentile: 0, students: 2 },
    { percentile: 5, students: 3 },
    { percentile: 10, students: 5 },
    { percentile: 15, students: 8 },
    { percentile: 20, students: 12 },
    { percentile: 25, students: 20 },
    { percentile: 30, students: 25 },
    { percentile: 35, students: 40 },
    { percentile: 40, students: 57 },
    { percentile: 45, students: 63 },
    { percentile: 50, students: 100 },
    { percentile: 55, students: 90 },
    { percentile: 60, students: 65 },
    { percentile: 65, students: 40 },
    { percentile: 70, students: 30 },
    { percentile: 75, students: 20 },
    { percentile: 80, students: 15 },
    { percentile: 85, students: 20 },
    { percentile: 90, students: 15 },
    { percentile: 95, students: 8 },
    { percentile: 100, students: 5 },
  ];

  const comparisonText =
    percentile > averagePercentile
      ? `which is higher than the average percentile ${averagePercentile}%`
      : percentile < averagePercentile
      ? `which is lower than the average percentile ${averagePercentile}%`
      : `which is equal to the average percentile ${averagePercentile}%`;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 p-2 rounded shadow text-sm">
          <p className="text-black font-semibold">{payload[0].payload.percentile}</p>
          <p className="text-purple-600">students : {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow h-[500px] relative">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-black">Comparison Graph</h3>
        <div className="bg-gray-100 p-2 rounded-full">
          <Image src="/graph.png" alt="Graph Icon" width={24} height={24} />
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-3 leading-snug -mt-1">
        <span className="font-bold text-black">You scored {percentile}% percentile</span>{' '}
        {comparisonText} of all the engineers who took this assessment
      </p>
      <div className="h-[65%] sm:h-[80%] w-full">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
            <XAxis
                dataKey="percentile"
                ticks={[0, 25, 50, 75, 100]}
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: '#000', strokeWidth: 1 }}
                tickLine={false}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Line
                type="monotone"
                dataKey="students"
                stroke="#7b6ee4"
                strokeWidth={2}
                dot={{ r: 3 }}
            />
            <ReferenceLine x={percentile} stroke="#888" strokeDasharray="3 3">
                <Label
                value="Your Percentile"
                position="insideBottom"
                offset={-5}
                dy={-20}
                style={{ fontSize: 10 }}
                />
            </ReferenceLine>
            <ReferenceLine x={averagePercentile} stroke="#ef4444" strokeDasharray="3 3">
                <Label
                value="Avg Percentile"
                position="insideBottomRight"
                offset={-25}
                dy={-65}
                style={{ fontSize: 10 }}
                />
            </ReferenceLine>
            </LineChart>
        </ResponsiveContainer>
    </div>
    </div>
  );
}
