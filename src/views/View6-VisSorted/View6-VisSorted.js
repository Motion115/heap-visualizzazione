import React, { Component } from 'react';
import OutputNodeArray from './outputArray';

export default class View6_OutputArray extends Component {
    render() {
        const data = this.props.data;
        return (
            <div id='view4' className='pane'>
                <div className='header'>Sorted Array</div>
                <div>
                    <OutputNodeArray data={data} width={1000} height={80}/>
                </div>
            </div>
        )
    }
}