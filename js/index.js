  // references to boddy element
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");


// listen for click on search button
$searchBtn.addEventListener("click", handleSearchButtonClick);

// table variable
var filteredTable = dataSet;
console.log(filteredTable.length);

// check which countries other than the us have ufo siting as to create radio button
// var countries = []
// for (var i = 0; i < filteredTable.length; i++) {
// 	if (dataSet[i].country != "us"){
// 		console.log(dataSet[i].country);
// 		if (countries.includes(dataSet[i].country)){
// 			console.log("already included");
// 		} else {
// 			countries.push(dataSet[i].country);
// 			console.log(countries)
// 		}
// 	}
// 	else if (dataSet[i].country == "undefined"){
// 		console.log("undefined" + i)
// 	} else {
// 		console.log("us")
// 	}
// 	console.log(countries)
// };
 let states = [ "",
 					"AK",
                      "AL",
                      "AR",
                      "AS",
                      "AZ",
                      "CA",
                      "CO",
                      "CT",
                      "DC",
                      "DE",
                      "FL",
                      "GA",
                      "GU",
                      "HI",
                      "IA",
                      "ID",
                      "IL",
                      "IN",
                      "KS",
                      "KY",
                      "LA",
                      "MA",
                      "MD",
                      "ME",
                      "MI",
                      "MN",
                      "MO",
                      "MS",
                      "MT",
                      "NC",
                      "ND",
                      "NE",
                      "NH",
                      "NJ",
                      "NM",
                      "NV",
                      "NY",
                      "OH",
                      "OK",
                      "OR",
                      "PA",
                      "PR",
                      "RI",
                      "SC",
                      "SD",
                      "TN",
                      "TX",
                      "UT",
                      "VA",
                      "VI",
                      "VT",
                      "WA",
                      "WI",
                      "WV",
                      "WY"]


var sel = document.getElementById('state');
for(var i = 0; i < states.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = states[i];
    opt.value = states[i];
    sel.appendChild(opt);
}

var shape = [""]
for (var i = 0; i < filteredTable.length; i++) {
	if (dataSet[i].shape != "us"){
		console.log(dataSet[i].shape);
		if (shape.includes(dataSet[i].shape)){
			console.log("already included");
		} else {
			shape.push(dataSet[i].shape);
			// console.log(shape)
		}
	}
	else if (dataSet[i].shape == "undefined"){
		console.log("undefined" + i)
	} else {
		console.log("us")
	}
	// console.log(shape)
};

     
var sel = document.getElementById('shape');
for(var i = 0; i < shape.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = shape[i];
    opt.value = shape[i];
    sel.appendChild(opt);
}

// render table and append to body
function renderTable() {
  // clear contents of table body
  $tbody.innerHTML = "";
  // for (var i = 0; i < 50; i++) {
  var pages = Math.ceil(filteredTable.length/50);
  console.log(pages)

  // for (var k = 1; k < pages; k ++) {
  // 	var pageNum = k
  // 	// console.log(pageNum)
  // 	// console.log("new page")
  // 	var startRow = (pageNum*50)-50
  // 	// var endRow = 
  // 	for (var i = startRow; i < ((pageNum+1)*50-50); i++) {
	 //    // Get get the current address object and its fields
	 //    // console.log(i)
	 //    var ufoSiting = filteredTable[i];
	 //    var fields = Object.keys(ufoSiting);
	 //    // Create a new row in the tbody, set the index to be i + startingIndex
	 //    var $row = $tbody.insertRow(i);
	 //    for (var j = 0; j < fields.length; j++) {
	 //      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
	 //      var field = fields[j];
	 //      var $cell = $row.insertCell(j);
	 //      $cell.innerText = ufoSiting[field];
	 //    }
	 //  }
	 // }
  	// unadulturated
	  for (var i = 0; i < filteredTable.length; i++) {
	    // Get get the current address object and its fields
	    var ufoSiting = filteredTable[i];
	    var fields = Object.keys(ufoSiting);
	    // Create a new row in the tbody, set the index to be i + startingIndex
	    var $row = $tbody.insertRow(i);
	    for (var j = 0; j < fields.length; j++) {
	      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
	      var field = fields[j];
	      var $cell = $row.insertCell(j);
	      $cell.innerText = ufoSiting[field];
	    }
	  }
}

function reformatDate(date) {
	var MyDateString;
	var newDate = new Date(date);
// https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
	MyDateString = newDate.getFullYear() + "-" + 
		('0' + (newDate.getMonth()+1)).slice(-2) + "-" +
		('0' + newDate.getDate()).slice(-2);

  // MyDateString = ('0' + MyDate.getDate()).slice(-2) + '/'
  //            + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/'
  //            + MyDate.getFullYear();

	// console.log(MyDateString);
	return MyDateString;
};

// Level 1 unadulterated
// function handleSearchButtonClick() {
// 	// console.log($dateInput.value);
//   var filterDate = $dateInput.value;
//   // console.log(filterDate);

// //   // Set filteredAddresses to an array of all addresses whose datetime matches the filter
//   filteredTable = dataSet.filter(function(ufoSiting) {
//     var sitingDate = reformatDate(ufoSiting.datetime);
// 	console.log(sitingDate);
	
// //     // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//     return sitingDate === filterDate;
//   });
//   renderTable();
// }

// Level 2
function handleSearchButtonClick() {
	// console.log($dateInput.value);

  var filterDate = $dateInput.value;
  var filterState = $stateInput.value.toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();

  var filterCountry = $countryInput.value;
  if (filterCountry == "United States"){
  	filterCountry = "us";
  } else if (filterCountry == "Great Britain"){
  	filterCountry = "gb";
  } else if (filterCountry == "Canada"){
  	filterCountry = "ca"
  } else if (filterCountry == "Australia") {
  	filterCountry = "au"
  } else {
  	filterCountry = ""
  }

  var filterShape = $shapeInput.value;
  


  console.log(filterCountry);

//   // Set filteredAddresses to an array of all addresses whose datetime matches the filter
  filteredTable = dataSet.filter(function(ufoSiting) {
    var sitingDate = reformatDate(ufoSiting.datetime);
    var sitingState = ufoSiting.state.toLowerCase();
   	// console.log(ufoSiting.city + ufoSiting.comments)
    var sitingCity = ufoSiting.city.toLowerCase();
    var sitingCountry = ufoSiting.country.toLowerCase();
    var sitingShape = ufoSiting.shape.toLowerCase();
    // console.log(sitingCountry)

    if (filterState == ""){
    	sitingState = ""
		// console.log(filterState);
	};

	if (filterDate == ""){
    	sitingDate = ""
		// console.log(filterState);
	};

	if (filterCity == ""){
    	sitingCity = ""
		// console.log(filterState);
	};

	if (filterCountry == ""){
    	sitingCountry = ""
		// console.log(filterCountry + "check");
	};

	if (filterShape == ""){
    	sitingShape = ""
		// console.log(filterCountry + "check");
	};


	// console.log(sitingState);
//     // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return sitingDate === filterDate && sitingState === filterState && sitingCity === filterCity && filterCountry == sitingCountry && filterShape === sitingShape;
  });
  renderTable();
  // clearVariables();
  
}

// function clearVariables() {
// 	sitingDate = "";
// 	filterDate = "";
// 	sitingState = "";
// 	filterState = "";
// 	sitingCity
// 	filterCity = "";
// 	filterCountry = "";
// 	sitingCountry = "";
// 	filterShape = "";
// 	sitingShape = "";

// 	// return sitingDate filterDate sitingState filterState filterCity sitingCity filterCountry sitingCountry filterShape sitingShape
// }

renderTable();
