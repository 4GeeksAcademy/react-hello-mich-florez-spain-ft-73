
import '/workspaces/react-hello-mich-florez-spain-ft-73/src/styles/secondsCounter.css';

import React from 'react';


const SecondsCounter = (props) => {
  const formatNumber = (num) => {
    return String(num).padStart(6, '0');
  };

  return (
    <div className="counter-container">
      <div className="counter">
        <div className="digit">
          <p>counter</p>
          <i className="far fa-clock"></i>
        </div>
        {formatNumber(props.seconds).split('').map((digit, index) => (
          <div key={index} className="digit">{digit}</div>
  
        ))}
      </div>
    </div>
  );
};

export default SecondsCounter; 