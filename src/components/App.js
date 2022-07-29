import logo from '../images/scream-team-04.png';
import photo from '../images/photo2.png';
import knife from '../images/knife.png';
import logoAdalab from '../images/logo-adalab.png';
import '../styles/App.scss';
import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


function App() {
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: ''
  });
  
  
  if (dataCard.photo === '') {
    setDataCard({...dataCard,
      photo: photo});
  };
 
const fr = new FileReader();
const myFileField = React.createRef();

const getImage = () => {
  setDataCard({...dataCard,
    photo: fr.result});

};

const uploadImage = (ev) => {
  if (ev.currentTarget.files.length > 0) {
    const myFile = ev.currentTarget.files[0];
    fr.addEventListener('load', getImage);
    fr.readAsDataURL(myFile);
  }
};

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setDataCard({
      ...dataCard, [inputName]: inputValue
    });
  }

  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: photo
    })
  }
  const handleCollapsed = (ev) => {
    console.log(ev.currentTarget);
  }

  return (
    <div>
      <header className="header__profile">
        <a className="header__profile__link" href="./index.html" title="Volver a la página principal">
          <img className="header__profile__logo" src={logo} alt="Logo Awesome Profile Cards" title="Logo Awesome Profile Cards" />
        </a>
      </header>


      <main className="main-profile">


        <section className="preview">
          <button className="reset-button js-resetBtn" onClick={handleReset}>
            <i className="fa-regular fa-trash-can"></i>
            Reset
          </button>
          <selection className="card">
            <div className="rectangle">
            </div>
            <selection className="information ">
              <p className="name js-preview-name">{dataCard.name || 'Nombre Apellido'}</p>
              <p className="developer js-preview-job">{dataCard.job || 'Front-end developer'}</p>
            </selection>

            <img className="photo js-preview-photo" src={dataCard.photo} alt="profile" />
            <ul className="icons">
              <li>
                <a className="icon-phone icon-border js-preview-phone card-links" title="Teléfono" href={'tel:' + dataCard.phone}>
                  <i className="fa-solid fa-mobile-screen-button fa-xl"></i>
                </a>
              </li>
              <li>
                <a className="icon-email icon-border js-preview-email card-links" target="_blank" title="Email" href={'mailto:' + dataCard.email}>
                  <i className="fa-solid fa-envelope fa-xl"></i>
                </a>
              </li>
              <li>
                <a className="icon-linkedin icon-border js-preview-link card-links" target="_blank" title="Linkedin">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </li>
              <li>
                <a className="icon-github icon-border js-preview-github card-links" target="_blank" title="Github">
                  <i className="fa-brands fa-github-alt fa-xl"></i>
                </a>
              </li>
            </ul>
          </selection>
        </section>
        <section className="design-profile">
          <form action="https://adalab-server-form.herokuapp.com" method="post" className="form js-allInputs">
            <fieldset className="design-section collapsablemenu" onClick={handleCollapsed}>
              <legend className="legend-design js-legend">
                <i className="icon fa-regular fa-object-ungroup"></i>
                <span className="fill">Diseña</span>
                <img src={knife} className="skull" alt="" />
              </legend>
              <section className="design-colors section-to-hide">
                <h3 className="design-subtitle">Colores</h3>
                <div className="colors-options">
                  <div className="option">
                    <input
                      checked={dataCard.palette === '1'}
                      onChange={handleInput}
                      type="radio" name="palette" value="1" className="color-palette-input1 js-palettes" id="1" title="viernes 13" />
                    <div className="option" title="viernes 13">
                      <div className="color1"></div>
                      <div className="color2"></div>
                      <div className="color3"></div>
                    </div>
                  </div>
                  <div className="option">
                    <input
                      checked={dataCard.palette === '2'}
                      onChange={handleInput}
                      type="radio" name="palette" value="2" className="color-palette-input2 js-palettes" id="2" title="Elm Street" />
                    <div className="option" title="Elm Street">
                      <div className="color4"></div>
                      <div className="color5"></div>
                      <div className="color6"></div>
                    </div>
                  </div>
                  <div className="option">
                    <input
                      checked={dataCard.palette === '3'}
                      onChange={handleInput}
                      type="radio" name="palette" value="3" className="color-palette-input3 js-palettes" id="3" title="the blair witch" />
                    <div className="option" title="the blair witch">
                      <div className="color7"></div>
                      <div className="color8"></div>
                      <div className="color9"></div>
                    </div>
                  </div>
                  <div className="option">
                    <input
                      checked={dataCard.palette === '4'}
                      onChange={handleInput}
                      type="radio" name="palette" value="4" className="color-palette-input4 js-palettes" id="4" title="Freddy come to me" />
                    <div className="option" title="Freddy come to me">
                      <div className="color10"></div>
                      <div className="color11"></div>
                      <div className="color12"></div>
                    </div>
                  </div>
                </div>
              </section>
            </fieldset>
            <fieldset className="fill-section collapsablemenu" onClick={handleCollapsed}>
              <legend className="legend-fill js-legend">
                <i className="fa-solid fa-xl fa-keyboard"></i>
                <span className="fill">rellena</span>
                <img src={knife} className="skull" alt="" />
              </legend>

              <div className="fill-inputs-section section-to-hide">
                <label htmlFor="name" className="text-fill">nombre completo</label>
                <input type="text" name="name"
                  value={dataCard.name}
                  onChange={handleInput}
                  placeholder="Ej: Ada Lovelace" className="js-name-input" required="" />

                <label htmlFor="jobpsition" className="text-fill">puesto</label>
                <input type="text" name="job" placeholder="Ej: Front-End developer" className="js-job-input"
                  value={dataCard.job}
                  onChange={handleInput}
                  required="" />

                <div className="div-text-fill">
                  <div>
                    <p className="profile">imagen de perfil</p>
                    <label className="text-fill image_button" htmlFor="image">añadir imagen</label>
                    <input type="file" name="photo"
                      ref={myFileField}
                      onChange={uploadImage}
                      id="image" className="image__hiddenField js__profile-upload-btn js-img-input" required="" />
                  </div>
                  <div className="profile__preview js__profile-image" style={{ backgroundImage: `url(${dataCard.photo})` }}></div>
                </div>

                <label htmlFor="email" className="text-fill">email</label>
                <input type="text" name="email"
                  value={dataCard.email}
                  onChange={handleInput} placeholder="Ej: adalab@adalab" required="" className="js-email-input" />

                <label htmlFor="phone" className="text-fill js-preview-phone">teléfono</label>
                <input type="phone" name="phone"
                  value={dataCard.phone}
                  onChange={handleInput}
                  placeholder="Ej: 789 653 214" className="js-phone-input" />

                <label htmlFor="linkedin" className="text-fill">linkedin</label>
                <input type="text" name="linkedin"
                  value={dataCard.linkedin}
                  onChange={handleInput} placeholder="Ej: https://www.linkedin.com/school/adalab/" className="js-link-input" required="" />
                <label htmlFor="github" className="text-fill">github</label>
                <input type="text" name="github"
                  value={dataCard.github}
                  onChange={handleInput} className="js-git-input" placeholder="Ej: @Adalab"
                  required="" />
              </div>
            </fieldset>

            <fieldset className="share-section collapsablemenu" onClick={handleCollapsed}>
              <legend className="legend-share js-legend">
                <i className="icon fa-solid fa-share-nodes fa-xl"></i>
                <p className="share">comparte</p>
                <img src={knife} className="skull" alt="" />
              </legend>

              <div className="container-collapsible section-to-hide ">
                <div className="button-container">
                  <button className="button-create" name="newCardButton">
                    <i className="fa-solid fa-address-card"></i>
                    <span>crear tarjeta</span>
                  </button>
                </div>

                <div className="check">
                  <h3 className="share-text">¡Rellena todo el formulario!</h3>
                </div>

                <div className="created collapsed">
                  <h3 className="share-text">la tarjeta ha sido creada:</h3>
                  <a className="link" href="#" target="_blank">https://awesome-profile-card.com?id=A456DF0001</a>
                  <a className="button-share" href="#" target="_blank">
                    <i className="fa-solid fa-address-card"></i>
                    <span> Compartir en twitter</span>
                  </a>
                </div>
              </div>
            </fieldset>

          </form>

        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">ScreamTeam profile-cards @2022</p>
        <img className="footer__logo" src={logoAdalab} alt="Logo Adalab" title="Logo Adalab" />
      </footer>
    </div>
  );
}





export default App;
