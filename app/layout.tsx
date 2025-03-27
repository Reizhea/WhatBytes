import './globals.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WhatBytes Dashboard',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8 md:ml-56">{children}</main>
        </div>
      </body>
    </html>
  );
}
