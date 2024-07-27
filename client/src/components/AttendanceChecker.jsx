import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import './AttendanceChecker.css';

const AttendanceTable = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/attendance.xlsx');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Separate headers from data
        const [headerRow, ...rows] = jsonData;
        setHeaders(headerRow);

        // Filter the data to include only students with two consecutive absences
        const filteredData = rows.filter((row) => {
          const attendance = row.slice(1); // Exclude the first column (Student name/ID)
          for (let i = 0; i < attendance.length - 1; i++) {
            if (attendance[i] === 'A' && attendance[i + 1] === 'A') {
              return true;
            }
          }
          return false;
        });

        setData(filteredData);
      } catch (error) {
        console.error('Error fetching or reading Excel file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Students with Consecutive Absences</h1>
      <table border="1">
        <thead>
          <tr>
            {headers.map((col, index) => <th key={index}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
