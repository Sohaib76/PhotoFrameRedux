import React , {Component} from 'react'

export default class AddNewPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const photo = {
            id: Number(new Date()),
            description : description,
            imageLink : imageLink
        }
        if(description && imageLink){
           
            this.props.startAddingPhoto(photo)
            this.props.onHistory.push("/")
        }
    }

    render(){
        return(
            <div>
          
                {/* <h1>PhotoFrame</h1> */}
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"></input>
                        <input type="text" placeholder="Description" name="description"></input>
                        <button >Submit</button>
                    </form>
                </div>
                
            </div>
            
        )
    }
}