import React, { Component } from "react";
import NewsItems from "./NewsItems";
// import Spinner from "./Spinner"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
      category:'general'
    }

    static propTypes = {
      category:PropTypes.string
    }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      totalResults:0
    };
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&sortBy=popularity&apiKey=14a1d37c502b42a6952834b2e0191734`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading: false
    })
  }

  // handleNext = async ()=>{
  //   let url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=14a1d37c502b42a6952834b2e0191734&page=${this.state.page + 1}&pageSize=20`
  //   let data = await fetch(url)
  //   let parsedData = await data.json()

  //   this.setState({
  //     page:this.state.page + 1,
  //     articles: parsedData.articles
  //   })
  // }

  // handlePrev = async ()=>{
  //   let url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=14a1d37c502b42a6952834b2e0191734&page=${this.state.page - 1}&pageSize=20`
  //   let data = await fetch(url)
  //   let parsedData = await data.json()

  //   this.setState({
  //     page:this.state.page - 1,
  //     articles: parsedData.articles
  //   })
  // }
  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&sortBy=popularity&apiKey=14a1d37c502b42a6952834b2e0191734`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    loading: false, 
  })
  } 

  render() {  
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Headlines</h2>
        {/* {this.state.loading &&<Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        ></InfiniteScroll>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4">
                <NewsItems
                  title={e.title}
                  description={e.description} 
                  imageUrl={e.urlToImage}
                  newsUrl={e.url}
                  author={e.author}
                  date={e.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrev}>Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNext} >Next</button>
        </div>
      </div>
    );
  }
}

export default News;
