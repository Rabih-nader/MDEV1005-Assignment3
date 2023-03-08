import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'SignUp':
        return <SignUp />;
      case 'Login':
        return <Login />;
      case 'User Info':
        return <div>User Info Page</div>;
      default:
        return <div>Home Page</div>;
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => setCurrentPage('Home')}>
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item" onClick={() => setCurrentPage('SignUp')}>
                <a className="nav-link" href="#">SignUp</a>
              </li>
              <li className="nav-item" onClick={() => setCurrentPage('Login')}>
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item" onClick={() => setCurrentPage('User Info')}>
                <a className="nav-link" href="#">User Info</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
