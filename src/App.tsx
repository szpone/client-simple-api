import React from 'react';
import './App.css';
import CurrentTime from "./views/CurrentTime";
import Recommendation from "./views/Recommendation";

const App: React.FC = () => {
  return (
    <div className="App">
      <CurrentTime/>
      <Recommendation/>

    </div>
  );
};

export default App;
