
import {TYPE, STATUS_CODE, COMICS_COUNT} from './constants';
import service from './services';
import { sendRequest, 
    dismissRequest, 
    successRequest,
    failureRequest,
    } from '../common/actions';


const handleFilterData = (characters, comics) => {
    
    return {type:TYPE.SET_DATA_FILTER, payload:{characters, comics}};
}

const handleComicsData = (response) => {
    return {
        type:TYPE.SET_DATA, 
        payload: {
            total: response.data.data.total,
            offset: response.data.data.offset,
            count:response.data.data.count,
            comics:response.data.data.results}
        };
}
export const loadComics = () => {
    return (dispatch, getState) => {
        dispatch(sendRequest());
        service.getAllFilters()((characters,comics) => {
            dispatch(handleFilterData(characters.data.data.results, comics.data.data.results));
        },
        (error) => {
        //    dispatch(dismissRequest());
         //   dispatch(failureRequest());
        });

        service.showListComics((response)=>{
            console.log(response);
            if(response.status == STATUS_CODE.OK){
                if('code' in response.data){
                   switch (response.data.code){
                       case STATUS_CODE.OK:
                           dispatch(handleComicsData(response));
                           dispatch(successRequest());   
                       break;
                   }
                }else{
                   dispatch(failureRequest());
                }
                dispatch(dismissRequest());
            }else{
               dispatch(failureRequest());
            }
        },
        (error) =>{
            dispatch(dismissRequest());
            dispatch(failureRequest());
        }
        );
    }
};

export const paginateComics = (page) => {
    return (dispatch, getState) => {
        dispatch(sendRequest());
        service.showPageListComics(page)((response)=>{            
            if(response.status == STATUS_CODE.OK){
                if('code' in response.data){
                   switch (response.data.code){
                       case STATUS_CODE.OK:
                           dispatch({type: TYPE.SET_ACTIVE_PAGE, payload:{page}});
                           dispatch(handleComicsData(response));
                           dispatch(successRequest());   
                       break;
                   }
                }else{
                   dispatch(failureRequest());
                }
                dispatch(dismissRequest());
            }else{
               dispatch(failureRequest());
            }
        },
        (error) =>{
            dispatch(dismissRequest());
            dispatch(failureRequest());
        }
        );
    }
};

export const clearFilter = () => {
    return (dispatch, getState) => {
        dispatch(sendRequest());
        dispatch({type:TYPE.SET_CURRENT_FILTER, payload:{currentFilter:null}});
        service.showListComics((response)=> {          
            if(response.status == STATUS_CODE.OK){
                if('code' in response.data){
                   switch (response.data.code){
                       case STATUS_CODE.OK:
                        dispatch({type: TYPE.SET_ACTIVE_PAGE, payload:{page:1}});
                           dispatch(handleComicsData(response));
                           dispatch(successRequest());   
                       break;
                   }
                }else{
                   dispatch(failureRequest());
                }
                dispatch(dismissRequest());
            }else{
               dispatch(failureRequest());
            }
        },
        (error) =>{
            dispatch(dismissRequest());
            dispatch(failureRequest());
        }
        );
    }
};

export const findComicsByCharacter = (characterid, currentFilter) => {
    return (dispatch, getState) => {
        dispatch(sendRequest());
        dispatch({type:TYPE.SET_CURRENT_FILTER, payload:{currentFilter}});
        service.findComicsByCharactersId(characterid)( (response)=>{
            if(response.status == STATUS_CODE.OK){
                if('code' in response.data){
                   switch (response.data.code){
                       case STATUS_CODE.OK:
                        dispatch({type: TYPE.SET_ACTIVE_PAGE, payload:{page:1}});
                           dispatch(handleComicsData(response));
                           dispatch(successRequest());   
                       break;
                   }
                }else{
                   dispatch(failureRequest());
                }
            }else{
               dispatch(failureRequest());
            }
            dispatch(dismissRequest());
        },
        (error) =>{
            dispatch(dismissRequest());
            dispatch(failureRequest());
        }
        );
    }
}

export const findComics = (title) => {
    return (dispatch, getState) => {
        dispatch(sendRequest());
        
        service.findByTitle(title)( (response)=>{
            if(response.status == STATUS_CODE.OK){
                if('code' in response.data){
                   switch (response.data.code){
                       case STATUS_CODE.OK:
                        dispatch({type: TYPE.SET_ACTIVE_PAGE, payload:{page:1}});
                           dispatch(handleComicsData(response));
                           dispatch(successRequest());   
                       break;
                   }
                }else{
                   dispatch(failureRequest());
                }
            }else{
               dispatch(failureRequest());
            }
            dispatch(dismissRequest());
        },
        (error) =>{
            dispatch(dismissRequest());
            dispatch(failureRequest());
        }
        );
    }
};

export const findComicsByYears = (start, end) => {
    return (dispatch, getState) => {
        dispatch(sendRequest());
        
        service.findByYears(start, end)( (response)=>{
            if(response.status == STATUS_CODE.OK){
                if('code' in response.data){
                   switch (response.data.code){
                       case STATUS_CODE.OK:
                            dispatch({type: TYPE.SET_ACTIVE_PAGE, payload:{page:1}});
                           dispatch(handleComicsData(response));
                           dispatch(successRequest());   
                       break;
                   }
                }else{
                   dispatch(failureRequest());
                }
            }else{
               dispatch(failureRequest());
            }
            dispatch(dismissRequest());
        },
        (error) =>{
            dispatch(dismissRequest());
            dispatch(failureRequest());
        }
        );
    }
};