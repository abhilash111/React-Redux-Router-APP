
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import allReducers from './reducers';

export default createStore(
  combineReducers({
    ...allReducers,
    form: formReducer,
  }),
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);