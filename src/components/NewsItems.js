import React from "react";

const NewsItems = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div className="my-3">
        <div class="card" style={{ width: "18rem" }}>
          <img src={imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
            <a href={newsUrl} target="blank" class="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItems;
