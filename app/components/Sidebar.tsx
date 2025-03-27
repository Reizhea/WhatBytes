'use client';

import { useState } from 'react';
import {ChartBarIcon, BookmarkIcon, DocumentIcon, Bars3Icon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex fixed top-[72px] left-0 w-56 bg-white border-r flex-col pt-8 h-[calc(100vh-72px)] z-40">
        <SidebarContent />
      </div>

      <button
        className="fixed bottom-6 right-6 md:hidden bg-black text-white p-3 rounded-full shadow-lg z-50"
        onClick={() => setOpen(!open)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-white/20 backdrop-blur z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-[83.5px] left-0 w-56 bg-white h-[calc(100vh-72px)] flex flex-col pt-4 z-50 shadow-lg md:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SidebarContent() {
  return (
    <>
      <div className="cursor-default hover:bg-gray-100">
        <div className="flex items-center gap-3 pl-4 pr-3 py-7">
          <ChartBarIcon className="h-5 w-5 text-black" />
          <span className="text-black font-bold">Dashboard</span>
        </div>
      </div>

      <div className="bg-blue-50">
        <div className="flex items-center gap-3 pl-4 pr-3 py-7">
          <BookmarkIcon className="h-5 w-5 text-blue-600" />
          <span className="text-blue-600 font-bold">Skill Test</span>
        </div>
      </div>

      <div className="cursor-default hover:bg-gray-100">
        <div className="flex items-center gap-3 pl-4 pr-3 py-7">
          <DocumentIcon className="h-5 w-5 text-black" />
          <span className="text-black font-bold">Internship</span>
        </div>
      </div>
    </>
  );
}
