import React, { useState } from 'react';
import { FaCalendarCheck, FaChartLine, FaLifeRing, FaRobot, FaCommentAlt, FaUserCircle, FaPowerOff } from 'react-icons/fa';

export default function SideNav(props) {
    const [openAcademic, setOpenAcademic] = useState(false);

    return (
        <nav className="bg-light sidebar flex-shrink-0 vh-100 p-3" style={{ width: '250px', borderRight: '1px solid #dee2e6', backgroundColor: '#FFBF00 !important' }}>
            <div className="sticky-top text-center mb-4">
                <h4 className="text-primary fw-bold mb-4">Student Dashboard</h4>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item mb-3">
                    <a className="nav-link text-dark d-flex align-items-center" href="#">
                        <FaCalendarCheck className="me-2" />
                        Attendance
                    </a>
                </li>
                <li className="nav-item mb-3">
                    <a className="nav-link text-dark d-flex align-items-center" href="#">
                        <FaChartLine className="me-2" />
                        Performance
                    </a>
                </li>
                <li className="nav-item mb-3">
                    <a className="nav-link text-dark d-flex align-items-center" href="#">
                        <FaLifeRing className="me-2" />
                        Get Help
                    </a>
                </li>
                <li className="nav-item mb-3">
                    <a className="nav-link text-dark d-flex align-items-center" href="#">
                        <FaRobot className="me-2" />
                        Chatbot
                    </a>
                </li>
                <li className="nav-item mb-3">
                    <a className="nav-link text-dark d-flex align-items-center" href="#">
                        <FaCommentAlt className="me-2" />
                        Feedback
                    </a>
                </li>
                <li className="nav-item mb-3">
                    <a className="nav-link text-dark d-flex align-items-center" href="#">
                        <FaUserCircle className="me-2" />
                        Profile
                    </a>
                </li>
                <li className="nav-item mb-3">
                    <a className="nav-link text-dark d-flex align-items-center" href="#">
                        <FaPowerOff className="me-2" />
                        Logout
                    </a>
                </li>
            </ul>
    </nav >
  );
}
