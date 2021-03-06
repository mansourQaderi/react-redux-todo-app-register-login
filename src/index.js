import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {configureStore} from './components/redux/store/store'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
      </Provider>
    </React.StrictMode>
  ,
  document.getElementById('root')
);
