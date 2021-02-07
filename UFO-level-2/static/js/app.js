// from data.js
var tableData = data;

// YOUR CODE HERE!
function updateTable(grab){

    //populate the date to the table
    
    //tell it where to put the data--needed to update the id in index.html(tbody)
    var output = document.getElementById("ufoSightings");
    //create an empty string to hold the data
    var tableContent = '';
    //start for loop based on index for full length of tabledata
    for (index = 0; index < grab.length; index++) {
        
        //tell it to grab each index + column name value
        //start new row for table using <tr>
        tableContent += "<tr><td>" + grab[index].datetime + "</td>"
        + "<td>" + grab[index].city + "</td>"
        + "<td>" + grab[index].state + "</td>"
        + "<td>" + grab[index].country + "</td>"
        + "<td>" + grab[index].shape + "</td>"
        + "<td>" + grab[index].durationMinutes + "</td>"
        //close out the row so it knows to start new row using </tr>
        + "<td>" + grab[index].comments + "</td></tr>";
    }
    //display the data in index.html
    output.innerHTML = tableContent;
}

function filterTable(){

    //listen for events to search through table based on date/time
    
    var dateValue = document.getElementById("datetime").value;
    var cityValue = document.getElementById("city").value.toLowerCase();
    var stateValue = document.getElementById("state").value.toLowerCase();
    var countryValue = document.getElementById("county").value.toLowerCase();
    var shapeValue = document.getElementById("shape").value.toLowerCase();
    var search = tableData;

if (dateValue !== ""){
    search = search.filter(search => search.datetime === dateValue);
}
if (cityValue !== ""){
    search = search.filter(search => search.city === cityValue);
}
if (stateValue !== ""){
    search = search.filter(search => search.state === stateValue);
}
if (countryValue !== ""){
    search = search.filter(search => search.country === countryValue);
}
if (shapeValue !== ""){
    search = search.filter(search => search.shape === shapeValue);
}

    // var search = tableData.filter(tableData => tableData.datetime === inputValue);
    updateTable(search);
}
