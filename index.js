var addUFOBtn = document.querySelector("#add-ufo");

addUFOBtn.addEventListener("click", function(event) {
  
  var dateTime = document.querySelector("#datetime");
  var city = document.querySelector("#city");
  var state = document.querySelector("#state");
  var country = document.querySelector("#country");
  var shape = document.querySelector("#shape");
  var duration = document.querySelector("#duration");
  var comments = document.querySelector("#comments");
  var ufoList = document.querySelector("#ufo-list");


  if (dateTime.value=="" || city.value=="" || state.value=="" || country.value=="" || shape.value=="" || comments.value=="") {
    alert("Please fill out the information for all of the boxes.");
  } else {
    
    var data = {
      datetime: dateTime.value,
      city: city.value,
      state: state.value,
      country: country.value,
      shape: shape.value,
      durationMinutes: duration.value,
      comments: comments.value
    };

    dataSet = dataSet.concat(data);
    ufoData = dataSet;

    dateTime.value = "";
    city.value = "";
    state.value = "";
    country.value = "";
    shape.value = "";
    duration.value = "";
    comments.value = "";

    //alert("Sighting Successfully Added. Please wait for new entry to be added. It is loading a lot!");

    renderTable();
    console.log("Successfully Added UFO");
  }
});
console.log("Loaded!");