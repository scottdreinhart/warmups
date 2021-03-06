function intersectionFilter(array1, array2) {
  return array1.filter(function(element) {
    return (array2.indexOf(element) != -1);
  });
}
const test1 = [1,2,3,4,5];
const test2 = [3,4,7,8,9];
const test3 = [];

console.log(intersectionFilter(test1, test2)); // [3,4]
console.log(intersectionFilter(test1, test3)); // []
console.log(intersectionFilter(test2, test3)); // []

// 1.) The two fundamental charataristics of objects are *STATE* and *BEHAVIOR*
//
// 2.) A constructor is run like a function, and so can be used to initialize
// state.  Object.create() can be used to declare an object with a specific
// prototype, while use of a constructor requires definition of a prototype afterwards.
function isMatch(x1, x2) {
  return x1 === x2;
}
var intersection = function(arrayOne, arrayTwo) {

  var output = [];
  if (!arrayOne || !arrayTwo) { return output; }

  for (var i = 0 ; i < arrayOne.length ; i++) {
    for (var j = 0 ; j < arrayTwo.length ; j++) {
      if (isMatch(arrayOne[ i ], arrayTwo[ j ])) {
        output.push(arrayOne[ i ]);
        break;
      }
    }
  }
  return output;
};

//var recursiveIntersection = function(arrayOne, arrayTwo) {
//var output = [];
//function go ( goArrayOne, goArrayTwo ) {
//if (!goArrayOne || !goArrayTwo) {
//return output;
//}
//else output.push(go(goArrayOne, goArrayTwo.slice(1))
//}
//return go(arrayOne.slice(1), arrayTwo)
//}

console.log(intersection(test1, test2)); // [3,4]

console.log(intersection(test1, test3)); // []
console.log(intersection(test2, test3)); // []

function allCharsUnique(string) {
  for (var i = 0 ; i < string.length ; i++) {
    for (var j = i ; j < string.length ; j++) {
      if (string[ i ] == string[ j ]) {
        return false;
      }
    }
  }
  return true;
}
