var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it can add', function(){
    calculator.add(3);
    assert.equal(3, calculator.runningTotal);
  });

  it('it can subtract', function(){
    calculator.previousTotal = 9
    calculator.subtract(6);
    assert.equal(3, calculator.runningTotal);
  });

  it('it can multiply', function(){
    calculator.previousTotal = 4
    calculator.multiply(5);
    assert.equal(20, calculator.runningTotal);
  });

  it('it can divide', function(){
    calculator.previousTotal = 15;
    calculator.divide(3);
    assert.equal(5, calculator.runningTotal);
  });

  it('it can click number', function(){
    calculator.numberClick(8);
    assert.equal(8, calculator.runningTotal);
  });

  it('it can click operator', function(){
    calculator.operatorClick('+');
    assert.equal('+', calculator.previousOperator);
  });

  it('it can clear click', function(){
    calculator.previousTotal = 7;
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  });
});
