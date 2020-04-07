import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// let data = (
// <div>
//     <h1>Cognitive News</h1>
//     <h2>A Bitcoin whale just moved $1 Bn worth Btc.</h2>
//     <p>Information coming up from a trusted sources just confirm this transacrtion.</p>
// </div>
// );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
