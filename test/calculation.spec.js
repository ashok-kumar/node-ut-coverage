let chai = require('chai'),
    path = require('path');

chai.should();

let Calculation = require(path.join(__dirname, '..', 'calculation'));
 
describe('Calculation', () => {

  describe('Addition', () => {
    let rectangle;

    beforeEach(() => {
      calculation = new Calculation(10, 20);
    });

    it('sum of 10, 20 is 30', () => {
        calculation.addition.should.equal(30);
    });
    
  });

});

