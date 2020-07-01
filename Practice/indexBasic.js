import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';



//const element = React.createElement("h1", null,"Hey")

//               WIHTOUT MAP
// const element = React.createElement("ol",null, 
//     React.createElement("li",null,"first"),
//     React.createElement("li",null,"second"),
//     React.createElement("li",null,"third")
// )

//                 USING JSX wihtout MAP
//const elemnt = <ol><li>{thelist[0]}</li><li>{thelist[1]}</li><li>{thelist[2]}</li></ol>


const thelist = ["first","second","third"]

//                USING MAP
// const element = React.createElement("ol",null, 
//  thelist.map((member,index)=>{
//     React.createElement("li",{key:index},member)
// })

// )

//                 USING JSX Using Map
// const elemnt = 
// <div>
//     <h1>H</h1>
//     <ol>
//     {thelist.map((item,index)=>{<li key={index}>{item}</li>})}
//     </ol>
// </div>


//                 USING CLASSES
// class List extends Component{
//     render(){
//         return(
//             <ol>{this.props.tasks.map((item,index)=>{<li key={index}>{item}</li>})}</ol>
//         )
//     }
     
// }
// class Title extends Component{
//     render(){
//         return(
//         <h1>{this.props.title}</h1>
//         )
//     }
     
// }
// class Main extends Component{
//     render(){
//         return(
//             <div><Title title={"Todo"}/><List tasks={["c","a","f"]}/></div>
//         )
//     }
     
// }



ReactDOM.render(
    Main,
    document.getElementById('root')
  );
  