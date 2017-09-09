'use strict';

//-------------------LINE CHART -------------------------//

//set number of data points and space, this will generate width of div
let dataPoints = 100;
let spacing = 10;
d3.select('.main').style('width', (dataPoints * spacing) + 'px');

//generate random data points
let lineData = d3.range(dataPoints)
				.map( function(){ return Math.random() * 30 + 0; })
				.map( function( d, i){ return { x: i * spacing, y: d };});

//creates SVG appended to div.main, sets height and width
let lineSVG = d3.select('.main').append('svg');
lineSVG.attr('height', '10em').attr('width', '100%');

//create area generator
let area = d3.svg.area()
			.y0(100)
			.y1(d => {return d.y;})
			.x(d => {return d.x;});

//append path and lineData to SVG
lineSVG.append('path').datum(lineData).attr('d', area)
		.attr('class', 'line-area-style');

//create line generator
let line = d3.svg.line()
				.x(d => {return d.x;})
				.y(d => {return d.y;});

//create line with data
lineSVG.append('path').datum(lineData).attr('d', line)
		.attr('class', 'line-style');

//append circles for each data point
lineSVG.selectAll('circle')
		.data(lineData)
		.enter()
		.append('circle')
		.attr('cx', (d) => {return d.x;})
		.attr('cy', (d) => {return d.y;})
		.attr('r', 2);