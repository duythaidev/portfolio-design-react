import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux';

import mainReducer from './store/reducers/MainReducers';

const reduxStore = createStore(mainReducer)

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App></App>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
