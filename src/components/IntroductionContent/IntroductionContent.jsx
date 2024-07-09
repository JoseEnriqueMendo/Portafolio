import { Programador_anime, Programador_real } from '../../../Utils/getImgs';
import { downloadFile } from '../../../Utils/helpers';
import { MdEventAvailable } from 'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const IntroductionContent = () => {
  return (
    <>
      <div className="left-introduction-container">
        <figure className="figure-img-introduction">
          <img src={Programador_anime} className="img-introduction changeImage" />
          <img src={Programador_real} className="img-introduction-second changeImage2" />
        </figure>
      </div>
      <div className="rigth-introduction-container">
        <h1 className="name-introduction">Jose Enrique Mendo H.</h1>
        <p className="abstract-introduction">
          ¡Hola! Soy un desarrollador web junior apasionado con conocimientos tanto en el
          backend como en el frontend.
        </p>

        <div className="extra-buttons-container">
          <div className="looking-job-button">
            <MdEventAvailable className="estado-icon" />
            Buscando Empleo
          </div>
          <div
            className="cv-button"
            id='cv-button"'
            onClick={() => {
              downloadFile();
            }}
            data-tooltip-id="cv-button-tooltip"
            data-tooltip-content="Descargar CV"
          >
            <FaFileDownload />
            CV
            <Tooltip id="cv-button-tooltip" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionContent;
