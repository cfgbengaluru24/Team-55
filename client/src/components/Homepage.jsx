import React, { useState } from 'react';

export default function Homepage() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginToggle = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div>
            <nav className="navbar bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                        <i className="fa-solid fa-user fa-3x" onClick={handleLoginToggle}></i>
                        {showLogin && (
                            <div className="dropdown-menu p-4" style={{ display: 'block', position: 'absolute', right: '2rem', top: '4rem' }}>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </form>
                            </div>
                        )}
                    </form>
                </div>
            </nav>
        </div>
    );
}
