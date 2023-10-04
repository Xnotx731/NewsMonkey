import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    article=[]

    constructor(){
        super();
        console.log("Welcome to universe");
         this.state={
         article:this.article,
        loading: false,
       page:1}
        

    }
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5db84a1ff88445f6a9b4ee1852daf246&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({article:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  
    }
    handleprev=async()=>{
   
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5db84a1ff88445f6a9b4ee1852daf246&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({article:parsedData.articles,
          page:this.state.page-1,
        loading:false})
    }

    handlenext=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5db84a1ff88445f6a9b4ee1852daf246&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({article:parsedData.articles,
      page:this.state.page+1,
      loading:false})
    }
    render() {
    return (
      <div className='container my-3' >
        <h2 className='text-center'>NewsMonkey-Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.article.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title} description={element.description} imageUrl={!element.urlToImage?"https://www.reuters.com/resizer/cxpRVXQCZVKvUa1zFhvsYw_eAOU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2BF2FX67VVPCZA42YGNBLZBN7U.jpg":element.urlToImage} newsUrl={element.url} />
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary " onClick={this.handleprev} >&larr; Previous</button>
        <button disabled={(Math.ceil(this.state.totalResults/this.props.pageSize)<=(this.state.page+1))} type="button" className="btn btn-primary"  onClick={this.handlenext}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default News
