import React from 'react';
import GigPoster from '../../assets/images/Gig_28Mar_Mark Morriss_Mars Alexdander.jpg';
import './news.scss';

const gigLink = 'http://bit.ly/o2islington';

const News = () => (
  <div className="news">
    <div className="date">
    Mon 9th March 2020
    </div>

    <div className="newsBody">
      <div className="description">
        <div className="text">
            So excited to announce that I'll be performing at the O2 Islington Academy on March 28th, opening for Mark Morriss of The Bluetones!
        </div>
        <div className="link">
            Tickets
          {' '}
          <a href={gigLink} target="_blank" rel="noopener noreferrer">here</a>
          .
        </div>
      </div>
      <img src={GigPoster} alt={GigPoster} />
    </div>

  </div>
)

export default News;
