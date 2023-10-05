import React from 'react'



const NewsItem=(props)=> {

    let { imageUrl, newsUrl, title, description, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={
            {
              display:'flex',
              position:'absolute',
              justifyContent:'flex-end',
              right:'0'
            }
          }>
          <span  className="badge rounded-pill bg-danger" >
           {source}

          </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}... </p>
            <p  className="card-text"><small  className="text-body-secondary">By { author?author:"Unknown"} at {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem;


