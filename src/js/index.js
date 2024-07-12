import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './component/secondsCounter';
import '@fortawesome/fontawesome-free/css/all.min.css';


let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderCounter = () => {
  root.render(<SecondsCounter seconds={seconds} />);
};

renderCounter();

setInterval(() => {
  seconds += 1;
  renderCounter();
}, 1000);
