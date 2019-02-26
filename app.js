var fs = require('fs');
var city = [];
var fileContents = fs.readFileSync('city.csv');
var lines = fileContents.toString().split('\n');

for (var i=0; i<lines.length; i++)
{
    city.push(lines[i].toString().split('\n'));
}

for (var i=0;i<lines.length; i++)
{
    for (var j=0; j<1; j++)
    {
        console.log(city[i][j]);
        console.log('\n');
    }
    
}