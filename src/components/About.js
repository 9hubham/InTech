import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">About InTech News</h1>
            <p className="lead">Delivering quality technology news since day one</p>
          </div>
          
          <div className="news-container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="mb-4">Our Mission</h2>
                <p className="lead mb-4">
                  InTech News is dedicated to providing the latest and most relevant technology news 
                  from around the world. We curate content from trusted sources to keep you informed 
                  about the rapidly evolving tech landscape.
                </p>
                
                <h3 className="mb-3">What We Cover</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">🤖 Artificial Intelligence and Machine Learning</li>
                  <li className="mb-2">📱 Mobile Technology and Apps</li>
                  <li className="mb-2">💻 Software Development and Programming</li>
                  <li className="mb-2">🔒 Cybersecurity and Privacy</li>
                  <li className="mb-2">🚀 Startups and Innovation</li>
                  <li className="mb-2">🌐 Web Technologies and Internet</li>
                </ul>
                
                <h3 className="mb-3 mt-4">Our Values</h3>
                <p>
                  We believe in delivering accurate, timely, and unbiased technology news. 
                  Our platform aggregates content from reputable sources, ensuring you get 
                  diverse perspectives on the tech world's most important stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;