import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'

// import HomePage from './components/Homepage';
import Help from './components/Help'
import GetHelp from './components/GetHelp'
import AdminDashboard from './components/AdminDashboard';

import HomePage from './components/Homepage';

import StudentSignUp from './components/StudentSignUp'
import AdminSignUp from './components/AdminSignUp';


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
    }
  ]
)


function App() {

  return (

    <>
    <Help>

    {/* <RouterProvider router={router} /> */}
    </Help>

    </>
  )
}

export default App;
