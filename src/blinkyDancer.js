var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer-all blinky-dancer"></span>');

  // this.step(); // unneeded?? step() is called from the superclass ...
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;



makeBlinkyDancer.prototype.step = function() {
  // alert('blinkyDancer step() called!');

  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle()
    .css({
      top: this.top,
      left: this.left
    });
};

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
// var oldStep = makeDancer.prototype.step;