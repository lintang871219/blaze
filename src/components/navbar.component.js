import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Blaze Engineering Tech Project</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">User List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/grid" className="nav-link">AG-grid</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
