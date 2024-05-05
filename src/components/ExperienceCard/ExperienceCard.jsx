import React from 'react';
import './ExperienceCard.css';

export const ExperienceCard = ({ placeWork, position, begin, end, functionalities }) => {
  const pointFunctionalities = () => {
    return (
      <ul className="lista-pointFunctionalities">
        {functionalities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="ExperienceCard-container">
      <h4 className="placeWork">
        {position} • {placeWork}
      </h4>
      <p className="time-ExperienceCard">
        {begin}—{end}
      </p>
      {functionalities && pointFunctionalities()}
    </div>
  );
};
