import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import viewAllCountry from './viewAllCountry';
import displayUserCountryReducer from './displayUserCountryReducer';
import displayCount from './displayCount';
import questionCorona from './questionsCorona';
import worldCorona from './worldCorona';

const appReducer = combineReducers({ 
router: routerReducer,
    viewAllCountry,
    displayUserCountryReducer,
    displayCount,
    questionCorona,
    worldCorona

});

const rootReducer = (state, action) => {
    return appReducer(state, action);
  };
  
  export default rootReducer;