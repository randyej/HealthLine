import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './App';
//import appReducerConfig from './reducers/appReducerConfig';
import slideshowReducer from './reducers/slideshowReducer';
import pixabayService from './services/pixabayService';
import initStore from './data/initStore';

const store = createStore(slideshowReducer, initStore, compose(applyMiddleware(pixabayService)));
const domRoot = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <App store={store}/>,
    domRoot
  );
}

store.subscribe(render);
render();
