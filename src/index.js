module.exports = function check(str, bracketsConfig) {

  function lar(i, arr) {

  outer: for (i; i < arr.length; i) {
    if (i == -1) {i += 1};
    if (arr[i] == '(') {
      if (arr[i+1] == ')') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }
    
    if (arr[i] == '[') {
      if (arr[i+1] == ']') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }

    if (arr[i] == '{') {
      if (arr[i+1] == '}') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }

    if (arr[i] == '|') {
      if (arr[i+1] == '|') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }

    if (arr[i] == '1') {
      if (arr[i+1] == '2') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }

    if (arr[i] == '3') {
      if (arr[i+1] == '4') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }

    if (arr[i] == '5') {
      if (arr[i+1] == '6') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }

    if (arr[i] == '7') {
      if (arr[i+1] == '7') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }

    if (arr[i] == '8') {
      if (arr[i+1] == '8') {
        delete arr[i];
        delete arr[i+1];
        i -= 1;
        arr = arr.filter(element => element !== undefined);
      }
      else {i += 1} continue;
    }

    else break outer;
  }
    if (arr == 0) {return true}
    else {return false}

  } 

  var arr = str.split('');

    var i = 0;
    
  return lar(i,arr);


}
