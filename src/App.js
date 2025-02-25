import './App.css';
import * as data from './data/content.js';
import Card from './components/card.jsx';

function App() {
  return (
    <div className="App">
      <h1>Let's check my main project!</h1>
      <div className='cardsHolder'>
        {data.cards.map((item, id) => {
          return (
            <Card key={id} data={item} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
