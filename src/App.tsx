
import './App.css';
import Table from './components/table/Table';
import ItemInfo from './components/item-info/ItemInfo';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='row py-2'  >
        <div 
          className='col main-section item-section'
        
        >
          <ItemInfo />

        </div>
        <div className='col main-section'>
          <Table />

        </div>
        
        

      </div>
      
    </div>
  );
}

export default App;
