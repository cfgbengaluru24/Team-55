import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './AdminDashboard.css';
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
            <li><Link to="/Assessment">Student Performance</Link></li>
            <li><Link to="/AttendanceChecker">Attendance</Link></li>
            <li><Link to="/#">Test Resources</Link></li>
            <li><Link to="/#">Notifications</Link></li>
          </ul>
        </div>
        <div className="content mt-6">
         
          <div className="card-section">
            <div className="card">
             
              <div className="card-body">
                <h5 className="card-title">Student Performance</h5>
               
                <a href="#" className="btn btn-secondary">VIEW</a>
              </div>
            </div>
            <div className="card">
            
              <div className="card-body">
                <h5 className="card-title">Attendance</h5>
                
                <a href="#" className="btn btn-secondary">VIEW</a>
              </div>
            </div>
            <div className="card">
              
              <div className="card-body">
                <h5 className="card-title">Test Resources</h5>
                
                <a href="#" className="btn btn-secondary">VIEW</a>
              </div>
            </div>
            <div className="card">
            
              <div className="card-body">
                <h5 className="card-title">Feedback Responses</h5>
               
                <a href="#" className="btn btn-secondary">VIEW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboard;
