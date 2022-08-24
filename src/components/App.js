import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import dataApi from '../services/dataApi';
import ls from '../services/localStoraged';
import '../styles/core/Reset.scss';
import Card from './Card/Card';
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
    console.log(inputName, inputValue)
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
