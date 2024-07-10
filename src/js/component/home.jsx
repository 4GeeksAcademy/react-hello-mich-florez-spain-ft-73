import React from 'react';
import SecondsCounter from './secondsCounter';


const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Seconds Counter</h1>
      </header>
      <SecondsCounter />
    </div>
  );
};

export default App;