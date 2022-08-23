import knife from '../images/knife.png';
import Image from './Image';

function Fill (props) {
    return (<fieldset className="fill-section collapsablemenu" onClick={props.handleCollapsed}>
    <legend className="legend-fill js-legend">
      <i className="fa-solid fa-xl fa-keyboard"></i>
      <span className="fill">rellena</span>
      <img src={knife} className="skull" alt="" />
    </legend>

    <div className="fill-inputs-section section-to-hide">
      <label htmlFor="name" className="text-fill">nombre completo</label>
      <input type="text" name="name"
        value={props.dataCard.name}
        onChange={props.handleInput}
        placeholder="Ej: Ada Lovelace" className="js-name-input" required="" />

      <label htmlFor="jobpsition" className="text-fill">puesto</label>
      <input type="text" name="job" placeholder="Ej: Front-End developer" className="js-job-input"
        value={props.dataCard.job}
        onChange={props.handleInput}
        required="" />
        <Image updateAvatar={props.setDataCard} dataCard={props.dataCard}/>
      <label htmlFor="email" className="text-fill">email</label>
      <input type="text" name="email"
        value={props.dataCard.email}
        onChange={props.handleInput} placeholder="Ej: adalab@adalab" required="" className="js-email-input" />

      <label htmlFor="phone" className="text-fill js-preview-phone">teléfono</label>
      <input type="phone" name="phone"
        value={props.dataCard.phone}
        onChange={props.handleInput}
        placeholder="Ej: 789 653 214" className="js-phone-input" />

      <label htmlFor="linkedin" className="text-fill">linkedin</label>
      <input type="text" name="linkedin"
        value={props.dataCard.linkedin}
        onChange={props.handleInput} placeholder="Ej: https://www.linkedin.com/school/adalab/" className="js-link-input" required="" />
      <label htmlFor="github" className="text-fill">github</label>
      <input type="text" name="github"
        value={props.dataCard.github}
        onChange={props.handleInput} className="js-git-input" placeholder="Ej: @Adalab"
        required="" />
    </div>
  </fieldset>)
}

export default Fill;