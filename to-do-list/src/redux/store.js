import { combineReducers, legacy_createStore } from 'redux';
import { auth_reducer } from './reducers/auth_reducer';
import { reg_reducer } from './reducers/reg_reducer';
import { header_reducer } from './reducers/header_reducer';
import { project_reducer } from './reducers/project_reducer';
import { main_menu_reducer } from './reducers/main_menu_reducer';

let reducers = combineReducers({
    header : header_reducer,
    main_content : project_reducer,
    registration_field : reg_reducer,
    auth_field : auth_reducer,
    main_menu : main_menu_reducer,
});

export let store = legacy_createStore(reducers);

window.state = store.getState();