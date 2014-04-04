/* Public Functions
----------------------------------------------------------------------------- */
module.exports = {

  fittestMembers: function (population) {

    population = population.sort(sortNumber);

    var fittestMembers = [];
    // get the ten best members of the population, i.e., the largest primes
    for (var i = population.length -1; i >= 0; i--) {

      var member = population[i];

      fittestMembers.push(member);

      if (fittestMembers.length === 10) {
        return fittestMembers;
      }

    }

    return fittestMembers;

  }

};

function sortNumber(a,b) {
    return a - b;
}
