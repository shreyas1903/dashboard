import Iframe from "react-iframe";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dashboard</header>
      <Iframe
        width="600"
        height="400"
        seamless
        src="http://18.234.97.196:3000/superset/explore/?r=58&standalone=true&height=400"
      ></Iframe>
    </div>
  );
}

export default App;
