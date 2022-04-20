import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div id="App" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <nav>
            <Link to="/TitleSimulator">TitleSimulator</Link>
            <Link to="/ButtonSimulator">ButtonSimulator</Link>
            <Link to="/InputSimulator">InputSimulator</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
