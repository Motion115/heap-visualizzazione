import React, { Component } from 'react';
import HeapTree from './heapTree';
import './view5.css';

export default class View5 extends Component {
    render() {
        const data = this.props.data;
        return (
            <div id='view5' className='pane'>
                <div className='header'>Heap: tree visualization</div>
                <div>
                <HeapTree data={data} width={1000} height={280}/>
                </div>                
            </div>
        )
    }
}