import _allPhotos from "../data/allphotos";

import {combineReducers} from 'redux'

function comments(currentState={},action){

    
    switch(action.type){
        
        case 'ADD_COMMENT': 
         if(!currentState[action.photoid]){
            return {...currentState,[action.photoid]:[action.comment]}
         }
         else{
            return {...currentState,[action.photoid]:[...currentState[action.photoid],[action.comment]]}

         }
        case 'LOAD_COMMENTS': return action.comments
        
        default:return currentState
    }
    
}

function allPhotos(currentState = _allPhotos,action){
    //remove photo action

    // console.log(action.index)
    switch(action.type){
        case 'REMOVE_PHOTO': return [...currentState.slice(0 , action.index),...currentState.slice(action.index + 1)];
        case 'ADD_PHOTO': return [...currentState,action.photo]
        case 'LOAD_PHOTOS': return action.allPhotos
        
      
        default: return currentState
    }



    
}

const rootReducer = combineReducers({allPhotos,comments})


export default rootReducer;