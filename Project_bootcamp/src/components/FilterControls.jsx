import React from 'react';
import { Search, Filter } from 'lucide-react';

const FilterControls = ({ 
  searchName, setSearchName, 
  filterClass, setFilterClass, 
  filterMajor, setFilterMajor, 
  uniqueClasses, uniqueMajors, 
  clearFilters 
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
      <div className="flex items-center mb-6">
        <Filter className="w-6 h-6 text-purple-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Filter & Pencarian</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari nama mahasiswa..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          />
        </div>
        <div>
          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          >
            <option value="" className="text-gray-900">Semua Kelas</option>
            {uniqueClasses.map(cls => (
              <option key={cls} value={cls} className="text-gray-900">{cls}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={filterMajor}
            onChange={(e) => setFilterMajor(e.target.value)}
            className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          >
            <option value="" className="text-gray-900">Semua Prodi</option>
            {uniqueMajors.map(major => (
              <option key={major} value={major} className="text-gray-900">{major}</option>
            ))}
          </select>
        </div>
        <button
          onClick={clearFilters}
          className="px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default FilterControls;


