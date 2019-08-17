var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer-all blinky-dancer"></span>');

  // this.step(); // unneeded?? step() is called from the superclass ...
  this.$node.append('<img src="https://media3.giphy.com/media/Wra8NkJ6SXQhXrBa26/giphy.gif?cid=790b7611b955710101b183237295b6d6587eefc425d4a9e7&rid=giphy.gif"/>');
  this.$node.addClass('blinky-dancer');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  const randomColor = function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // alert('blinkyDancer step() called!');

  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};