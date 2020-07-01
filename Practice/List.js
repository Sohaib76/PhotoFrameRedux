import React,{Component} from 'react';

export default class List extends Component{
    render(){
        return(
            <ol>{this.props.tasks.map((item,index)=>
                <li key={index}>{item}</li>
            
            )}</ol>
        )
    }
     
}