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

  const campaigns = [
    {
      title: "Campaign 1",
      description: "Description for Campaign 1",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Campaign 2",
      description: "Description for Campaign 2",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Campaign 3",
      description: "Description for Campaign 3",
      image: "https://via.placeholder.com/150"
    },
  ];

  const upcomingEvents = [
    {
      name: "Event 1",
      description: "This is a brief description of Event 1. It provides an overview of what to expect during the event.",
      image: "https://via.placeholder.com/50"
    },
    {
      name: "Event 2",
      description: "This is a brief description of Event 2. It provides an overview of what to expect during the event.",
      image: "https://via.placeholder.com/50"
    },
    {
      name: "Event 3",
      description: "This is a brief description of Event 3. It provides an overview of what to expect during the event.",
      image: "https://via.placeholder.com/50"
    },
  ];

  return (
    <div>
      <nav className="navbar bg-body-tertiary sticky-top">
        <div className="container-fluid">

          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" className="logo" />
            <div>
              <span>Joining The Dots</span>
              <div className="tagline">Empowering Girls for a Brighter Future</div>
            </div>
          </a>

          <a className="navbar-brand" color="#FFBF00">Joining The Dots Foundation</a>

          <form className="d-flex" role="search">
            <Link to= '/admin-signup'><button className="btn btn-admin" type="button">Sign in as Admin</button></Link>
            <Link to= '/student-signup'><button className="btn btn-student" type="button">Sign in as Student</button></Link>
          </form>
        </div>
      </nav>

      <main className="container my-5">
        <div className="row">
          <div className="col-md-6 about-us mb-4">
            <h3>About Us</h3>
            <p>Our vision is to empower 10,000 girls to earn 50 LPA and contribute 2% of their earnings and 10 hours of their time by 2034. We operate primarily in the Chittoor District of Andhra Pradesh, working with over 100 government schools and 20 government degree colleges.</p>
          </div>
          <div className="col-md-6 upcoming-events mb-4">
            <h3>Upcoming Events</h3>
            <ul className="list-group">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="list-group-item">
                  <img src={event.image} className="event-image" alt={event.name} />
                  <div className="event-details">
                    <h5>{event.name}</h5>
                    <p>{event.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="contact-us mb-4">
          <h3>Contact Us</h3>
          <p>For inquiries, please contact us at:</p>
          <p>Email: contact@joiningdots.org</p>
          <p>Phone: +91 12345 67890</p>
          <div className="social-links">
            <a href="https://www.facebook.com/jtdfoundation/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fj0iningthed0ts" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/joiningthedotsfoundation/?hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-light text-center text-lg-start mt-auto">
        <div className="container p-4">
          <p>&copy; 2024 Joining The Dots. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
