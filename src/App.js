import './App.css';
import CounterContainer from './components/Counter/CounterContainer';
import ItemList from './components/ItemList/ItemList';
import Navbar from './components/Navbar/Navbar';

function App() {

let saludo = 'Hola jungkookie'

  return (
    <div>
    <Navbar />
    <ItemList saludo={saludo}/>
    <CounterContainer />
    </div>
  ) 
}

export default App;
