import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import Profile from './Profile';
import './StudentDashboard.css'
// import Performance from './Performance';
// import GetHelp from './GetHelp';
// import Chatbot from './Chatbot';
// import Feedback from './Feedback';
// import Logout from './Logout';

export default function StudentDashboard() {
    const profileData = {
        id: '12345',
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '123-456-7890',
        college: 'XYZ University'
    };
  return (
    <div className="d-flex">
      <SideNav />
      <div className="flex-grow-1 p-3 text-center">
        <Profile name={profileData.name} id={profileData.id} email={profileData.email} contact={profileData.contact} college={profileData.college}/>
      </div>
    </div>
    // <Router>
    //   <div className="d-flex">
    //     <SideNav />
    //     <div className="flex-grow-1 p-3">
    //       <Routes>
    //         <Route path="/profile">
    //           <Profile
    //             name={profileData.name}
    //             id={profileData.id}
    //             email={profileData.email}
    //             contact={profileData.contact}
    //             college={profileData.college}
    //           />
    //         </Route>
    //         <Route path="/performance" component={Performance} />
    //         {/* <Route path="/get-help" component={GetHelp} />
    //         <Route path="/chatbot" component={Chatbot} />
    //         <Route path="/feedback" component={Feedback} />
    //         <Route path="/logout" component={Logout} /> */}
    //         <Route path="/" exact>
    //           <div className="text-center">
    //             <h1>Welcome to the Student Dashboard</h1>
    //             <p>Select an option from the sidebar to get started.</p>
    //           </div>
    //         </Route>
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
}
