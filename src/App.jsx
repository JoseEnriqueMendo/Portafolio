import React, { useState, useEffect } from 'react';
import { downloadFile, copyText, openEmail } from '../Utils/helpers.js';
import { Tooltip } from 'react-tooltip';
import { ProyectCard } from './components/ProyectCard/ProyectCard';
import { ExperienceCard } from './components/ExperienceCard/ExperienceCard';
import { IoIosStarHalf } from 'react-icons/io';
import { FaBriefcase, FaFileDownload, FaCopy } from 'react-icons/fa';
import { MdEventAvailable, MdContactPhone, MdEmail, MdSend } from 'react-icons/md';
import {
  Post_brisasAdm,
  Post_brisasBE,
  Post_brisasCli,
  Programador_anime,
  Programador_real,
} from '../Utils/getImgs.js';

import {
  Logo_js,
  Logo_html,
  Logo_react,
  Logo_twitter,
  Logo_linkedin,
  Logo_github,
  Logo_vite,
  Logo_css,
  Logo_ts,
  Logo_postgress,
} from '../Utils/getIcons.js';

import './App.css';
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
          )}

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
        </div>
      </section>

      <section id="section-Experience">
        <h3 className="subtitle">
          Experiencia <FaBriefcase />
        </h3>

        <ExperienceCard
          placeWork={'Sin Experiencia'}
          position={'Buscando Trabajo'}
          begin={'Disponibilidad '}
          end={' Inmediata'}
          functionalities={[
            'Tengo conocimientos sólidos en HTML, CSS y JavaScript.',
            'Estoy enfocado en aprender y mejorar constantemente para ofrecer soluciones eficientes.',
            'Soy capaz de trabajar en equipo y comunicarme efectivamente.',
            'Estoy familiarizado con herramientas modernas como React.js, Vue.js, MySQL y MongoDB.',
          ]}
        ></ExperienceCard>
      </section>

      <section id="section-proyects">
        <h3 className="subtitle">
          Proyectos <IoIosStarHalf />
        </h3>
        <ProyectCard
          imgProyect={Post_brisasBE}
          nameProyect={'Brisas Marinas Backend'}
          abstractProyect={
            'Brisas Marinas Backend: Servicio integral que gestiona datos para Brisa Admin y Cliente, optimizando la experiencia y operaciones de la cevichería online.'
          }
          toolsProyect={[Logo_js, Logo_postgress]}
          urlCode={'https://github.com/JoseEnriqueMendo/BrisasMarinasBE'}
        ></ProyectCard>

        <ProyectCard
          imgProyect={Post_brisasAdm}
          nameProyect={'Brisas Marinas Admin Web'}
          abstractProyect={
            'Brisas Marinas Admin Web: gestiona menú, categorías y pedidos de una cevichería online, facilitando la administración y experiencia del usuario.'
          }
          urlCode={'https://github.com/JoseEnriqueMendo/BrisasMarinasFE-ADM'}
          urlLive={'https://brisas-marinas-fe-adm.vercel.app'}
          toolsProyect={[Logo_react, Logo_vite, Logo_ts, Logo_html, Logo_css]}
        ></ProyectCard>

        <ProyectCard
          imgProyect={Post_brisasCli}
          nameProyect={'Brisas Marinas cliente Web'}
          abstractProyect={
            'Brisas Marinas Cliente Web: Explora y compra platos marinos con navegación intuitiva, mejorando la experiencia y alcanze de la cevichería.'
          }
          toolsProyect={[Logo_react, Logo_vite, Logo_ts, Logo_html, Logo_css]}
          urlCode={'https://github.com/JoseEnriqueMendo/BrisasMarinasFE-CLI'}
          urlLive={'https://brisas-marinas-fe-cli.vercel.app/'}
        ></ProyectCard>
      </section>

      <section id="section-social">
        <h3 className="subtitle">
          Redes Sociales <MdContactPhone />
        </h3>
        <div className="socialCards-container">
          {socialCards(
            'Linkedin',
            Logo_linkedin,
            'https://www.linkedin.com/in/jose-enrique-mendo-huapaya-0758ab261/'
          )}
          {socialCards('Github', Logo_github, 'https://github.com/JoseEnriqueMendo')}
          {socialCards('Twitter', Logo_twitter, '')}
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
