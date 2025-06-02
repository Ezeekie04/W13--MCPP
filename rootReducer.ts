import { combineReducers } from '@reduxjs/toolkit';
import firebaseStatsReducer from './firebaseStatsSlice';

const rootReducer = combineReducers({
  firebaseStats: firebaseStatsReducer,
});

export default rootReducer;
