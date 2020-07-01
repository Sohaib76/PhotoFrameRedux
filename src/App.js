import React,{Component} from 'react';
import Title from './Components/Title';
import Frame from './Components/Frame';
import { Route, Link } from 'react-router-dom';
import AddNewPhoto from './Components/AddNewPhoto';
import Single from './Components/Single';

// import {removePhoto} from './Redux/actions'

//nstinfotech.com



class App extends Component{
    constructor(){
        super()
        
        
    }

    // removePhoto(photoDataToRemove){
    //     alert("removed")
    //     this.setState((prevState)=>({
    //         allPhotos: prevState.allPhotos.filter((photo)=>photo!=photoDataToRemove)
    //     }))
    // }

    state = {
        loading : true
    }

    componentDidMount(){
        this.props.startLoadingPhoto().then(()=>{
            this.setState({
                loading:false
            })
        })
        this.props.startLoadingComments()
    }

    // componentDidUpdate(prevProps,prevState){
    //     console.log(prevState.allPhotos)
    //     console.log(this.state)
    // }


//    addPhoto(photoadded){
//         this.setState((prevState)=>({
//             allPhotos: prevState.allPhotos.concat([photoadded])
//         }
            
//         )
//     )}

      render(){
          console.log(this.props)
          return(
              <div>
                  <h1><Link to="/">PhotoFrame</Link></h1>
                  {/* <Title title={"Portfolio"}/> */}
                  <Route exact path="/" render={()=>(
                    <div>
                       
              
                        {/* <Frame photoblock={this.state.allPhotos} onRemovePhoto={this.removePhoto}/> */}
                        <Frame {...this.props} />

                    </div>

                  )}/>

                  {/* <Route exact path='/AddNewPhoto' render={({history})=>(
                      <AddNewPhoto onAddPhoto={
                          (addedPhoto)=>{
                            //   console.log(addedPhoto)
                              this.addPhoto(addedPhoto)
                              history.push('/')
                          }
                        }/>
                  )}/>
                   */}

                   <Route exact path='/AddNewPhoto' render={({history})=>(
                      <AddNewPhoto {...this.props} onHistory={history}/>
                  )}/>

                  <Route path='/single/:id' render={(params)=>(
                      <Single loading={this.state.loading} {...this.props} {...params}/>
                  )}/>
                  
              </div>

          )
      }
       
  }

export default App;
