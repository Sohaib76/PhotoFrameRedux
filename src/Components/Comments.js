import React,{Component} from 'react';
import './styles/comments.css'

export default class Comments extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        const theComment = event.target.elements.Comment.value
        this.props.startAddingComments(theComment, this.props.id)
        event.target.elements.Comment.value = ""
       

    }

    render(){
        console.log(this.props.comments)
        return(
        <div className="comment" onSubmit={this.handleSubmit}>
            {this.props.comments.map((comment,index)=>{
                return(
                    <p key={index}>
                        {comment}
                    </p>
                )
            })}
            <form className="comment-form"> 
                <input type="text" placeholder="Comment" name="Comment"/>
                <input type="submit" hidden/>
            </form>
        </div>
        )
    }
     
}