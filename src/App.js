import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.justmeomaya.com/"
            target="_blank"
            rel="noreferrer"
          >
            Maya Claros
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="
          https://github.com/mayaclaros/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on
          <a
            href="https://react-weather-app-maya.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
