import './ExperienceCard.css';
import PropTypes from 'prop-types';

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
ExperienceCard.propTypes = {
  placeWork: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  begin: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
};
