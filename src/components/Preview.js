import photo from '../images/photo2.png';
import '../styles/layout/preview.scss';
import ls from '../services/localStoraged';
import Profile from './Profile';
import IconPreview from './IconPreview';
import Button from './Button';



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
    
    
      <Button classContainer="" className="reset-button" icon="fa-regular fa-trash-can" text="Reset" name="resetButton" onClick={handleReset} />
      
      <selection className="card">
      <div className="rectangle">
      </div>
      <selection className="information ">
        <p className="name">{props.dataCard.name || 'Nombre Apellido'}</p>
        <p className="developer">{props.dataCard.job || 'Front-end developer'}</p>
      </selection>

      <Profile avatar={props.dataCard.photo} />
      <ul className="icons">
        <IconPreview title='Teléfono' href={'tel:' + props.dataCard.phone} className="phone" icon={"fa-solid fa-mobile-screen-button fa-xl"} />

        <IconPreview title='Email' href={'mailto:' + props.dataCard.email} className="email" icon={"fa-solid fa-envelope fa-xl"} />

        <IconPreview title='Linkedin' href={props.dataCard.linkedin} className="linkedin" icon={"fa-brands fa-linkedin fa-xl"} />

        <IconPreview title='Github' href={props.dataCard.github} className="github" icon={"fa-brands fa-github-alt fa-xl"} />
      </ul>
    </selection>
  </section>);
}

export default Preview;