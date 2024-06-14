import './App.css';
import { useEffect, useState } from 'react';
import BotaoAddItem from './componentes/BotaoAddItem';
import Pesquisa from './componentes/Pesquisa';
import Lista from './componentes/Lista';
import BotaoDeletar from './componentes/BotaoDeletar';

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('itens');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [temp, setTemp] = useState('');


  useEffect(() => {
    localStorage.setItem('itens', JSON.stringify(items));
  }, [items]);

  const deletar = (id) => {
    const newItems = items.filter((objeto) => objeto.id !== id);
    setItems(newItems)
    console.log(id);
  }

  function temporario(event) {
    setTemp(event.target.value);
  }

  function addItem() {
    if (temp.trim() !== '') {
      setItems([...items, { id: Date.now(), text: temp }]);
      setTemp('');
    }
  }

  return (
    <div className="App">
      <div className='content'>
        <Pesquisa temp={temp} onChange={temporario} />
        <BotaoAddItem onClique={addItem} />
        <div className='divLista'>
          <Lista item={items} onDelete={deletar} />
        </div>
      </div>
    </div>
  );
}

export default App;