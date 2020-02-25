import React from 'react';
import ReactDOM from 'react-dom';

export class ChangeColor extends React.Component{
    
     
    
    render(){
        return <div style = {{backgroundColor: `rgb(${256-this.props.bgndColor.r}, ${256-this.props.bgndColor.g}, ${256-this.props.bgndColor.b})`}} className = {this.props.className}></div>
    }
    
    
}