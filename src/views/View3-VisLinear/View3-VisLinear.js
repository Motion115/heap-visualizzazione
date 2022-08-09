import React, { Component } from 'react';
import './View3-VisLinear.css';
import BarChart from './barChart';

export default class View3_VisLinear extends Component {
    render() {
        const data = this.props.data;

        return (
            <div id='view3' className='pane'>
                <div className='header'>Heap: content in array</div>
                <div>
                    <BarChart data={data} width={1000} height={220}/>
                </div>
            </div>
        )
    }
}