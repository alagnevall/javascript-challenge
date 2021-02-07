// from data.js
var tableData = data;

// YOUR CODE HERE!

//populate the date to the table

//tell it where to put the data--needed to update the id in index.html(tbody)
var output = document.getElementById("ufoSightings");
//create an empty string to hold the data
var tableContent = '';
//start for loop based on index for full length of tabledata
for (index = 0; index < tableData.length; index++) {
    //tell it to grab each index + column name value
    //start new row for table using <tr>
    tableContent += "<tr><td>" + tableData[index].datetime + "</td>"
    + "<td>" + tableData[index].city + "</td>"
    + "<td>" + tableData[index].state + "</td>"
    + "<td>" + tableData[index].country + "</td>"
    + "<td>" + tableData[index].shape + "</td>"
    + "<td>" + tableData[index].durationMinutes + "</td>"
    //close out the row so it knows to start new row using </tr>
    + "<td>" + tableData[index].comments + "</td></tr>";
}
//display the data in index.html
output.innerHTML += tableContent;
