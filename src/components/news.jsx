import React, { Component } from 'react'
import { NewsItem } from './NewsItem';

export class News extends Component {
    
   constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state={
        articles: [],
        loading:false

    }
  }
 async componentDidMount(){
    console.log("cdm");
    let url ="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2ae729cff65846edbc4e8016d45e3b99"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }

    render() {
        return (
            <>
                <div className="container my-3">
                    <h1>
                        InTech- Top Headlines
                    </h1>
                    <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-3" key= {element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://manalco.com/wp-content/uploads/2023/04/no-image.jpg"} newsUrl={element.url} />
                    </div>

                    })}
                    </div>
                </div>
            </>
        )
    }
}
export default News;