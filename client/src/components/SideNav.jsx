// import React, { useState } from 'react';
// import { FaCalendarCheck, FaChartLine, FaLifeRing, FaRobot, FaCommentAlt, FaUserCircle, FaPowerOff } from 'react-icons/fa';
// import './StudentDashboard.css'

// export default function SideNav(props) {
//     // const [openAcademic, setOpenAcademic] = useState(false);

//     return (
//         <nav className="bg-light sidebar flex-shrink-0 vh-100 p-3 student-sidebar" >
//             <div className="sticky-top text-center mb-4">
//                 <h4 className="text-primary fw-bold mb-4">Student Dashboard</h4>
//             </div>
//             <ul className="nav flex-column">
//                 <li className="nav-item mb-3">
//                     <a className="nav-link text-dark d-flex align-items-center" href="#">
//                         <FaChartLine className="me-2" />
//                         Performance
//                     </a>
//                 </li>
//                 <li className="nav-item mb-3">
//                     <a className="nav-link text-dark d-flex align-items-center" href="#">
//                         <FaLifeRing className="me-2" />
//                         Get Help
//                     </a>
//                 </li>
//                 <li className="nav-item mb-3">
//                     <a className="nav-link text-dark d-flex align-items-center" href="#">
//                         <FaRobot className="me-2" />
//                         Chatbot
//                     </a>
//                 </li>
//                 <li className="nav-item mb-3">
//                     <a className="nav-link text-dark d-flex align-items-center" href="#">
//                         <FaCommentAlt className="me-2" />
//                         Feedback
//                     </a>
//                 </li>
//                 <li className="nav-item mb-3">
//                     <a className="nav-link text-dark d-flex align-items-center" href="#">
//                         <FaPowerOff className="me-2" />
//                         Logout
//                     </a>
//                 </li>
//             </ul>
//     </nav >
//   );
// }

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
        <li className="nav-item mb-3">
          <Link className="nav-link text-dark d-flex align-items-center" to="/performance">
            <FaChartLine className="me-2" />
            Performance
          </Link>
        </li>
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
