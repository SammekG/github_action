import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {process.env.REACT_APP_WELCOME_TEXT || "Github Actions Tutorial"} - By
          Sammek Gandhi
        </p>
        <a
          className="App-link"
          href="https://youtube.com/@DevOpsPro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevOps
        </a>
      </header>
    </div>
  );
}

export default App;
