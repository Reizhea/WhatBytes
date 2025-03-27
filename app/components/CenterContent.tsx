'use client';

import { useState } from 'react';
import SkillTestCard from './cards/SkillTestCard';
import UpdateScoresModal from './modals/UpdateScoresModal';
import QuickStatsCard from './cards/QuickStatsCard';
import ComparisonGraphCard from './cards/ComparisonCard';
import SyllabusWiseCard from './cards/SyllabusWiseCard';
import QuestionAnalysisCard from './cards/QuestionAnalysisCard';

export default function CenterContent() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [currentScore, setCurrentScore] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveScores = (data: { rank: number; percentile: number; currentScore: number }) => {
    setRank(data.rank);
    setPercentile(data.percentile);
    setCurrentScore(data.currentScore);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold text-black mb-4 ml-1">Skill Test</h2>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <div className="col-span-7 lg:col-span-4 flex flex-col gap-6">
          <SkillTestCard onOpenModal={() => setIsModalOpen(true)} />
          <QuickStatsCard rank={rank} percentile={percentile} currentScore={currentScore} />
          <ComparisonGraphCard percentile={percentile} />
        </div>

        <div className="col-span-7 lg:col-span-3 flex flex-col gap-6">
          <SyllabusWiseCard />
          <QuestionAnalysisCard currentScore={currentScore} />
        </div>
      </div>

      <UpdateScoresModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveScores}
        initialData={{ rank, percentile, currentScore }}
      />
    </div>
  );
}
