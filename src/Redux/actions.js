import {database} from '../Database/config'

//For Firebase
export function startAddingPhoto(photo){
    return(dispatch) =>{
        return database.ref('allPhotos').update({[photo.id]: photo}).then(()=>{
            dispatch(addPhoto(photo))
        }).catch((error)=>{
            console.log(error)
        })
    }
}




export function startLoadingPhoto(){
    return(dispatch) =>{
        return database.ref('allPhotos').once('value').then((snapshot)=>{
            let allPhotos = []
            snapshot.forEach((childSnapshot)=>{
                allPhotos.push(childSnapshot.val())
            })
            dispatch(loadPhoto(allPhotos))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}


export function startRemovingPhoto(index,id){
    return(dispatch) =>{
        return database.ref(`allPhotos/${id}`).remove().then((snapshot)=>{
            dispatch(removePhoto(index))
         
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}



export function startAddingComments(comment,photoid){
    return(dispatch) =>{
        return database.ref("comments/"+photoid).push(comment).then(()=>{
            dispatch(addComment(comment,photoid))
         
           
        }).catch((error)=>{
            console.log(error)
        })
    }
}
















export function startLoadingComments(){
    return(dispatch) =>{
        return database.ref('comments').once('value').then((snapshot)=>{
            let comments = {}
            snapshot.forEach((childSnapshot)=>{
                comments [childSnapshot.key] = Object.values(childSnapshot.val())
               
            })
            dispatch(loadComments(comments))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}









export function loadPhoto(allPhotos){
    return {
        type: "LOAD_PHOTOS",
        allPhotos
    }
}

export function loadComments(comments){
    return {
        type: "LOAD_COMMENTS",
        comments
    }
}










//For State
export function removePhoto(index){
    return {
        type: 'REMOVE_PHOTO',
        index
       
    }
}



export  function addPhoto(photo){
    return {
        type: 'ADD_PHOTO',
        photo
       
    }
}



export  function addComment(comment,photoid){
    return {
        type: 'ADD_COMMENT',
        comment,
        photoid
       
    }
}