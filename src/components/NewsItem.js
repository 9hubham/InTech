import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="news-card">
        <img src={imageUrl} className="card-img-top" alt="news" />
        <div className="card-body p-3">
          <h6 className="card-title mb-2" style={{minHeight: '60px', fontSize: '0.95rem'}}>
            {title}...
          </h6>
          <p className="card-text text-muted" style={{fontSize: '0.85rem', minHeight: '80px'}}>
            {description}...
          </p>
          <div className="text-center mt-3">
            <a 
              rel="noreferrer" 
              href={newsUrl} 
              target="_blank" 
              className="btn btn-custom btn-sm"
            >
              📖 Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;