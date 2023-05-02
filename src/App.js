import Iframe from "react-iframe";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dashboard</header>
      <Iframe
        className="iframe-container"
        width="600"
        height="400"
        url="http://18.234.97.196:3000/superset/explore/?r=58&standalone=true&height=400"
      ></Iframe>
      <Iframe
        className="iframe-container"
        width="600"
        height="400"
        frameBorder="0"
        // scrolling="no"
        src="http://18.234.97.196:3000/superset/explore/?r=60&standalone=true&height=400"
      ></Iframe>
    </div>
  );
}

export default App;
