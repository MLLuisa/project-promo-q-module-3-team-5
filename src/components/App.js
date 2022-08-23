import photo from '../images/photo2.png';
import { useState } from 'react';
import knife from '../images/knife.png';
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
import Fill from './Fill';

function App() {
  
  //Variables de estado
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
  

  //Image
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

//Recoger el valor de los inputs
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


        <Preview dataCard={dataCard} />

        <section className="design-profile">
          <form action="https://adalab-server-form.herokuapp.com" method="post" className="form js-allInputs">
            
            <Design handleCollapsed={handleCollapsed} dataCard={dataCard} handleInput={handleInput} />

            <Fill handleCollapsed={handleCollapsed} dataCard={dataCard} handleInput={handleInput} setDataCard={setDataCard}/>

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
                  <a className="button-share" href={`https://twitter.com/intent/tweet?text=Hello%20world%20my%20card&url=${resultCard.cardURL}`} target="_blank">
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
