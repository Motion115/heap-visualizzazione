import React, { Component } from 'react';
import * as d3 from 'd3';

export default class OutputNodeArray extends Component {
    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }

    render() {
        return (
            <div className='outputNodeArray'/>
        )
    }
}



const draw = (props) => {    
    let dataset = props.data

    d3.select('.outputNodeArray > *').remove();
    //const data = props.data;
    const margin = {top: 10, right: 20, bottom: 10, left: 20};
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    let svg = d3.select('.outputNodeArray')
                .append('svg')
                .attr('width',width)
                .attr('height',height)

    let xscale = d3.scaleLinear()
                .domain([0, dataset.length])
                .range([margin.left, width - margin.right])
                     
    svg.selectAll('circles')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', (d, i)=>xscale(i + 0.5))
        .attr('cy', height / 2 - margin.top)
        .attr('r', '15')
        .attr('fill', (d) => colorGradient(d));

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text((d) =>  {return d})
        .attr("class","text")
        .attr("x",(d, i)=>xscale(i + 0.5) - 9)
        .attr("y", height / 2 - margin.top / 2)
        .attr("fill", "RGB(255, 255, 255)")
        .attr("font-size", "18")
}

function colorGradient(d) {
    if (d * 2 < 255) {
        return "rgb(120,200,"+(d * 2)+")"
    }
    else {
        return "rgb(120,200,255)"
    }
}