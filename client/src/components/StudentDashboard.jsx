import React, { useState } from 'react';
import SideNav from './SideNav';
import Profile from './Profile';

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
  );
}