var fs = require('fs'),
    ga = require('./trivialExample/geneticAlgorithm');

var numberOfGenerations = 2,
    result = ga.run(numberOfGenerations),
    writeVal = "";

// Loop over the results and convert them to a csv.
for (var i = 0; i < result.length; i++) {
  writeVal += '"' + result[i] + '"';
  if (i < result.length-1) {
    writeVal += ",";
  }
}


// This is a separate output file so you don't have to overwrite your seed data.
fs.writeFile('./found-primes.csv', writeVal, function (err) {
  if (err) { throw err; }
  console.log('File was saved.');
});


/* If you want to overwrite your seed data file each time, uncomment this code.

fs.writeFile('./trivialExample/seed_data.csv', writeVal, function (err) {
  if (err) { throw err; }
  console.log('File was saved.');
});

*/
