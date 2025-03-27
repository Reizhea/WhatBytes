'use client';

import { useState } from 'react';
import UpdateSyllabusModal from '../modals/UpdateSyllabusModal';

export default function SyllabusWiseCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topics, setTopics] = useState([
    { name: 'HTML Tools, Forms, History', score: 80, color: 'blue' },
    { name: 'Tags & References in HTML', score: 60, color: 'orange' },
    { name: 'Tables & References in HTML', score: 24, color: 'red' },
    { name: 'Tables & CSS Bascis', score: 96, color: 'green' },
  ]);

  const handleSave = (newData: any) => setTopics(newData);

  const colorVariants: any = {
    blue: ['bg-blue-500', 'bg-blue-100', 'text-blue-500'],
    orange: ['bg-orange-500', 'bg-orange-100', 'text-orange-500'],
    red: ['bg-red-500', 'bg-red-100', 'text-red-500'],
    green: ['bg-green-500', 'bg-green-100', 'text-green-500'],
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h3 className="text-lg font-bold text-black">Syllabus Wise Analysis</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0b1c63] text-white font-bold px-6 py-2 rounded shadow hover:bg-[#112277] transition self-start sm:self-auto"
        >
          Update
        </button>
      </div>

      <div className="flex flex-col gap-7">
        {topics.map((topic, index) => {
          const [barColor, bgColor, textColor] = colorVariants[topic.color];
          return (
            <div key={index} className="flex flex-col gap-3.5">
              <p className="text-sm font-semibold text-gray-800">{topic.name}</p>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 h-3 rounded-full overflow-hidden">
                  <div className={`absolute top-0 left-0 h-3 rounded-full ${bgColor} w-full`} />
                  <div
                    className={`absolute top-0 left-0 h-3 rounded-full ${barColor}`}
                    style={{ width: `${topic.score}%` }}
                  />
                </div>
                <span className={`w-[10%] text-sm font-bold text-right ${textColor}`}>
                  {topic.score}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <UpdateSyllabusModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={topics}
      />
    </div>
  );
}
