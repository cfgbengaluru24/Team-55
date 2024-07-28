import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'

// import HomePage from './components/Homepage';
import Help from './components/Help'

import StudentSignUp from './components/StudentSignUp'
import AdminSignUp from './components/AdminSignUp';
import Feedback from './components/Feedback';

import Assessment from './components/Assessment';
import Rewards from './components/Rewards';
import AttendanceChecker from './components/AttendanceChecker';
import GetHelp from './components/GetHelp'
import AdminDashboard from './components/AdminDashboard';
import HomePage from './components/Homepage';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<HomePage/>,
    },

    {
      path: "/help",
      element: <Help/>,
    },
    //Need to get hep route 
    {
      path:"/dashboard/student-dashboard",
      element:<GetHelp/>,
    },
    {
      path: "/student-signup",
      element: <StudentSignUp/>
    },
    {
      path: "/admin-signup",
      element: <AdminSignUp/>
    },
    {

      path: "/feedback",
      element: <Feedback/>
    },{
      path:"/Assessment",
      element:<Assessment/>
    },
    {
    path:"/Rewards",
    element:<Rewards/>
    },
    {
      path:"/AttendanceChecker",
      element:<AttendanceChecker/>
    },
    {
      path:"/admin-dashboard",
      element:<AdminDashboard/>
    }

  ]
)


function App() {

  return (

    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
