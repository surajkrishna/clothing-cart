import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className='background-image'
    />
    <div className="content">
      <h1 className="title">
        {title}
      </h1>
      <span className="subtitle">
        SHOP NOW
      </span>
    </div>
  </div>
);

export default withRouter(MenuItem);
