
// const d3 = require('d3');
// global.fetch = require('node-fetch');

// var path = 'resources/sample.csv';

// d3.csv(path).then(function(data) {
//     console.log(data);
// });

const circles = [
    { type: 'small', r: 50, x: 100, y: 150 },
    { type: 'medium', r: 100, x: 200, y: 150 },
    { type: 'large', r: 150, x: 300, y: 150 }  
  ];
  const svg = d3.select('#circle')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);
  svg.selectAll('circles')
    .data(circles)
    .enter()
    .append('circle')
    .attr('r', d => d.r)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('class', d => d.type);

var dataset = [1, 2, 3];

d3.select('#result').selectAll('p')
  .append('p')
  .data(dataset)
  .enter()
  .append('p')
  .text(function(d) {
      return d;
  })
  .style('color', 'red');

var circlesArea = d3.select('#circlesArea')
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle');

circlesArea.attr("cx", function(d, i) {
    return (i * 50) + 25;
})
  .attr('cy', 50)
  .attr('r', function(d) {
      return 5 * d;
  })
  .attr('fill', 'yellow')
  .attr('stroke', 'orange')
  .attr('stroke-width', function(d) {
      return d;
  });


var svgGraph = d3.select("body").append("svg").attr('id', 'graph').attr("width", 700).attr("height", 400);
var graphDataset = 
  [ [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88] ];

svgGraph.selectAll('circle')
   .data(graphDataset)
   .enter()
   .append('circle')
   .attr("cx", function(d) {
       return d[0];
    })
   .attr("cy", function(d) {
       return d[1];
   })
   .attr("r", 4);
svgGraph.selectAll('text')
   .data(graphDataset)
   .enter()
   .append('text')
   .attr("x", function(d) {
       return d[0];
    })
   .attr("y", function(d) {
       return d[1];
    })
   .attr("fill", "red")
   .text(function(d) {
       return d[0] + " : " + d[1];
   })
