
//Create fs as the basic file system object
var fs = require('fs');

//Declare city as a single dimension array
var city = [];

//Read file contents in Synchrnous mode
var fileContents = fs.readFileSync('city.csv');

//split
var lines = fileContents.toString().split('\n');

for (var i=0;i<lines.length; i++)
{

        console.log(lines[i]);
}