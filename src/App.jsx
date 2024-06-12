import './App.css';
import { useState } from 'react';
import BotaoAddItem from './componentes/BotaoAddItem';
import Pesquisa from './componentes/Pesquisa';
import Lista from './componentes/Lista';

function App() {
  const [item, setItem] = useState([]);
  const [temp, setTemp] = useState('');

  function temporario(event) {
    setTemp(event.target.value);
  }

  function addItem() {
    if (temp.trim() !== '') {
      setItem([...item, { id: Date.now(), text: temp }]);
      setTemp('');
      console.log(item);
    }
  }

  return (
    <div className="App">
      <div className='content'>
        <Pesquisa temp={temp} onChange={temporario} />
        <BotaoAddItem onClique={addItem} />
        <div className='divLista'>
          <Lista item={item} />
        </div>
      </div>
    </div>
  );
}

export default App;