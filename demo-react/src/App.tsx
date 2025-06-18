import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const appVersion = process.env.APP_VERSION || "unknown";
  const buildDate = process.env.APP_BUILD_TIME || "unknown";

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
          after version it looks greate {appVersion} and build date {buildDate}
        </a>
      </header>
    </div>
  );
}

export default App;
