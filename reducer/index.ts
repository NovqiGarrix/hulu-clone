import { combineReducers } from 'redux';

import globalData from './globalData';
import genres from './genres';

export default combineReducers({
    globalData, genres
});