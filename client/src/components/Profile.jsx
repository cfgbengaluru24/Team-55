import React from 'react';
import PropTypes from 'prop-types';

export default function Profile({id, name, email, contact, college}) {

    const handleButtonClick = () => {
        window.location.href = 'https://devsnest.in';
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Your Profile</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Id: {id}</p>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Contact No: {contact}</p>
                    <p className="card-text">College: {college}</p>
                    <a
                        className="btn btn-primary mt-3"
                        href="https://devsnest.in"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Your Courses
                    </a>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
};
