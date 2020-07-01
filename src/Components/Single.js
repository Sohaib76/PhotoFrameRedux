import React ,{Component} from 'react'
import PhotoInstance from './PhotoInstance'
import Comments from './Comments'

export default class Single extends Component{
    render(){
        // const {match,allPhotos,startAddingComments} = this.props
        console.log(this.props)

        const id = Number(this.props.match.params.id)
        const photos = this.props.allPhotos.find((photo)=>photo.id === id )
        console.log(photos)
        const comments = this.props.comments[this.props.match.params.id] || []
        const index = this.props.allPhotos.findIndex((photo)=> photo.id == id)
        
        if(this.props.loading == true){
            return (
                <div className="loader">
                    ..loading
                </div>
            )
        }
        else if(photos){
            return(
                <div className="single-photo">
                    <PhotoInstance photodata={photos} {...this.props} index={index}/>
                    <Comments startAddingComments={this.props.startAddingComments} comments={comments} id={id}/> 
                    
                </div>
            )
        }
        else{
            return (
                <h1>...no photo found</h1>
            )
        }
        
        
        
    }

}