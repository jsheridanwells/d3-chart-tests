'use strict';
//array of data to illustrate
let results = [20, 30, 40, 10];

//for each datum in results, a starting and ending angle of the circle
let donut = d3.layout.pie();
let arcData = donut(results);
//set length of hole and outer ring, innerRadius(0) makes pie graph
let arc = d3.svg.arc().innerRadius(100).outerRadius(160);

//connects start/end angles from arcData to rendered SVG arcs
arc.startAngle(function (d) {return d.startAngle;});
arc.endAngle(function (d) {return d.endAngle;});

//creates varied colors for every arc
let color = d3.scale.category10();

//creates SVG appended to div.main, sets height and width
let svg = d3.select('.main').append('svg');
svg.attr('height', '500').attr('width', '100%');

//'g' applies values to each shape in SVG element, translates each arc to form circle
svg.append('g').attr('transform', 'translate(200,175)')
//for each datum in arcData, create a path
	.selectAll('path').data(arcData).enter()
	//for each path, apply arc values
		.append('path').attr('d', arc)
		//for each path, change the fill color using color function
		.style('fill', (d,i) => {return color(i);});
