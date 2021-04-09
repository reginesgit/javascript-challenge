// from data.js
var tableData = data;

// select table body in HTML 
var tbody = d3.select("tbody");

// use arrow functions to add table rows and fields and fill them with data
data.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// select input button
var button = d3.select("#filter-btn");

// use d3 function to select current filter input(s)
button.on("click", function() {
  // Select the current input
  var datetext = d3.select("#datetime").property("value");
  var citytext = d3.select("#city").property("value");
  var statetext = d3.select("#state").property("value");
  var countrytext = d3.select("#country").property("value");
  var shapetext = d3.select("#shape").property("value");

  // custom functions to select an array of objects based on filters entered
  function selectDate(selection) {
    return selection.datetime == datetext;
  }

  function selectCity(selection) {
    return selection.city == citytext;
  }

  function selectState(selection) {
    return selection.state == statetext;
  }

  function selectCountry(selection) {
    return selection.country == countrytext;
  }

  function selectShape(selection) {
    return selection.shape == shapetext;
  }
    
  // gather data for filtering
  var filteredData = data;

  // conditional check to see which filters have been activated
  // filter() uses the custom function as its argument
  if(datetext){
    filteredData = filteredData.filter(selectDate);
  }
  if(citytext){
    filteredData = filteredData.filter(selectCity);
  }
  if(statetext){
    filteredData = filteredData.filter(selectState);
  }
  if(countrytext){
    filteredData = filteredData.filter(selectCountry);
  }
  if(shapetext){
    filteredData = filteredData.filter(selectShape);
  }

  // empty the current table to display filtered results below
  tbody.html("")

  // generate new table with data filtered above
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
});