var vg_1 = "map.json";
var vg_2 = "chart.json";
var vg_3 ="area_chart.json"
var vg_4 ="pie_chart.json"
vegaEmbed("#map_graph", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#chart_graph", vg_2).then(function(result) {}).catch(console.error);
vegaEmbed("#area_graph", vg_3).then(function(result) {}).catch(console.error);
vegaEmbed("#pie_chart", vg_4).then(function(result) {}).catch(console.error);
