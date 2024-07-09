import { copyText, openEmail } from '../../../Utils/helpers';
import { MdEmail, MdSend } from 'react-icons/md';
import { FaCopy } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const SocialContent = () => {
  return (
    <>
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
    </>
  );
};

export default SocialContent;
