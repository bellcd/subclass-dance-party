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

    if (dancer.$node.hasClass('rotating-dancer')) {
      dancer.$node.on('mouseover', function(e) {
        $(e.target).addClass('special-move');
      });
    }

    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.on('click', function(e) {
        var dancerClickedOnTop = dancer.top;
        var dancerClickedOnLeft = dancer.left;
        var smallest = undefined;
        var eachDiff;
        var otherDancer;

        window.dancers.forEach(dancer => {
          if (dancer.top !== dancerClickedOnTop && dancer.left !== dancerClickedOnLeft) {
            eachDiff = Math.hypot(Math.abs(dancer.left - dancerClickedOnLeft), Math.abs(dancer.top - dancerClickedOnTop));
          } else if (dancer.top === dancerClickedOnTop) {
            eachDiff = Math.abs(dancer.left - dancerClickedOnLeft);
          } else {
            eachDiff = Math.abs(dancer.top - dancerClickedOnTop);
          }

          if (smallest === undefined) {
            otherDancer = dancer
            smallest = eachDiff;
          } else if (eachDiff < smallest) {
            otherDancer = dancer
            smallest = smallest;
          }
        });

        window.dancers[i].$node.css({'border-color': 'yellow'});
        otherDancer.$node.css({'border-color': 'yellow'});
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


// add click handler for dancer in question
  // on click,
    // get top and left position of dancer in question
    // iterate through array of all dancers
      // if top and left positions are NOT the same as dancer in question
        // calculate diagonal, w/Math.hypot
      // else
        // calculate difference in position property that is different