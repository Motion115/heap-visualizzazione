import React, { Component } from 'react';
import * as d3 from 'd3';
import './style.css';

export default class HeapTree extends Component {
    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }

    render() {
        return (
            <div className='heapTree'/>
        )
    }
}



const draw = (props) => {    
    let dataset = props.data

    d3.select('.heapTree > *').remove();
    //const data = props.data;
    const margin = {top: 20, right: 20, bottom: 20, left: 20};
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    let svg = d3.select('.heapTree')
                .append('svg')
                .attr('width',width)
                .attr('height',height)

    let indices = []
    /*
    for(let i = 0; i < dataset.length; i++) {
        let start = []
        let j = Math.floor(i / 2)
        start.push(calculatePosition(j, width))
        start.push(calculateLayer(j) * 50)
        let finish = []
        finish.push(calculatePosition(i, width))
        finish.push(calculateLayer(i) * 50)
        indices.push(start)
        indices.push(finish)
    }
    //console.log(indices)
    */
    for(let i = 0; i < dataset.length; i++) {
        let j = Math.floor(i / 2)
        indices.push(calculatePosition(j, width))
        indices.push(calculateLayer(j) * 50)
    }

    let lineGenerator = d3.line()
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1]
                        })
    
    svg.append('line')
        .attr('stroke', 'light-green')
        .attr('stroke-width', '2')
        .attr('fill', 'none')
        .attr('d', lineGenerator(indices));
    
    svg.selectAll('circles')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', (_, i) => calculatePosition(i, width))
        .attr('cy', (_, i) => calculateLayer(i) * 40)
        .attr('r', '15')
        .attr('fill', (d) => colorGradient(d));

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text((d) =>  {return d})
        .attr("class","text")
        .attr("x",(_, i) => calculatePosition(i, width) - 10)
        .attr("y",(_, i) => calculateLayer(i) * 40 + 5)
        .attr("fill", "RGB(255, 255, 255)")
        .attr("font-size", "18")
}

function calculatePosition(index, width) {
    let subIndex = calculateSubIndex(index)
    let layer = calculateLayer(index)
    let position = width / (Math.pow(2, layer - 1) + 1) * (subIndex + 1)
    return position
}

function calculateSubIndex(index) {
    let layer = calculateLayer(index)
    let indexTally = total(layer - 1)
    return index - indexTally
}

function calculateLayer(index) {
    let layer = 1
    while(true) {
        if (index < total(layer)) {
            break
        }
        layer++
    }
    //console.log(layer)
    return layer
}

function total(layer) {
    let total = 0
    for(let i = 0; i < layer; i++) {
        total += Math.pow(2, i)
    }
    return total
}

function colorGradient(d) {
    if (d * 2 < 255) {
        return "rgb(120,200,"+(d * 2)+")"
    }
    else {
        return "rgb(120,200,255)"
    }
}