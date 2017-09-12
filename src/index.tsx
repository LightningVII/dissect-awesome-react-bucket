import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import IndexRouter from './Router';
import registerServiceWorker from './registerServiceWorker';
import './index.style';
import Provider from './providers';

ReactDOM.render(
  <Provider>
    <IndexRouter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
