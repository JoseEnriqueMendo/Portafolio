import { Programador_anime } from '../../../Utils/getImgs';
import { FaBriefcase } from 'react-icons/fa';
import { IoIosStarHalf } from 'react-icons/io';
import { MdContactPhone } from 'react-icons/md';

const HeadBord = () => {
  return (
    <div className="headBoard">
      <div className="img-name-headBoard">
        <img src={Programador_anime} className="img-headBoard" />
        <a href="#section-introduction" className="name-headBoard">
          Enrique MH
        </a>
      </div>
      <span></span>

      <div className="button-headBoard">
        <a href="#section-Experience">
          Experiencia <FaBriefcase className="center-icon" />
        </a>
      </div>
      <span></span>

      <div className="button-headBoard">
        <a href="#section-proyects">
          Proyectos <IoIosStarHalf className="center-icon" />
        </a>
      </div>
      <span></span>

      <div className="button-headBoard">
        <a href="#section-social">
          Contactos <MdContactPhone className="center-icon" />
        </a>
      </div>
    </div>
  );
};

export default HeadBord;
