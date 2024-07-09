import { useState, useEffect } from 'react';
// import { Tooltip } from 'react-tooltip';
//import components
import { ProyectCard } from './components/ProyectCard/ProyectCard';
import { ExperienceCard } from './components/ExperienceCard/ExperienceCard';
import SocialContent from './components/SocialContent/SocialContent.jsx';
import HeadBord from './components/HeadBoard/HeadBord.jsx';
import IntroductionContent from './components/IntroductionContent/IntroductionContent.jsx';
// import icons
import { IoIosStarHalf } from 'react-icons/io';
import { FaBriefcase } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';

import { Logo_twitter, Logo_linkedin, Logo_github } from '../Utils/getIcons.js';
// import data
import proyects from './data/proyects.json';
import './App.css';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dataCard, setDataCard] = useState([]);

  const loadData = () => {
    setDataCard(proyects);
  };

  const handleChange = (event) => {
    if (event.target.value === 'frontend') {
      setDataCard(
        proyects.filter((item) => {
          return item.type === 'frontend';
        })
      );
      return;
    }
    if (event.target.value === 'backend') {
      setDataCard(
        proyects.filter((item) => {
          return item.type === 'backend';
        })
      );
      return;
    }
    loadData();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY != 0 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', handleScroll);
    loadData();
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
    <main className="app-container">
      <section id="section-introduction">
        <div className="introduction-container">
          {isVisible && <HeadBord></HeadBord>}
          <IntroductionContent></IntroductionContent>
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
        <div className="Subtitle-Filter">
          <h3 className="subtitle">
            Proyectos <IoIosStarHalf />
          </h3>
          <select onChange={handleChange}>
            <option value={'-'}>Todos</option>
            <option value={'frontend'}>FrontEnd</option>
            <option value={'backend'}>Backend</option>
          </select>
        </div>

        {dataCard.map((item, index) => {
          return (
            <ProyectCard
              key={index}
              imgProyect={item.imgProyect}
              nameProyect={item.nameProyect}
              abstractProyect={item.abstractProyect}
              toolsProyect={item.toolsProyect}
              urlCode={item.urlCode}
              urlLive={item.urlLive}
            ></ProyectCard>
          );
        })}
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
        <SocialContent></SocialContent>
      </section>
    </main>
  );
};

export default App;
