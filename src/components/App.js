import photo from '../images/photo2.png';
import { useState } from 'react';
import knife from '../images/knife.png';
import React from 'react';
import PropTypes from 'prop-types';

import dataApi from '../services/dataApi';
import ls from '../services/localStoraged';

import '../styles/core/Reset.scss';
import '../styles/layout/main-profile.scss';
import '../styles/layout/main-home.scss';
import '../styles/layout/design.scss';
import '../styles/layout/fill.scss';
import '../styles/layout/share.scss';
import Design from './Design';
import Fill from './Fill';
import Button from './Button';

import Share from './Share';
import Card from './Card';

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
  

//Recoger el valor de los inputs
const handleInput = (inputName, inputValue) => {
    
  setDataCard({
    ...dataCard, [inputName]: inputValue
  });

}


  // Crear tarjeta (API)
  const handleCreateCard = () => {
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
      
      <Card handleCollapsed={handleCollapsed} dataCard={dataCard} setDataCard={setDataCard} resultCard={resultCard} setResultCard={setResultCard} handleInput={handleInput} handleCreateCard={handleCreateCard} />
      
    </div>
  );
}





export default App;
