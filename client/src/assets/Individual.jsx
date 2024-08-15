
// const Individual = (name,image,txt) => {
//   return (
//     <div className="wrapper">
//                     <h2>{name}</h2>
//                     <div className="image">
//                         <img src={image} alt="Webinars" />
//                     </div>
//                     <div className="content">
//                         <h1>{txt}</h1>
//                     </div>
//                 </div>
//   )
// }

// export default Individual;
// import React from 'react';
import PropTypes from 'prop-types';

const Individual = ({ name, image, txt }) => {
  return (
    <div className="wrapper">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <h1>{txt}</h1>
      </div>
      <h2>{name}</h2>
    </div>
  );
};

Individual.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};

export default Individual;
