import React from 'react'
import './App.css'
import HomePage from './components/Homepage';
import Help from './components/Help'

function App() {

  return (
    <> 
     
import StudentSignUp from './components/StudentSignUp'
import AdminSignUp from './components/AdminSignUp';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
