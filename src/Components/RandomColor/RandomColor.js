import React from 'react';
import ReactDOM from 'react-dom';


export class RandomColor extends React.Component{
    
    
    
    
    render(){
        return <div className = {this.props.className} style = {{backgroundColor: `rgb(${this.props.bgndColor.r}, ${this.props.bgndColor.g}, ${this.props.bgndColor.b})`}}></div>
    }
    
    componentDidMount(){
       this.timerId = setInterval(this.props.randomColorFunc, 2000);
    }
    
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
}