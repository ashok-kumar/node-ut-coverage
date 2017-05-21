class Calculation {

  constructor(paramOne, paramTwo) {
    this.paramOne = paramOne;
    this.paramTwo = paramTwo;
  }

  get addition() {
    return this.paramOne + this.paramTwo || 0;
  }

}

module.exports = Calculation;

