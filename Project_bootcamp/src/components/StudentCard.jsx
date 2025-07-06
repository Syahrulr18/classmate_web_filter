import React from 'react';

const StudentCard = ({ student, index }) => {
  const getMajorIcon = (major) => {
    return major === 'Teknik Komputer dan Jaringan' ? '💻' : '🎨';
  };

  const getMajorColor = (major) => {
    return major === 'Teknik Komputer dan Jaringan' 
      ? 'from-blue-500 to-purple-600' 
      : 'from-pink-500 to-orange-500';
  };

  return (
    <div
      className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getMajorColor(student.major)} flex items-center justify-center text-2xl shadow-lg`}>
            {getMajorIcon(student.major)}
          </div>
          <div className="text-right">
            <div className="px-3 py-1 bg-purple-500/30 rounded-full text-purple-200 text-sm font-medium">
              #{String(student.id).padStart(3, '0')}
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
          {student.name}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
            <span className="text-sm">Kelas: <span className="font-semibold text-white">{student.class}</span></span>
          </div>
          <div className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
            <span className="text-sm">Prodi: <span className="font-semibold text-white">{student.major}</span></span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;