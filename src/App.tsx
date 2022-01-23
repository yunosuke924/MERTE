import { VFC } from 'react';
import logo from './logo.svg';
import './App.css';

const App: VFC = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to MERTE</p>
        <p>MERTE is the personal carte for mental patient.</p>
      </header>
    </div>
);

export default App;
