import React from 'react'
import './App.css'
import HomePage from './components/Homepage';
import Help from './components/Help'
import StudentSignUp from './components/StudentSignUp'
import AdminSignUp from './components/AdminSignUp';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Assessment from './components/Assessment';
import Rewards from './components/Rewards';
import AttendanceChecker from './components/AttendanceChecker';
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
    //Need to get hep rou
    // {
    //   path:"/get-help",
    //   element:<HomePage/>,
    // },
    {
      path: "/student-signup",
      element: <StudentSignUp/>
    },
    {
      path: "/admin-signup",
      element: <AdminSignUp/>
    },
    {
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
