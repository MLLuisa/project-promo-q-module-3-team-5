import photo from '../images/photo2.png';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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
import Landing from './Landing';

function App() {
  //Variables de estado
  const [dataCard, setDataCard] = useState(
    ls.get('data', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    })
  );
  const [resultCard, setResultCard] = useState({});
  const [collapsed, setCollapsed] = useState(['', 'collapsed', 'collapsed']);

  //Image

  //Recoger el valor de los inputs
  const handleInput = (inputName, inputValue) => {
    setDataCard({
      ...dataCard,
      [inputName]: inputValue,
    });
  };

  // Crear tarjeta (API)
  const handleCreateCard = () => {
    dataApi(dataCard).then((info) => {
      setResultCard(info);
    });
  };

  //Para los colapsables

  const handleCollapsed = (value) => {
    if (value === 'design') {
      setCollapsed(['', 'collapsed', 'collapsed']);
    }
    if (value === 'fill') {
      setCollapsed(['collapsed', '', 'collapsed']);
    }
    if (value === 'share') {
      setCollapsed(['collapsed', 'collapsed', '']);
    }
  };

  ls.set('data', dataCard);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/card"
          element={
            <Card
              handleCollapsed={handleCollapsed}
              dataCard={dataCard}
              setDataCard={setDataCard}
              resultCard={resultCard}
              setResultCard={setResultCard}
              handleInput={handleInput}
              handleCreateCard={handleCreateCard}
              collapsed={collapsed}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
