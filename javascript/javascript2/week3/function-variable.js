//Functions as a Variable

function function_one() {
  console.log("this is first element in array");
}
function function_two() {
  console.log("this is second element in array");
}
function function_three() {
  console.log("this is third element in array");
}
const funArray = [function_one(), function_two(), function_three()];
funArray.forEach((element) => {
  funArray[element];
});
//Anonymous function expression

const funVar = function () {
  console.log("This is function expression");
};
//Function declaration
function normalFunction() {
  console.log("This is function declaration");
}
//Create an object that has a key whose value is a function. Try calling this function.

const obj = {
  add: function (x, y) {
    return x + y;
  },
};

console.log(obj.add(2, 4));
