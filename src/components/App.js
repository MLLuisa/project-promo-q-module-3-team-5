import photo from '../images/photo2.png';
import knife from '../images/knife.png';
import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';
import dataApi from '../services/dataApi';
import ls from '../services/localStoraged';
import Header from './Header';
import Footer from './Footer';
import '../styles/core/Reset.scss';
import '../styles/layout/main-profile.scss';
import '../styles/layout/main-home.scss';
import '../styles/layout/design.scss';
import '../styles/layout/fill.scss';
import '../styles/layout/share.scss';
import Design from './Design';

function App() {
  const [dataCard, setDataCard] = useState(ls.get('data', {
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: ''
  }));
  const [resultCard, setResultCard] = useState({});
  
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

  // Crear tarjeta (API)
  const handleCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then(info => {
      setResultCard(info);
    })
  }
  
  //Para los colapsables
  const handleCollapsed = (ev) => {
    
    console.log(ev.currentTarget);
  }

  ls.set('data', dataCard);

  return (
    <div>
      <Header />


      <main className="main-profile">


        <Preview dataCard={dataCard} setDataCard={setDataCard}/>

        <section className="design-profile">
          <form action="https://adalab-server-form.herokuapp.com" method="post" className="form js-allInputs">
            
            <Design handleCollapsed={handleCollapsed} dataCard={dataCard} handleInput={handleInput} />

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
                  <button className="button-create" name="newCardButton" onClick={handleCreateCard}>
                    <i className="fa-solid fa-address-card"></i>
                    <span>crear tarjeta</span>
                  </button>
                </div>

                <div className="check">
                  <h3 className="share-text"></h3>
                </div>

                <div className="created">
                  <h3 className="share-text">{resultCard.success === true ? "La tarjeta ha sido creada:" : "¡Rellena todo el formulario!"}</h3>
                  <a className="link" href={resultCard.cardURL} target="_blank">{resultCard.success === true ? resultCard.cardURL : ""}</a>
                  <a className="button-share" href={`https://twitter.com/intent/tweet?text=Hello%20world%20mi%20tarjeta&url=${resultCard.cardURL}`} target="_blank">
                    <i className="fa-solid fa-address-card"></i>
                    <span> Compartir en twitter</span>
                  </a>
                </div>
              </div>
            </fieldset>

          </form>

        </section>
      </main>
      <Footer />
    </div>
  );
}





export default App;
