var fs = require('fs');

/* Public Functions
----------------------------------------------------------------------------- */
module.exports = {

  create: function () {

    var population = [];

    // You would normally never block the thread, but this is a trivial example
    var contents = fs.readFileSync('./trivialExample/seed_data.csv', 'utf8');

    // If the seed_data file has any values in it.
    if (contents) {

      var arr = contents.replace(/\"/g, "").split(",");

      for (var i = 0; i < arr.length; i++) {
        population.push(parseInt(arr[i]));
      }

    // Otherwise, create some numbers of our own.
    } else {

      for (var i = 0; i < 1000; i++) {
        population.push(i);
      }

    }

    return population;

  },

  crossover: function (population) {

    var offspring = [];

    var populationSize = population.length;

    for (var i = 0; i < populationSize; i++) {

      var parent1 = population[i];

      for (var j = 0; j < populationSize; j++) {

        if (j !== i) {

          var parent2 = population[j];
          var child = combineGenetics(parent1, parent2);

          if (offspring.indexOf(child) === -1 ) {

            offspring.push(child);

          }
        }

      }

    }

    population = population.concat(offspring);
    return population;

  },

  mutate: function (population) {

    var populationSize = population.length;

    for (var i = 0; i < populationSize; i++) {

      var undergoesMutation = (((Math.floor(Math.random()*2)+1)%2) === 0);

      if (undergoesMutation) {

        var index = randomInteger(0, populationSize);

        if (index !== i) {

          var mutation = population[index];
          var mutant = combineGenetics(population[i], mutation);
          population.push(mutant);

        }

      }

    }

    return population;

  }

};


/* Private Functions
----------------------------------------------------------------------------- */

// Finds a random integer between the min and max provided.
function randomInteger(min, max) {
  return Math.floor( (Math.random() * max) + min);
};

// Combine 3 odd numbers to attempt to generate a new prime.
function combineGenetics(parent1, parent2) {
  return parent1*2 + parent2;
};
