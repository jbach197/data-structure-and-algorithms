var array = [];
var newArray = [];

function reverseArray(array) {
  for( let i= array.length - 1; i >=0; i--) {
  
      newArray += array[i];
  }
      return newArray;
  }