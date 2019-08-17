var rotatingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('rotating-dancer');
  //this.$node.data("instance", this);
  $.data(this.$node, "instance", 'a string');

  // this.$node = $.extend(this.$node, {instance: this});
};

rotatingDancer.prototype = Object.create(makeDancer.prototype);
rotatingDancer.prototype.constructor = rotatingDancer;

rotatingDancer.prototype.step = function() {

}
