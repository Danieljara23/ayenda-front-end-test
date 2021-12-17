/**
 * Reducers for app
 */

import { combineReducers } from 'redux';
import {TYPE} from './constants';
import networkReducer from '../common/reducers';
import comics from '../pojo/comic';

const comicsState = {
    items: [],
    entities : {},
    total:0,
    itemPerPage: 20,
    offset: 0
};

const userState = {
    user: {},
    userPersonalTrait: []
}
const uiState = {
    userView: false,
    activePage: 1,
};

const filterState = {
    characters: {},
    current: null
}

export const filterReducer = (state = filterState, action) =>{
    
    if (typeof state === 'undefined'){
        state = { characters: {},     current: null}
    }
    switch(action.type){
        case TYPE.SET_DATA_FILTER:
           const characters = {};
           action.payload.characters.forEach((item) => {
                characters[item.id] =  item.name;
           });
           return Object.assign({}, state,{
                characters: characters,
                current: action.payload.currentFilter,                
           });
           break;
        case TYPE.SET_CURRENT_FILTER:
            return Object.assign({}, state,{
                 current: action.payload.currentFilter
            });
            break;
       default:
           return state;
           break;
    }
};

export const comicsReducer = (state = comicsState, action) =>{
     if (typeof state === 'undefined'){
         state = {items: [], entities : {}}
     }
     switch(action.type){
         case TYPE.SET_DATA:
             
            const items = action.payload.comics.map(item => item.id);
            
            const entities = {};
			action.payload.comics.forEach((item) => {
					entities[item.id] =  item;
			});
            return Object.assign({}, state,{
                items: items,
                entities: entities,
                total: action.payload.total,
                itemPerPage: action.payload.count,
                offset: action.payload.offset
			});
            break;
        default:
			return state;
			break;
     }
 };

export const userReducer = (state = userState, action) => {
    if (typeof state === 'undefined'){
        state = {user: {},
        userPersonalTrait: []}
    }

    switch(action.type){
        case TYPE.SET_USER_DATA_RESULT:
            
            return Object.assign({}, state,{
                user: action.payload.user,
                userPersonalTrait: action.payload.user.personalityTraitsResults
			});
            break;
        default:
            return state;
            break;
    }
}

export const uiReducer = (state = uiState, action) => {
    if (typeof state === 'undefined'){
        state = {userView:false, activePage: 1};
    }
    switch(action.type){
        case TYPE.SET_ACTIVE_PAGE:
            return Object.assign({}, state,{
                activePage: action.payload.page
			});
            break;
        default:
            return state;
            break;
    }
}

export default combineReducers({comicsReducer, filterReducer, userReducer, uiReducer, networkReducer});