import React, { Component } from 'react';
import NodeArray from './inputArray';

export default class View4_InputArray extends Component {
    render() {
        const data = this.props.data;
        return (
            <div id='view4' className='pane'>
                <div className='header'>Input Array</div>
                <div>
                    <NodeArray data={data} width={1000} height={80}/>
                </div>
            </div>
        )
    }
}