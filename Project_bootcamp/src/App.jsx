import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import FilterControls from './components/FilterControls';
import StatsCards from './components/StatsCards';
import StudentsGrid from './components/StudentsGrid';

const StudentFilter = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [filterMajor, setFilterMajor] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => setStudentsData(response.data))
      .catch(error => console.error('Gagal mengambil data:', error));
  }, []);

  const filteredStudents = useMemo(() => {
    return studentsData.filter(student => {
      const nameMatch = student.name.toLowerCase().includes(searchName.toLowerCase());
      const classMatch = filterClass === '' || student.class === filterClass;
      const majorMatch = filterMajor === '' || student.major === filterMajor;
      return nameMatch && classMatch && majorMatch;
    });
  }, [searchName, filterClass, filterMajor, studentsData]);

  const uniqueClasses = [...new Set(studentsData.map(s => s.class))];
  const uniqueMajors = [...new Set(studentsData.map(s => s.major))];

  const clearFilters = () => {
    setSearchName('');
    setFilterClass('');
    setFilterMajor('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header />
        <FilterControls 
          searchName={searchName}
          setSearchName={setSearchName}
          filterClass={filterClass}
          setFilterClass={setFilterClass}
          filterMajor={filterMajor}
          setFilterMajor={setFilterMajor}
          uniqueClasses={uniqueClasses}
          uniqueMajors={uniqueMajors}
          clearFilters={clearFilters}
        />
        <StatsCards 
          totalStudents={studentsData.length}
          filteredCount={filteredStudents.length}
          totalClasses={uniqueClasses.length}
        />
        <StudentsGrid 
          filteredStudents={filteredStudents}
          totalStudents={studentsData.length}
        />
      </div>
    </div>
  );
};

export default StudentFilter;