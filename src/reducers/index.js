import { combineReducers } from 'redux';

const rootReducer = combineReducers({ dummy: (s = []) => s });

export default rootReducer;
