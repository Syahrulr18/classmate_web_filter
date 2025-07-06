import React from 'react';
import { Users, BookOpen, UserCheck } from 'lucide-react';

const StatsCard = ({ icon: Icon, title, value, gradient }) => {
  return (
    <div className={`bg-gradient-to-r ${gradient} backdrop-blur-xl rounded-2xl p-6 border border-white/20`}>
      <div className="flex items-center">
        <Icon className="w-8 h-8 text-blue-400 mr-4" />
        <div>
          <p className="text-gray-300">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
};

const StatsCards = ({ totalStudents, filteredCount, totalClasses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard 
        icon={Users}
        title="Total Mahasiswa"
        value={totalStudents}
        gradient="from-blue-500/20 to-purple-500/20"
      />
      <StatsCard 
        icon={BookOpen}
        title="Hasil Filter"
        value={filteredCount}
        gradient="from-green-500/20 to-emerald-500/20"
      />
      <StatsCard 
        icon={UserCheck}
        title="Jumlah Kelas"
        value={totalClasses}
        gradient="from-purple-500/20 to-pink-500/20"
      />
    </div>
  );
};

export default StatsCards;
