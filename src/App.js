import './App.css';
import Map from './components/Map/Map';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <div className='App'>
      <Routes title={'Таблица 1 - Список маршрутов'} />
      <Map />
    </div>
  );
}

export default App;
