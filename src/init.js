$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.round($("body").height() * Math.random()),
      Math.round($("body").width() * Math.random()),
      Math.round(Math.random() * 1000)
    );

    if (dancer.$node.find('img').hasClass('rotating-dancer')) {
      dancer.$node.on('mouseover', function(e) {
        console.log('e: ', e);
        $(e.target).addClass('special-move');
      });
    }

    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.on('click', function(e) {
        var dancerClickedOnTop = window.dancers[i].top;
        var dancerClickedOnLeft = window.dancers[i].left;
        var smallest = undefined;
        var eachDiff;
        var otherDancer;

        window.dancers.forEach(dancer => {
          if (dancer.top === dancerClickedOnTop && dancer.left === dancerClickedOnLeft) {
            // top and left are exactly the same, it's (probably) the same dancer node, so skip this iteration of the loop
            return;
          } else if (dancer.top !== dancerClickedOnTop && dancer.left !== dancerClickedOnLeft) {
            // either or both of top and left are different, calculate & store the hypotenuse
            eachDiff = Math.hypot(Math.abs(dancer.left - dancerClickedOnLeft), Math.abs(dancer.top - dancerClickedOnTop));
          } else if (dancer.top === dancerClickedOnTop) {
            // the top is the same, calculate and store the horizontal difference
            eachDiff = Math.abs(dancer.left - dancerClickedOnLeft);
          } else {
            // the left is the same, calculate and store the vertical difference
            eachDiff = Math.abs(dancer.top - dancerClickedOnTop);
          }

          if (smallest === undefined || eachDiff < smallest) {
            // if smallest if still undefined OR the most recent calculated difference is less than the current smallest, set smallest to the current eachDiff
            smallest = eachDiff;
            // set a reference to the subclass instance with the currently smallest difference
            otherDancer = dancer;
          }
        });

        window.dancers[i].$node.addClass('pair-dancer');
        otherDancer.$node.addClass('pair-dancer');
      });
    }


    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });
});