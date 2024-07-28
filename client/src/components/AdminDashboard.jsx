import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <Router>
      <div className="admin-dashboard">
        <div className="sidebar">
          <h4>Admin Dashboard</h4>
          <ul>
            <li><Link to="/Assessment">Student Performance</Link></li>
            <li><Link to="/AttendanceCHecker">Attendance</Link></li>
            <li><Link to="/test-resources">Test Resources</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/notifications">Logout</Link></li>
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
          <Routes>
            <Route path="/student-performance" element={<div>Student Performance</div>} />
            <Route path="/attendance" element={<div>Attendance</div>} />
            <Route path="/test-resources" element={<div>Test Resources</div>} />
            <Route path="/get-help" element={<div>Get Help</div>} />
            <Route path="/notifications" element={<div>Notifications</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;
