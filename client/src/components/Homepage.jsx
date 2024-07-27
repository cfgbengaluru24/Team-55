import React, { useState } from 'react';

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

  return (
    <div>
      <nav className="navbar bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" color="#FFBF00">Joining The Dots Foundation</a>
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

      <main className="container my-5">
        <div className="row">
          {campaigns.map((campaign, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={campaign.image} className="card-img-top" alt={campaign.title} />
                <div className="card-body">
                  <h5 className="card-title">{campaign.title}</h5>
                  <p className="card-text">{campaign.description}</p>
                  <a href="#" className="btn btn-primary">Learn more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-light text-center text-lg-start mt-auto">
        <div className="container p-4">
          <p>&copy; 2024 Your NGO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
