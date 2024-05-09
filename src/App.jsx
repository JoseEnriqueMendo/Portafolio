import React, { useState, useEffect } from 'react';
import './App.css';
import { ProyectCard } from './components/ProyectCard/ProyectCard';
import { ExperienceCard } from './components/ExperienceCard/ExperienceCard';
import { IoIosStarHalf } from 'react-icons/io';
import { FaBriefcase, FaFileDownload, FaCopy } from 'react-icons/fa';
import { MdEventAvailable, MdContactPhone, MdEmail, MdSend } from 'react-icons/md';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import programador from './assets/programador.png';
import programador2 from './assets/programador2.png';
import brisasMarinasAdm from './assets/brisasMarinasAdm.png';
import { downloadFile, copyText, openEmail } from '../Utils/helpers.js';
import { Tooltip } from 'react-tooltip';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY != 0 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialCards = (name, icon, url) => {
    return (
      <a className="socialCard" href={url} target="_blank">
        <img src={icon} className="img-socialCard" />
        {name}
      </a>
    );
  };

  return (
    <div className="app-container">
      <section id="section-introduction">
        <div className="introduction-container">
          {isVisible && (
            <div className="headBoard">
              <div className="img-name-headBoard">
                <img src={programador} className="img-headBoard" />
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
          )}

          <div className="left-introduction-container">
            <figure className="figure-img-introduction">
              <img src={programador} className="img-introduction changeImage" />
              <img src={programador2} className="img-introduction-second changeImage2" />
            </figure>
          </div>
          <div className="rigth-introduction-container">
            <h1 className="name-introduction">Jose Enrique Mendo H.</h1>
            <p className="abstract-introduction">
              ¡Hola! Soy un apasionado desarrollador web Junior especializado en el backend.
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
        </div>
      </section>

      <section id="section-Experience">
        <h3 className="subtitle">
          Experiencia <FaBriefcase />
        </h3>

        <ExperienceCard
          placeWork={' CEFIS Fisioterapia'}
          position={'Jr Front-End Developer'}
          begin={'Jan 2023 '}
          end={'Jan 2024'}
          functionalities={[
            'Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.',
            'Designing a user interface from scratch and implementing it in a web interface using TailwindCSS.',
            'It increased the data capture speed of patients by 200% and improved efficiency in managing appointments and services.',
          ]}
        ></ExperienceCard>
        <ExperienceCard
          placeWork={' CEFIS Fisioterapia'}
          position={'Jr Front-End Developer'}
          begin={'Jan 2023 '}
          end={'Jan 2024'}
          functionalities={[
            'Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.',
            'Designing a user interface from scratch and implementing it in a web interface using TailwindCSS.',
            'It increased the data capture speed of patients by 200% and improved efficiency in managing appointments and services.',
          ]}
        ></ExperienceCard>
      </section>

      <section id="section-proyects">
        <h3 className="subtitle">
          Proyectos <IoIosStarHalf />
        </h3>
        <ProyectCard
          imgProyect={brisasMarinasAdm}
          nameProyect={'Brisas Marinas Admin Web'}
          abstractProyect={
            'Brisas Marinas Admin Web: gestiona menú, categorías y pedidos de una cevichería online, facilitando la administración y experiencia del usuario.'
          }
          urlCode={'https://github.com/JoseEnriqueMendo/BrisasMarinasFE-ADM'}
          urlLive={'https://brisas-marinas-fe-adm.vercel.app'}
          toolsProyect={[reactLogo, viteLogo]}
        ></ProyectCard>

        <ProyectCard
          imgProyect={'https://www.ituser.es/files/202305/software-aplicacion-desarrollo.jpg'}
          nameProyect={'Brisas Marinas cliente Web'}
          abstractProyect={'Play, create playlists, like songs and discover music trends.'}
          toolsProyect={[reactLogo, viteLogo]}
        ></ProyectCard>
        <ProyectCard
          imgProyect={'https://www.ituser.es/files/202305/software-aplicacion-desarrollo.jpg'}
          nameProyect={'Music App'}
          abstractProyect={'Play, create playlists, like songs and discover music trends.'}
          toolsProyect={[reactLogo, viteLogo]}
        ></ProyectCard>
      </section>

      <section id="section-social">
        <h3 className="subtitle">
          Redes Sociales <MdContactPhone />
        </h3>
        <div className="socialCards-container">
          {socialCards(
            'Linkedin',
            linkedin,
            'https://www.linkedin.com/in/jose-enrique-mendo-huapaya-0758ab261/'
          )}
          {socialCards('Github', github, 'https://github.com/JoseEnriqueMendo')}
          {socialCards('Twitter', twitter, '')}
        </div>
      </section>

      <section id="section-email">
        <h3 className="subtitle">
          Contáctame <MdEmail />
        </h3>
        <div className="email-container">
          <div className="showEmail" id="email">
            enriquemendohuapaya@gmail.com
          </div>

          <div
            className="goEmail"
            onClick={() => {
              openEmail(document.getElementById('email').textContent);
            }}
            data-tooltip-id="goEmail-tooltip"
            data-tooltip-content="Ir al correo"
          >
            <MdSend className="iconEmail" />
            <Tooltip id="goEmail-tooltip" className="tooltip-style" />
          </div>
          <div
            className="copyEmail"
            onClick={() => {
              copyText(document.getElementById('email').textContent);
            }}
            data-tooltip-id="copyEmail-tooltip"
            data-tooltip-content="Copiar correo"
          >
            <Tooltip id="copyEmail-tooltip" />
            <FaCopy className="iconEmail" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
