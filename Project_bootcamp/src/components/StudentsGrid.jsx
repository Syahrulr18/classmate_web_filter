import React from 'react';
import StudentCard from './StudentCard';
import { Search } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-300 mb-4">Tidak ada data yang ditemukan</h3>
      <p className="text-gray-400">Coba ubah kriteria pencarian Anda</p>
    </div>
  );
};

const StudentsGrid = ({ filteredStudents, totalStudents }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Daftar Mahasiswa</h2>
        <div className="text-gray-300">
          Menampilkan {filteredStudents.length} dari {totalStudents} mahasiswa
        </div>
      </div>
      {filteredStudents.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student, index) => (
            <StudentCard 
              key={student.id} 
              student={student} 
              index={index} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentsGrid;