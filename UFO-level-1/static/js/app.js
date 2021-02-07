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
    
    var inputValue = document.getElementById("datetime").value;
    var search = tableData.filter(tableData => tableData.datetime === inputValue);
    updateTable(search);
}
