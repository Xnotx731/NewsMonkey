import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  
    article=[]

    constructor(props){
        super(props);
         this.state={
         article:this.article,
        loading: false,
        totalResults:0,
       page:1}
          document.title=`${this.Capitalize(this.props.category)}-NewsMonkey`

    }

    Capitalize=(string)=>{let word=string.toLowerCase();
    return word.slice(0,1).toUpperCase()+word.slice(1)}

    async update(){
      this.props.setProgress(0);
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5db84a1ff88445f6a9b4ee1852daf246&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      this.props.setProgress(30);  
      let data=await fetch(url);
      this.props.setProgress(70);
      let parsedData=await data.json();
      this.props.setProgress(100);
      this.setState({article:parsedData.articles,totalResults:parsedData.totalResults,loading:false})

    }
     componentDidMount(){
      this.update();
      this.setState({page:this.state.page+1})
    }

    fetchMoreData = async() => {
      this.setState({page:this.state.page+1})
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5db84a1ff88445f6a9b4ee1852daf246&page=${this.state.page}&pageSize=${this.props.pageSize}`;

      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({article:this.state.article.concat(parsedData.articles),
        totalResults:parsedData.totalResults,loading:false})
    };

    render() {
    return (
      <>
        <h2 className='text-center mb-3'>NewsMonkey-Top {this.Capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<Spinner/>}
          >
            <div className='container my-3' >
        <div className="row">
        { this.state.article.map((element)=>{
          return <div className="col-md-4" key={element.url}>
        <NewsItem author={element.author} date={element.publishedAt} source={element.source.name} title={element.title} description={element.description} imageUrl={!element.urlToImage?"https://www.reuters.com/resizer/cxpRVXQCZVKvUa1zFhvsYw_eAOU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2BF2FX67VVPCZA42YGNBLZBN7U.jpg":element.urlToImage} newsUrl={element.url} />
        </div>
        })}
        </div>
      </div>
        </InfiniteScroll>
      
        </>
    )
  }
}

export default News
