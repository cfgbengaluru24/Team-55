import React, { useState } from 'react';
import './HomePage.css';
import logo from './logo.jpg'; // Correctly import the logo image

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export default function Homepage() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
  };

  const upcomingEvents = [
    {
      title: "Event 1",
      date: "2024-08-01",
      description: "Description for Event 1",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Event 2",
      date: "2024-09-15",
      description: "Description for Event 2",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Event 3",
      date: "2024-10-30",
      description: "Description for Event 3",
      image: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div>
      <nav className="navbar bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" className="logo" />
            <div className="d-flex flex-column">
              <span>Joining The Dots</span>
              <span className="tagline">Every child must become the best version of themselves</span>
            </div>
          </a>


          {/* <a className="navbar-brand" color="#FFBF00">Joining The Dots Foundation</a>

          <form className="d-flex" role="search">
            <Link to= '/admin-signup'><button className="btn btn-admin" type="button">Sign in as Admin</button></Link>
            <Link to= '/student-signup'><button className="btn btn-student" type="button">Sign in as Student</button></Link>
          </form> */}

          <div className="d-flex">
          
            <Link to="/admin-signup"><button className="btn btn-admin me-2">Sign in as Admin</button></Link>
            <Link to="/student-signup"><button className="btn btn-student" >Sign in as Student</button></Link>
          </div>

        </div>
      </nav>

      <main className="container my-5 d-flex">
        <div className="col-md-8">
          <section className="about-us my-4">
            <h3>About Us</h3>
            <p><strong>Our Vision:</strong> By 2034, we aim to empower 10,000 girls to achieve financial independence with an average annual income of 50 LPA. We envision these women contributing 2% of their earnings and 10 hours of their time towards community development, fostering a cycle of growth and support.</p>
            <p><strong>Mission:</strong> Our mission is to create a brighter future for young women through education and skill development. By providing resources, mentorship, and opportunities, we strive to break the cycle of poverty and build a community of strong, independent women leaders.</p>
            <p><strong>Area of Operations:</strong> We operate primarily in Andhra Pradesh, focusing on the Chittoor District. Our efforts are concentrated on partnering with 100+ government schools and 20+ government degree colleges. Through these collaborations, we aim to provide quality education and skill-building opportunities to young girls, ensuring they have the tools they need to succeed.</p>
            <p><strong>Our Approach:</strong></p>
            <ul>
              <li><strong>Education and Skill Development:</strong> We offer programs that enhance academic knowledge and practical skills, preparing girls for high-paying careers.</li>
              <li><strong>Mentorship and Support:</strong> Our network of mentors provides guidance and support, helping girls navigate their educational and career paths.</li>
              <li><strong>Community Engagement:</strong> Encouraging our graduates to give back, we promote a culture of community service and contribution, ensuring sustainable development.</li>
            </ul>
            <p><strong>Impact:</strong></p>
            <ul>
              <li><strong>Empowerment:</strong> Transforming lives by equipping girls with the skills and confidence to achieve their dreams.</li>
              <li><strong>Economic Growth:</strong> Contributing to the local economy by preparing a skilled workforce.</li>
              <li><strong>Community Development:</strong> Building a network of alumni who give back to their communities, creating a positive ripple effect.</li>
            </ul>
            <p>Join us in our mission to empower the next generation of women leaders and create a brighter future for all.</p>
          </section>
          <section className="contact-us my-4">
            <h3>Contact Us</h3>
            <p>Email: info@joiningdots.org</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Foundation Street, City, Country</p>
            <div className="social-links">
              <a href="https://www.facebook.com/jtdfoundation/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fj0iningthed0ts" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/joiningthedotsfoundation/?hl=en+" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </section>
        </div>
        <div className="col-md-4">
          <section className="upcoming-events my-4">
            <h3>Upcoming Events</h3>
            <ul className="list-group">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="list-group-item">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div>
                    <strong>{event.title}</strong> - {event.date}
                    <p>{event.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="text-center text-lg-start mt-auto ">
        <div className="container">
          <p>&copy; 2024 Your NGO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
