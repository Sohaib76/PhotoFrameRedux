import React,{Component} from 'react';
import './styles/Title.css'

export default class Title extends Component{
    render(){
        return(
        <h1>{this.props.title}</h1>
        )
    }
     
}