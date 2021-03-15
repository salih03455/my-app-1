import logo from './logo.svg';
import './App.css';
import { ApsiButton } from './library/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my-app-1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React ogrenmenin tam zamani!
        </a>
        <ApsiButton />
      </header>
    </div>
  );
}

export default App;
