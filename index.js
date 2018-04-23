function produceDrivingRange(blockRange) {
  return function(start, finish) {
    let s = Number(start.match(/\d+/g))
    let f = Number(finish.match(/\d+/g))
    let distance = Math.abs(s - f)
    let range = Math.abs(blockRange - distance)
    if (distance > blockRange) {
      return `${range} blocks out of range`
    } else {
      return `within range by ${range}`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
    return (total * percent)
  }
}

function createDriver() {
  let ItemId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++ItemId;
    }
  }
}
