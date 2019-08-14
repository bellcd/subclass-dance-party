// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step(); // TODO: why are these necessary?
    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left); // TODO: why are these necessary?
};

  MakeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // setTimeout(this.step.bind(this), this.timeBetweenSteps);
    setTimeout(this.step, this.timeBetweenSteps); // TODO: why does this work instead of the line above??
  };


  MakeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };



  MakeDancer.prototype.constructor = MakeDancer;
