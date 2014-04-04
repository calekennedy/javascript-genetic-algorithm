/* Public Functions
----------------------------------------------------------------------------- */
module.exports = {

  evaluate: function (population) {

    var populationSize = population.length;
    var fitPopulation = [];

    for (var i = 0; i < populationSize; i++) {

      var member = population[i];

      var hasDesiredTraits = isPrime(member);

      if (hasDesiredTraits) {

        if (fitPopulation.indexOf(member) === -1 ) {
          fitPopulation.push(member);
        }
      }

    }
    return fitPopulation;

  }

};


/* Private Functions
----------------------------------------------------------------------------- */

// Determines if a number is prime by attempting to find an integer divisor
// between 2 and its square root.
function isPrime (val) {

  var isEven = (val/2)%1 === 0;

  var root = Math.sqrt(val)
  var root = Math.ceil(root);

  if (isEven) { return false; }

  for (var i = 3; i <= root; i += 2) {

    var quotient = val/i;
    var quotientIsInteger = (quotient%1 === 0);

    if (quotientIsInteger) {
      return false;
    }

  }
  
  return true;

};
