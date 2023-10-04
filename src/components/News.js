import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    article=[
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Beaumont & Brook named PCA players of the year",
            "description": "England batters Tammy Beaumont and Harry Brook are named the Professional Cricketers' Association women's and men's players of the year.",
            "url": "http://www.bbc.co.uk/sport/cricket/66987161",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/972D/production/_131310783_bbc-sport-index-imagery-2-split-images-gradient-dc0ca7c2-ffb0-445b-9720-17ed38ffab11.png",
            "publishedAt": "2023-10-02T22:22:19.1851076Z",
            "content": "England batters Tammy Beaumont and Harry Brook have been named the Professional Cricketers' Association women's and men's players of the year. \r\nIn the Ashes Test against Australia in June, opener Be… [+2559 chars]"
        }
    ]

    constructor(){
        super();
        console.log("Welcome to universe");
         this.state={
         article:this.article,
        loading: false}

    }
  render() {
    return (
      <div className='container my-3' >
        <h2>NewsMonkey-Top Headlines</h2>
        <div className="row">
        {this.state.article.map((element)=>{
           { console.log(element)}
        <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>
        })}
        </div>
        
      </div>
    )
  }
}

export default News
