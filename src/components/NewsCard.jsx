import React from 'react';
import "../scss/style.scss";

const NewsCard = ({ data }) => {

  return (
    <div className='main'>
      {data.map((item, index) => (
        <div className='Card' key={index}>
          <img
            className='newImage'
            src={`https://static01.nyt.com/${item.multimedia && item.multimedia[0] && item.multimedia[0].url}`}
            alt=""
            width="250px"
          />
          <h1 className='newTitle'>{item.headline && item.headline.main}</h1>
          <span className='newSummary'>{item.abstract}</span>
          <span className='newCategory'>{item.news_desk}</span>
          <span className='newDate'>{item.pub_date && item.pub_date.split('T')[0]}</span>
          <button className='newAuthor btn'>
            <a className='newUrl' target='blank' href={item.web_url}>
              {item.byline && item.byline.original}
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
