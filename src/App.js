import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div id="App" className="App">
        <div class="heading">
            <nav text-align="left">
                <ul>
                    <li><Link to="/TitleSimulator">TitleSimulator</Link></li>
                    <li><Link to="/ButtonSimulator">ButtonSimulator</Link></li>
                    <li><Link to="/InputSimulator">InputSimulator</Link></li>
                </ul>
            </nav>
        </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
