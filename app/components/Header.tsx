'use client';

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between bg-white px-8 py-4 border-b shadow-sm sticky top-0 z-50">
      <img
        src="/whatbytes-logo.png"
        alt="WhatBytes Logo"
        className="h-8 w-auto md:h-13"
      />
      <div className="flex items-center gap-3 border rounded-md px-3 py-2 shadow-sm bg-white">
        <img
          src="/profile-pic.png"
          alt="User Avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="font-bold text-black hidden md:inline">
          Nawang Dorjee
        </span>
      </div>
    </div>
  );
}
