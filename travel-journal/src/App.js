import './App.css';
import Header from './components/Header';
import TravelCard from './components/TravelCard';
import data from './data'

function App() {

  const travelCards = data.map(item => {
    return(
      <TravelCard
        key={item.id}
        item={item}
    />)
  })

  return (
    <div className="App">
      <Header/>
      {travelCards}
    </div>
  );
}

export default App;
