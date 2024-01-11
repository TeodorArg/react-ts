import { Icon } from './stories/icon/Icon';
import logo from './logo.svg';
import './App.scss';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Icon
          iconColor="#bfe8a3"
          iconName="inst"
          iconSubColor="#e31f1f"
          iconThirdColor="#0ed6f1"
        />
      </header>
    </div>
  );
}

export default App;
