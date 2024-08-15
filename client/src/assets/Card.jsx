import React from 'react';
import './card.css';
import PropTypes from 'prop-types';
const Card = ({ image, title, description, meetlink}) => {
    const eventjoin = ()=>{
        window.location.href=meetlink;
    }
  return (
    <div>
      
    <div className="card">
       
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className='card-button' onClick={eventjoin}>Join now</button>
      </div>
    </div>
    </div>
  );
};
Card.propTypes = {
    image: PropTypes.string.isRequired, // URL to the image
    title: PropTypes.string.isRequired, // Title text
    description: PropTypes.string.isRequired, // Description text
    meetlink: PropTypes.string.isRequired // URL to join the event
};

export default Card;