import React from "react";
import { Grid } from "./components/Grid";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div className="App-grid">
        <h1>Game of Life Sim</h1>
        <Grid />
        <button className="App-start-button">Start</button>
      </div>
    </>
  );
};

export default App;
