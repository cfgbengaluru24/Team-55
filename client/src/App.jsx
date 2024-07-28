import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import HomePage from './components/Homepage';
import Help from './components/Help';
import StudentSignUp from './components/StudentSignUp'
import AdminSignUp from './components/AdminSignUp';
import Feedback from './components/Feedback';



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
    },
    {
      path: "/feedback",
      element: <Feedback/>
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
