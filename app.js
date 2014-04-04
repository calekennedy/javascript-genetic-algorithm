var fs = require('fs'),
    ga = require('./trivialExample/geneticAlgorithm');

var result = ga.run(4);
var writeVal = "";

for (var i = 0; i < result.length; i++) {
  writeVal += '"' + result[i] + '"';
  if (i < result.length-1) {
    writeVal += ",";
  }
}

fs.writeFile('./foundPrimes.csv', writeVal, function (err) {
  if (err) { throw err; }
  console.log('File was saved.');
});


/* If you want to overwrite your seed data file each time, uncomment this code.

fs.writeFile('./trivialExample/seed_data.csv', writeVal, function (err) {
  if (err) { throw err; }
  console.log('File was saved.');
});

*/
