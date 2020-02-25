import React from 'react';
import logo from './../../logo.svg';
import './_App.scss';
import {DisplayRandomColor} from './../DisplayRandomColor/DisplayRandomColor';
import {DisplayChangeColor} from './../DisplayChangeColor/DisplayChangeColor';


export class App extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            initialColor: {
                r: 255,
                g: 0,
                b: 0
            }/*,
            
            changeColor: {
                r: 255,
                g: 0,
                b: 0 
            }*/
        }
        
        
        this.randomColor = this.randomColor.bind(this);
        //this.changeRandomColor = this.changeRandomColor.bind(this);
    }
    
    randomColor(){
        
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        
        this.setState({initialColor:{r:r, g:g, b:b}});
    }
    
    /*changeRandomColor(){
        const r = this.state.initialColor.r;
        const g = this.state.initialColor.g;
        const b = this.state.initialColor.b;
        
        const coeff = 100;
        
        this.setState({changeColor:{r:256-r, g:256-g, b:256-b}});
    }*/

    
    
    render(){
        return (
            <div className = 'container'>
                <DisplayRandomColor bgndColor = {this.state.initialColor} randomColorFunc = {this.randomColor}/>
                <DisplayChangeColor bgndColor = {this.state.initialColor}/>
            </div>
        )
    }
}