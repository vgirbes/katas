function nextBigger(n){
  var numbers = String(n).split('');
  var pos;
  var n_right;
  var pos_right;
  var low_n;
  
  for (var i = numbers.length - 1; i >= 0; i--) {
    var j = i;
    if (numbers[i] > numbers[j-1]) {
      pos = i;
      n = numbers[i];
      low_n = numbers[j-1];
      break;
    }
  };
  
  if (typeof low_n !== "undefined") {
    var rightArray = numbers.splice(pos, numbers.length-1);
    rightArray.sort();
    var leftArray = numbers.splice(0, pos);
  
    for (var i = 0; i < rightArray.length; i++) {
      if (rightArray[i] > low_n) {
        pos_right = i;
        n_right = rightArray[i];
        break;
      }
    };
    
    rightArray.splice(pos_right, 1);
    rightArray.push(low_n);
    rightArray.sort();
    leftArray.pop();
    leftArray.push(n_right);
  
    return parseInt(leftArray.join('') + rightArray.sort().join(''));
  }
  
  return -1;
}
