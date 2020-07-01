import React from 'react';
import PhotoInstance from './PhotoInstance';
import './styles/styles.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


// align alt+shif+f

function Frame(props){
    return(
        <div>
            <Link to="/AddNewPhoto" className="addImgBtn" ></Link>
            <div className="photogrid">

                {props.allPhotos
                .sort(function(x,y){
                    // console.log(x,y)
                    // console.log(y.id,"asd",x.id)
                    return y.id -x.id
                })
                .map((photo,index)=>
                    <PhotoInstance key={index} index={index} {...props} photodata={photo} />
                )}
            </div>
        </div>
        
    );
}


Frame.propTypes = {
    // onRemovePhoto: PropTypes.func.isRequired,
    allPhotos : PropTypes.array.isRequired
}

export default Frame;
