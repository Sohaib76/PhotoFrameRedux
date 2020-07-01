import React,{Component} from 'react';
import './styles/PhotoInstance.css'
import './styles/global.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



class PhotoInstance extends Component{
      render(){
        // debugger
        const {photodata,index} = this.props
        
          return(
            
               <figure className="figure">
                <Link to={`/single/${photodata.id}`}><img className="photo" src={photodata.imageLink} alt={photodata.description}/></Link>
                
                <figcaption><p>{photodata.description}</p></figcaption>
                <div className="btnContainer">
                  {/* <button onClick={()=>{onRemovePhoto(photodata)}} className="removeBtn">Remove</button> */}
                  <button onClick={()=>{
                    this.props.startRemovingPhoto(this.props.index,photodata.id)
                    try{
                      this.props.history.push('/')
                    }
                    catch{
                      console.log("a")
                    }
                    
                    
                    }} className="removeBtn">Remove</button>
                    <Link className="button" to={`/single/${photodata.id}`}>
                      <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {this.props.comments[photodata.id] ? this.props.comments[photodata.id].length :0}
                        </div>
                    </Link>
                </div>
              </figure>
            
             
          )
      }
       
  }



  PhotoInstance.propTypes = {
    // onRemovePhoto: PropTypes.func.isRequired,
    photodata : PropTypes.object.isRequired
}


export default PhotoInstance;
