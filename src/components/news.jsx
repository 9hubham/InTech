import React, { Component } from 'react'
import { NewsItem } from './NewsItem';
import Spinner from './spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2ae729cff65846edbc4e8016d45e3b99&pageSize=8`;
    let data = await fetch(url);
    this.setState({loading: true});
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2ae729cff65846edbc4e8016d45e3b99&page=${nextPage}&pageSize=8`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      page: nextPage,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  render() {
    return (
      <div className="page-container">
        
        {/* <div className="page-header">
          <h1 className="page-title">📈 Latest Tech Headlines</h1>
          <p className="lead">Stay updated with the latest technology news</p>
        </div> */}

        <div className="news-container">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="row g-4">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6" key={element.url}>
                    <NewsItem 
                      title={element.title ? element.title.slice(0,45) : ""} 
                      description={element.description ? element.description.slice(0,88) : ""} 
                      imageUrl={element.urlToImage ? element.urlToImage : "https://manalco.com/wp-content/uploads/2023/04/no-image.jpg"} 
                      newsUrl={element.url} 
                    />
                  </div>
                )
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default News;