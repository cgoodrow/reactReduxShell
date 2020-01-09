import { combineReducers  } from 'redux';
import simple from './simple/reducer';
import authorization from './authorization/reducer';
import glossary from './glossary/reducer';

export default combineReducers({
    authorization,
    simple,
    glossary,
});