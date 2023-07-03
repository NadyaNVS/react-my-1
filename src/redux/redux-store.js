import {combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsSideReducer from './friendsSideReduser';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsSide: friendsSideReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
