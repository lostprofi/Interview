import React from 'react';
import ReactDOM from 'react-dom';
import './_DisplayChangeColor.scss';
import {ChangeColor} from './../ChangeColor/ChangeColor';


export class DisplayChangeColor extends React.Component{
    render(){
        return <ChangeColor bgndColor = {this.props.bgndColor}  className = 'changed-color'/>
    }
}