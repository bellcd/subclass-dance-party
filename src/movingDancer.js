var makeMovingDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer-all moving-dancer"></span>');
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function() {
  // debugger;
  // this.$node.css({'border-color': 'yellow'});
  // alert('movingDancer step() called!');
  const makeMovementParams = () => {
    this.destinationTop = $("body").height() * Math.random();
    this.destinationLeft = $("body").width() * Math.random();
  };

  makeMovementParams();
  // call the old version of step at the beginning of any call to this new version of step
  // var oldStep = makeDancer.prototype.step;
  // oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.css({

  });

  this.$node.addClass('moving-dancer');
};