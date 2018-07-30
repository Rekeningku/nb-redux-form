import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
