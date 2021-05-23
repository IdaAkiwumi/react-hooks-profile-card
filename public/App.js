import logo from './logo.svg';
import './App.css';
import './responsive.css';
import './styles.css';

var display2 = document.querySelector('#skill');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

function clickedButton(){

display2.textContent ='I am a Front-End Developer';
}

mainButton.addEventListener("click", clickedButton);




}

export default App;
