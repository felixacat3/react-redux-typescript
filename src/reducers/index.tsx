import { combineReducers } from 'redux';

import  todos  from './todosReducer';
import visibilityFilterReducer from './visibilityFilterReducer'

export const rootReducer =  combineReducers({
    todos,
    visibilityFilterReducer
});

export type AppState = ReturnType<typeof rootReducer>