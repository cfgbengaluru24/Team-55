import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './AdminDashboard.css';
import { FaChalkboardTeacher, FaClipboardCheck, FaBook, FaCommentDots } from 'react-icons/fa';
import Assessment from './Assessment';
import AttendanceChecker from './AttendanceChecker';

// import TestResources from './TestResources';
// import Notifications from './Notifications';

const AdminDashboard = () => {
  return (
      <div className="admin-dashboard">
        <div className="sidebar">
          <h4>Admin Dashboard</h4>
          <ul>
            <li><Link to="/Assessment"><FaChalkboardTeacher /> Student Performance</Link></li>
            <li><Link to="/AttendanceChecker"><FaClipboardCheck /> Attendance</Link></li>
            <li><Link to="/"><FaBook /> Test Resources</Link></li>
            <li><Link to="/"><FaCommentDots /> Notifications</Link></li>
          </ul>
        </div>
        <div className="content mt-6">
          <div className="card-section">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><FaChalkboardTeacher /> Student Performance</h5>
                <a href="/Assessment" className="btn btn-secondary">VIEW</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><FaClipboardCheck /> Attendance</h5>
                <a href="/AttendanceChecker" className="btn btn-secondary">VIEW</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><FaBook /> Rewards</h5>
                <Link to="/Rewards" className="btn btn-secondary">VIEW</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><FaCommentDots /> Feedback Responses</h5>
                <a href="#" className="btn btn-secondary">VIEW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboard;
