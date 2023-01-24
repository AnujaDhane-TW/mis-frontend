import { Router } from 'react-router-dom';
import './App.css';
import RootRouter from './components/router/RootRouter';

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
