import knife from '../images/knife.png';
import React from 'react';
import GetImage from './GetImage';
import photo from '../images/photo2.png';
import Collapsable from './Collapsable';

function Fill(props) {
  const handleInputFil = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    props.handleInput(inputName, inputValue);
  };

  return (
    <fieldset className="fill-section collapsablemenu">
      <Collapsable
        name="fill"
        className="legend-fill"
        icon="fa-solid fa-xl fa-keyboard"
        classSpan="fill"
        text="Rellena"
        handleCollapsed={props.handleCollapsed}
      />

      <div
        className={`fill-inputs-section section-to-hide ${props.collapsed[1]}`}
      >
        <label htmlFor="name" className="text-fill">
          nombre completo
        </label>
        <input
          type="text"
          name="name"
          value={props.dataCard.name}
          onChange={handleInputFil}
          placeholder="Ej: Ada Lovelace"
          className="js-name-input"
          required=""
        />

        <label htmlFor="jobpsition" className="text-fill">
          puesto
        </label>
        <input
          type="text"
          name="job"
          placeholder="Ej: Front-End developer"
          className="js-job-input"
          value={props.dataCard.job}
          onChange={handleInputFil}
          required=""
        />

        <GetImage
          avatar={props.dataCard.photo}
          updateAvatar={props.handleInput}
        />

        <label htmlFor="email" className="text-fill">
          email
        </label>
        <input
          type="text"
          name="email"
          value={props.dataCard.email}
          onChange={handleInputFil}
          placeholder="Ej: adalab@adalab"
          required=""
          className="js-email-input"
        />

        <label htmlFor="phone" className="text-fill js-preview-phone">
          teléfono
        </label>
        <input
          type="phone"
          name="phone"
          value={props.dataCard.phone}
          onChange={handleInputFil}
          placeholder="Ej: 789 653 214"
          className="js-phone-input"
        />

        <label htmlFor="linkedin" className="text-fill">
          linkedin
        </label>
        <input
          type="text"
          name="linkedin"
          value={props.dataCard.linkedin}
          onChange={handleInputFil}
          placeholder="Ej: https://www.linkedin.com/school/adalab/"
          className="js-link-input"
          required=""
        />
        <label htmlFor="github" className="text-fill">
          github
        </label>
        <input
          type="text"
          name="github"
          value={props.dataCard.github}
          onChange={handleInputFil}
          className="js-git-input"
          placeholder="Ej: @Adalab"
          required=""
        />
      </div>
    </fieldset>
  );
}

export default Fill;
