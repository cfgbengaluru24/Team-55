// Rewards.jsx
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import './Rewards.css';

const Rewards = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const response = await fetch('/points.xlsx');
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet is the one we want
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Filter students with points above 450
        const filteredStudents = jsonData.filter((student) => student.Points > 450);
        setStudents(filteredStudents);
      } catch (error) {
        console.error('Error reading Excel file:', error);
      }
    };

    fetchExcelData();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Leaderboard</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student['Student Name']}</td>
              <td>{student.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rewards;
