import React, { Component } from 'react';
import * as d3 from 'd3';

export default class barChart extends Component {
    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }

    render() {
        return (
            <div className='barChart'/>
        )
    }
}


const draw = (props) => {
    let dataset = props.data;
    //console.log(props.data)

    d3.select('.barChart > *').remove();
    let margin = { top: 10, right: 10, bottom: 10, left: 10 }
    const width = props.width - margin.left - margin.right;;
    const height = props.height - margin.top - margin.bottom;
    const barPadding = 10
    const barWidth = (width - margin.right - margin.left) / dataset.length;
    let svg = d3.select(".barChart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    let xscale = d3.scaleLinear()
                    .domain([0, dataset.length])
                    .range([margin.left, width - margin.right])

    let yscale = d3.scaleSqrt()
                    .domain([0, d3.max(dataset)])
                    .range([height - margin.bottom, margin.top])
    //let xAxis = d3.axisBottom(xscale).ticks(dataset.length)
    //let yAxis = d3.axisRight(yscale)
    /*
    svg.append('g')
        .attr('class','xAxis')
        .call(xAxis)
        .attr('transform', `translate(0, ${height - margin.bottom})`)
    */
    /*
    svg.append('g')
        .attr('class','yAxis')
        .call(yAxis)
        .attr('transform', `translate(${margin.left}, 0)`)
    */
    svg.append('g')
        .attr('class','rect')
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append('rect')
        .attr('height', d => height - margin.bottom - yscale(d) - 20)
        .attr('width', barWidth - barPadding)
        .attr('x', (d, i)=>xscale(i))
        .attr('y', (d) => yscale(d))
        .attr("fill", (d) => colorGradient(d));
    
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text((d) =>  {return d})
        .attr("class","text")
        .attr("x",(d, i)=>xscale(i + 0.48))
        //.attr("y",(d) => {return height - (height + margin.top - yscale(d)) / 2})
        .attr("y",(d) => {return height - margin.bottom})
        .attr("fill", "RGB(0, 0, 0)")
        .attr("font-size", "18")
        .style("text-anchor", "middle")
    
    svg.selectAll("rect")
        .on('mouseenter', function (actual, i) {
            d3.select(this).attr('opacity', 0.6)
        })
        .on('mouseleave', function (actual, i) {
            d3.select(this).attr('opacity', 1)
        })
}


function colorGradient(d) {
    if (d * 2 < 255) {
        return "rgb(120,200,"+(d * 2)+")"
    }
    else {
        return "rgb(120,200,255)"
    }
}
