var population = require('./population'),
    fitness = require('./fitness'),
    selection = require('./selection');


module.exports = {

  run: function(iterations) {

    console.log("Run trivial G.A. with " + iterations + " iterations.");

    var initialPopulation = population.create();

    var currentPopulation = initialPopulation;

    for (var i = 0; i < iterations; i++) {

      // Evaluate the fitness of the population
      var fitPopulation = fitness.evaluate(currentPopulation);
      fitPopulationLog(i, fitPopulation);

      // Select the fittest members of the surviving population
      var fittestPopulation = selection.fittestMembers(fitPopulation);

      // Create the next generation of the population
      var crossoverPopulation = population.crossover(fittestPopulation);

      // Mutate some of the members of the next generation of the population
      var mutatedPopulation = population.mutate(crossoverPopulation);

      // The mutated population becomes the current population. Continue.
      var currentPopulation = mutatedPopulation.sort(sortNumber);

      if (currentPopulation.size <= 1) {

        break;

      } else {

        continue;

      }

    }

    var finalPopulation = fitness.evaluate(currentPopulation);
    console.log("The final population contains:");
    console.log(finalPopulation);

    return finalPopulation;
  }

}

function sortNumber(a,b) {
    return a - b;
}

function fitPopulationLog(i, population) {
  var g = ("0" + (i+1)).slice(-2);
  var size = population.length;

  console.log("Generation " + g + " has a population size of " + size + ".");
}
