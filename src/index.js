import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import {createStore} from 'redux';
import commentReducer from './reducers/commentReducer';
import { Provider } from "react-redux";

const store = createStore(commentReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
