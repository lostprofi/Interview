import React from 'react';
import ReactDOM from 'react-dom';
import './_DisplayRandomColor.scss';
import {RandomColor} from './../RandomColor/RandomColor';

export class DisplayRandomColor extends React.Component{
    render(){
        return <RandomColor randomColorFunc = {this.props.randomColorFunc} className = 'display-random' bgndColor = {this.props.bgndColor}/>
    }
}