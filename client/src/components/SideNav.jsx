
import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaLifeRing, FaRobot, FaCommentAlt, FaUserCircle, FaPowerOff } from 'react-icons/fa';
import './StudentDashboard.css';

export default function SideNav() {
  return (
    <nav className="bg-light sidebar flex-shrink-0 vh-100 p-3 student-sidebar">
      <div className="sticky-top text-center mb-4">
        <h4 className="text-primary fw-bold mb-4">Student Dashboard</h4>
      </div>
      <ul className="nav flex-column">
        {/* <li className="nav-item mb-3">
          <Link className="nav-link text-dark d-flex align-items-center" to="/Assessment">
            <FaChartLine className="me-2" />
            Performance
          </Link>
        </li> */}
        <li className="nav-item mb-3">
          <Link className="nav-link text-dark d-flex align-items-center" to="/get-help">
            <FaLifeRing className="me-2" />
            Get Help
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-dark d-flex align-items-center" to="/chatbot">
            <FaRobot className="me-2" />
            Chatbot
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-dark d-flex align-items-center" to="/feedback">
            <FaCommentAlt className="me-2" />
            Feedback
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-dark d-flex align-items-center" to="/profile">
            <FaUserCircle className="me-2" />
            Profile
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-dark d-flex align-items-center" to="/logout">
            <FaPowerOff className="me-2" />
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
