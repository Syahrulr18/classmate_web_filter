import React from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-2xl">
        <GraduationCap className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
        Data Mahasiswa Teknik Informatika
      </h1>
      <p className="text-gray-300 text-xl">
        Sistem Manajemen Mahasiswa Modern
      </p>
      <div className="flex items-center justify-center mt-4 space-x-2">
        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
        <span className="text-gray-400">Kelola data dengan mudah dan efisien</span>
        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
      </div>
    </div>
  );
};

export default Header;
