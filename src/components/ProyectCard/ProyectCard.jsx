import React from 'react';
import './ProyectCard.css';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

export const ProyectCard = ({
  imgProyect,
  nameProyect,
  abstractProyect,
  toolsProyect,
  urlCode,
  urlLive,
}) => {
  const iconTool = (item) => {
    return <img src={item} alt="Tool Icon" className="iconTool" />;
  };
  const viewCard = (url, type) => {
    return (
      <div className="viewCard">
        <a href={url} target="_blank" className="url-viewCard">
          {type}
          {type === 'Code' ? <FaGithub /> : <FaLink className="icon-link" />}
        </a>
      </div>
    );
  };

  return (
    <div className="container-ProyectCard">
      <div className="container-Left">
        <img className="imgProyect" src={imgProyect} alt="Project" />
      </div>
      <div className="container-Right">
        <h2 className="nameProyect">{nameProyect}</h2>
        <p className="abstractProyect">{abstractProyect}</p>
        <div className="itemTool-container">
          {toolsProyect.map((item, index) => (
            <React.Fragment key={index}>{iconTool(item)}</React.Fragment>
          ))}
        </div>
        <div className="view-container">
          {urlCode && viewCard(urlCode, 'Code')}
          {urlLive && viewCard(urlLive, 'Live')}
        </div>
      </div>
    </div>
  );
};
