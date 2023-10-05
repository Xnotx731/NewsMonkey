import React, {useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import propTypes from 'prop-types' 

const News=(props)=> {
  const [article,setArticle]=useState([]);
  const [loading,setLoading]=useState(true);
  const [totalResults,setTotalResults]=useState(0);
  const [page,setPage]=useState(1);
  

  
  const Capitalize=(string)=>{let word=string.toLowerCase();
    return word.slice(0,1).toUpperCase()+word.slice(1)}

    const update=async(props)=>{
      props.setProgress(0);
      console.log(props)
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${ props.category}&apiKey=${ props.apikey}&page=${page}&pageSize=${ props.pageSize}`;
      setLoading(true);
      props.setProgress(30);  
      let data=await fetch(url);
      props.setProgress(70);
      let parsedData=await data.json();
      props.setProgress(100);
      setArticle(parsedData.articles)
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      
    }
    useEffect(()=>{
      update(props);
      document.title=`${Capitalize( props.category)}-NewsMonkey`

    },[props.category, props.apikey, props.pageSize])
  

    const fetchMoreData = async() => {
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${ props.category}&apiKey=${ props.apikey}&page=${page+1}&pageSize=${ props.pageSize}`;
      setPage(page+1)

      let data=await fetch(url);
      let parsedData=await data.json();
      setArticle(article.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    };

  
    return (
      <>
        <h2 className='text-center mb-3' style={{marginTop:'90px'}} >NewsMonkey-Top {Capitalize( props.category)} Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==totalResults}
          loader={<Spinner/>}
          >
            <div className='container my-3' >
        <div className="row">
        { article.map((element)=>{
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

News.defaultProps={
country:'in',
pageSize:8,
category:'sports',
}
News.propTypes={
country:propTypes.string,
pageSize:propTypes.number,
category:propTypes.string,
}

export default News
