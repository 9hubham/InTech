import React, { Component } from 'react'
import { NewsItem } from './NewsItem';
import Spinner from './spinner';

export class News extends Component {
    
   constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state={
        articles: [],
        loading:false,
        page:1,

    }
  }
 async componentDidMount(){
    console.log("cdm");
    let url ="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2ae729cff65846edbc4e8016d45e3b99&pageSize=8"
    let data = await fetch(url);
    this.setState({loading:true});
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults,loading:false})
  }
  handlePreviousClick= async()=>{
    let url =`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2ae729cff65846edbc4e8016d45e3b99&page=${this.state.page -1}&pageSize=8`;
    let data = await fetch(url);
    this.setState({loading:true});
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page:this.state.page-1,
        articles: parsedData.articles,
        loading:false
    })
    
  }
  handleNextClick=async ()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/4))){
    let url =`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2ae729cff65846edbc4e8016d45e3b99&page=${this.state.page +1}&PageSize=8`;
    this.setState({loading:true});

    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page:this.state.page+1,
        articles: parsedData.articles,
       loading:false
    })
    }
  }

    render() {
        return (
            <>
                <div className="container my-3">
                <h1 className="text-center"><b> InTech- Top Headlines</b></h1>
               {this.state.loading && <Spinner/>}
                    <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-3" key= {element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://manalco.com/wp-content/uploads/2023/04/no-image.jpg"} newsUrl={element.url} />
                    </div>

                    })}
                    </div>
                 <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/8)} class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}
export default News;