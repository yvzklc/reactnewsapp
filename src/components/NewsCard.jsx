import React from "react";
import "../scss/style.scss";

const NewsCard = ({ data }) => {
  return (
    <div className="main">
      {data.map((item, index) => (
        <div className="Card" key={index}>
          <img className="newImage" src={item.image} alt="" width="250px" />
          <h1 className="newTitle">{item.title}</h1>
          <span className="newSummary">{item.content}</span>
          <span className="newSource">{item.source.name}</span>
          <span className="newDate">
            {item.publishedAt && item.publishedAt.split("T")[0]}
          </span>
          <button className="newAuthor btn">
            <a className="newUrl" target="blank" href={item.url}>
              Read More...
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
