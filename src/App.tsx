import { Router } from 'react-router-dom';
import './App.css';
import RootRouter from './Components/Router/RootRouter';
import Students from './Components/Students';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <RootRouter/>        
      </header>
    </div>
  );
}

export default App;
