var array = [3, 8, 2, 4, 2, 9];
console.log('non sorting array', array);
for (var i = 0; i < array.length; i++) {
  for(var j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log('sorting array', array);