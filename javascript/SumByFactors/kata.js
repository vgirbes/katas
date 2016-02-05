function sumOfDivided(lst) {
  var options = {};
  options.lst = lst;
  var primeFactor = new PrimeFactor(options);
  return primeFactor.result;
}

function PrimeFactor(options) {
  this.lst = options.lst;
  this.result = [];
  this.arr = [];
  this.init();
}

PrimeFactor.prototype.init = function() {
  for (var i = this.lst.length - 1; i >= 0; i--) {
    this.arr = this.factor(this.lst[i]).sort().filter((item, pos, ary) => {
        return !pos || item != ary[pos - 1];
    });
  };
  this.orderResult();
  this.response();
}

PrimeFactor.prototype.factor = function(num) {
  var factorPrimo = 2;
  var contadorCadaFactor = 0;
  var num = Math.abs(num);
  while (num > 1){
    contadorCadaFactor = 0;
    while ((num % factorPrimo) == 0) {
      ++contadorCadaFactor;
      num /= factorPrimo;
    }
    if (contadorCadaFactor > 0) {
      this.arr.push(factorPrimo);
    }
    factorPrimo++;
  }
 
  return this.arr;
}

PrimeFactor.prototype.orderResult = function() {
  this.arr.sort((a, b) => {
    return a - b;
  });
}

PrimeFactor.prototype.response = function() {
  for (var i = 0; i < this.arr.length; i++) {
    var row = [];
    var acumulate = 0;
    for (var j = 0; j < this.lst.length; j++) {
      if (this.lst[j] % this.arr[i] == 0) {
        acumulate += this.lst[j];
      }
    }
    row = [this.arr[i], acumulate];
    this.result.push(row);
  }
}
