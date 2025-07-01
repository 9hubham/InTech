import React, { Component } from 'react';

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <div className="page-container">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Contact Us</h1>
            <p className="lead">Get in touch with the InTech News team</p>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="news-container">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      required 
                      style={{borderRadius: '10px'}}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      required 
                      style={{borderRadius: '10px'}}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-semibold">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="5"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      required 
                      style={{borderRadius: '10px'}}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-custom btn-lg px-4">
                      📧 Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="news-container mt-4">
                <div className="row text-center">
                  <div className="col-md-4">
                    <div className="mb-3" style={{fontSize: '2rem'}}>📧</div>
                    <h5>Email</h5>
                    <p>contact@intechnews.com</p>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3" style={{fontSize: '2rem'}}>📞</div>
                    <h5>Phone</h5>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3" style={{fontSize: '2rem'}}>📍</div>
                    <h5>Location</h5>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;