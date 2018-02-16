// Get references to the tbody element, input field and button
var $tbody = document.querySelector("#table2");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", searchClick);
var ufoData = dataSet;

function renderTable() {
	
	var filteredData = ufoData;
	console.log("Rendering Table...");
	console.log(filteredData);
  	$tbody.innerHTML = "";

	for (var i = 0; i < filteredData.length; i++) {
		// Get get the current ufo object and its fields
		var ufo = filteredData[i];
		var fields = Object.keys(ufo);

		// Create a new row in the tbody, set the index to be i + startingIndex
		var $row = $tbody.insertRow(i);

		for (var j = 0; j < fields.length; j++) {
	  		// For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
			var field = fields[j];
	  		var $cell = $row.insertCell(j);
	  		$cell.innerText = ufo[field];
		}
	}

  	console.log("Rendered " + i + " rows!");
}

function searchClick() {
	var ufoSearch = document.getElementById("searchC").value.trim().toLowerCase();
	var searchType = document.getElementById("searchType").value;
	
	// Set filteredAddresses to an array of all addresses whose "state" matches the filter

  	ufoData = dataSet.filter(function(ufo) {
  		if (ufoSearch != "") {
  			if (searchType == 0) {
  				var dataState = ufo.datetime.toLowerCase();
  			} else if (searchType == 1) {
  				var dataState = ufo.city.toLowerCase();
  			} else if (searchType == 2) {
  				var dataState = ufo.state.toLowerCase();
  			} else if (searchType == 3) {
  				var dataState = ufo.country.toLowerCase();
  			} else {
  				var dataState = ufo.shape.toLowerCase();
  			}
	  		
	      	// If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
	    	return dataState === ufoSearch;
    	} else {
    		return dataSet;
    	}
  	});
  	renderTable();
}

renderTable();