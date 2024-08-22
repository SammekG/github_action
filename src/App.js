import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {process.env.REACT_APP_WELCOME_TEXT || "Github Actions Tutorial"} - By
          Sammek Gandhi
        </p>
      </header>
    </div>
  );
}

export default App;
