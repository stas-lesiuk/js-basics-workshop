// 0. COMMNETS
// single-line comment

/* multi-
  -line
  comment
 */


// 1. VARIABLE DECLARATION AND INITIALIZATION
// primitives
var myNumber = 5;
var myStr = 'some string';
var myBool = true;
var myUndefined; // will be undefined
var myNull = null; //will be null

// complex structures
var myObject = {property: 'some stringVal', otherProp: 5, thirdProp: true}; //objects are a lot of like associative arrays in other languages
var myArray = [1, 'abs', false];

/*
good practices:
use camelCase notation in variable and property names
always use var when defining a variable
 */


// 2. FUNCTIONS
//first way - create anonymous function and assign it to variable
var myFunc = function () {
  return 'something';
};
myFunc();

//second, preferable way - just create named function
function doItLikeThis() {
  return true;
}

doItLikeThis();


// 3. STATEMENTS
// if statement
var first = 3;
var second = 5;
var max;
if (first < second) {
  max = second;
} else {
  max = first;
}

// for statement
var arithmeticalProgressionObj = { //used an object just to show how properties could be accessed
  max: 10,
  sum: 0
};
for(var i = 0; i < arithmeticalProgressionObj.max; ++i) {
  arithmeticalProgressionObj.sum += i;
}

while(arithmeticalProgressionObj.sum) {
  arithmeticalProgressionObj.sum--;
}


// 4. HANDFUL METHODS
// array - split, splice, slice, indexOf
