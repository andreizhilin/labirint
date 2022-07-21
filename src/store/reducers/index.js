import { combineReducers } from 'redux';

import { game } from './game';
import { settings } from './settings';

export const rootReducer = combineReducers({
  game,
  settings,
});
