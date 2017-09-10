'use strict';

//-------------------SCALE -------------------------//
let width = 1000;
let height = 100;
//height of world's tallest buildings
// let data = [2717, 2073, 1971, 1776, 1670];
let data = [
	[ "Burj Khalifa" , 2717],
	[ "Shanghai Tower" , 2073],
	[ "Makkah Royal Clock Tower Hotel", 1971],
	[ "One World Trade Center" , 1776],
	[ "Taipei 101" , 1670]
];

//create SVG appended to div.main
let mySVG = d3.select('.main')
				.append('svg')
				.attr('class', 'scale-svg');

//map length of SVG to max value of data set
let scale = d3.scale.linear()
				.domain([0, d3.max(data, d => {return d[1] + 100;})])
				.range([10, width]);

//create an axis with this scale
let axis = d3.svg.axis()
				.scale(scale);

//add axis to svg
mySVG.append('g').call(axis).attr('class', 'axis-style')
				.attr('transform', 'translate(0,' + height + ')');


//-------------------Add Circles to Scale for Each Data Point -------------------------//
mySVG.selectAll('circle').data(data).enter()
						.append('circle')
						.attr('r', 4)
						.attr('transform', d => {return 'translate(' + scale(d[1]) + ',' + height + ')';});

//-------------------Add Labels for Each Data Point -------------------------//
mySVG.selectAll('text').data(data).enter()
						.append('text').text(d => {return d[0];})
						.attr('transform', function(d) {return 'translate(' + scale(d[1]) + ',' + height + ')' + 'rotate(-20) translate(5, -5)';});
