describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);

      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('randomColor', function() {
    it('should generate new color at least once per second', function() {

      var color1 = blinkyDancer.randomColor();

      clock.tick(timeBetweenSteps);

      clock.tick(timeBetweenSteps);

      var color2 = blinkyDancer.randomColor();
      expect(color1).to.not.equal(color2);
    });
  });
});

describe('lineUp', function() {
  it('all dancers should line up on the left side of the screen', function() {
    blinkyDancer = new makeBlinkyDancer(10, 20, 100);

    blinkyDancer.lineUp();
    expect(blinkyDancer.$node[0].offsetLeft).to.be.equal(0);
  });
});
