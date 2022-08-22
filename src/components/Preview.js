import photo from '../images/photo2.png';
import '../styles/layout/preview.scss';
import ls from '../services/localStoraged';

function Preview (props) {
    
    const handleReset = (ev) => {
        ev.preventDefault();
        props.setDataCard({
          palette: '1',
          name: '',
          job: '',
          phone: '',
          email: '',
          linkedin: '',
          github: '',
          photo: photo
        })
        ls.clear();
      }

    return (<section className="preview">
    <button className="reset-button js-resetBtn" onClick={handleReset}>
      <i className="fa-regular fa-trash-can"></i>
      Reset
    </button>
    <selection className="card">
      <div className="rectangle">
      </div>
      <selection className="information ">
        <p className="name js-preview-name">{props.dataCard.name || 'Nombre Apellido'}</p>
        <p className="developer js-preview-job">{props.dataCard.job || 'Front-end developer'}</p>
      </selection>

      <img className="photo js-preview-photo" src={props.dataCard.photo} alt="profile" />
      <ul className="icons">
        <li>
          <a className="icon-phone icon-border js-preview-phone card-links" title="Teléfono" href={'tel:' + props.dataCard.phone}>
            <i className="fa-solid fa-mobile-screen-button fa-xl"></i>
          </a>
        </li>
        <li>
          <a className="icon-email icon-border js-preview-email card-links" target="_blank" title="Email" href={'mailto:' + props.dataCard.email} rel="noreferrer">
            <i className="fa-solid fa-envelope fa-xl"></i>
          </a>
        </li>
        <li>
          <a className="icon-linkedin icon-border js-preview-link card-links" target="_blank" rel="noreferrer" title="Linkedin" href={props.dataCard.linkedin}>
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </li>
        <li>
          <a className="icon-github icon-border js-preview-github card-links" target="_blank" title="Github" href={props.dataCard.github} rel="noreferrer">
            <i className="fa-brands fa-github-alt fa-xl"></i>
          </a>
        </li>
      </ul>
    </selection>
  </section>);
}

export default Preview;