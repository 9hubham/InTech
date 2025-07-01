import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{
        background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.95) 0%, rgba(49, 27, 146, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
      }}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            📰 InTech News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/">
                  🏠 Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/">
                  📈 News
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  ℹ️ About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/contact">
                  📞 Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
