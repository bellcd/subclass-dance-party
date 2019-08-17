var rotatingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img class="rotating-dancer" src="https://media1.giphy.com/media/26DN2hUeMwRd2P1o4/giphy.gif?cid=790b761160cf41b68c79ad66f534d22779f9637fda6f3683&rid=giphy.gif"/>');
  $.data(this.$node, "instance", 'a string');
};

rotatingDancer.prototype = Object.create(makeDancer.prototype);
rotatingDancer.prototype.constructor = rotatingDancer;

rotatingDancer.prototype.step = function() {

};
