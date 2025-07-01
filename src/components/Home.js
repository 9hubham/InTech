import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="header-section">
          <div className="container">
            <h1 className="header-title">Welcome to InTech News</h1>
            <p className="header-subtitle">
              Your daily dose of technology news from around the world
            </p>
            <Link to="/news" className="btn btn-custom btn-lg px-4 py-2">
              📰 Explore Latest News
            </Link>
          </div>
        </div>
        
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="news-card p-4 text-center">
                <div className="mb-3" style={{fontSize: '3rem'}}>🚀</div>
                <h3>Latest Tech</h3>
                <p>Stay updated with the latest technology trends and innovations.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news-card p-4 text-center">
                <div className="mb-3" style={{fontSize: '3rem'}}>⚡</div>
                <h3>Breaking News</h3>
                <p>Get instant updates on breaking technology news and developments.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news-card p-4 text-center">
                <div className="mb-3" style={{fontSize: '3rem'}}>🌐</div>
                <h3>Global Coverage</h3>
                <p>Technology news from leading sources around the globe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;