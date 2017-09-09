'use strict';

//-------------------SCALE -------------------------//
let width = 1000;
//height of world's tallest buildings
let data = [2717, 2073, 1971, 1776, 1670];

//create SVG appended to div.main
let mySVG = d3.select('.main')
				.append('svg')
				.attr('class', 'scale-svg');

//map length of SVG to max value of data set
let scale = d3.scale.linear()
				.domain([0, d3.max(data)])
				.range([10, width]);

//create an axis with this scale
let axis = d3.svg.axis()
				.scale(scale);

//add axis to svg
mySVG.call(axis);