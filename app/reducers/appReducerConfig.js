import { combineReducers } from 'redux';

import slideshowReducer from './slideshowReducer'
import loadingReducer from './loadingReducer'

const appReducerConfig = combineReducers({
  slideshowReducer,
  loadingReducer
});

export default appReducerConfig;
