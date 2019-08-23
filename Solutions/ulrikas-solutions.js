// identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument

const identity = x => x;
console.log(identity(7));

// addb(a, b) ⇒ number
// Write a binary function addb that takes two numbers and returns their sum

const addb = (a, b) => a + b;
console.log(addb(56, 89));

// subb(a, b) ⇒ number
// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;
console.log(subb(78, 77));
// mulb(a, b) ⇒ number
// Write a binary function mulb that takes two numbers and returns their product
mulb = (a, b) => a * b;
console.log(mulb(7, 8));
// minb(a, b) ⇒ number
// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => {
  return a > b ? b : a;
};

console.log(minb(90, 9));
// maxb(a, b) ⇒ number
// Write a binary function maxb that takes two numbers and returns the larger one
maxb = (a, b) => {
  return a > b ? a : b;
};
console.log(maxb(90, 9));
// add(...nums) ⇒ number
// Write a function add that is generalized for any amount of arguments

const array = [3, 5, 8, 9];
const add = (...nums) => {
  return nums.reduce((a, b) => a + b);
};
console.log("add " + add(3, 5, 8, 9));
// sub(...nums) ⇒ number
// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
  return nums.reduce((a, b) => a - b);
};
console.log(sub("sub " + sub(9, 4, 3)));
// mul(...nums) ⇒ number
// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => {
  return nums.reduce((a, b) => a * b);
};
console.log("mul " + mul(5, 3, 2));
// min(...nums) ⇒ number
// Write a function min that is generalized for any amount of arguments
const min = (...nums) => {
  return nums.reduce((a, b) => {
    return a < b ? a : b;
  });
};
console.log("min " + min(5, 8, 3, 9, 77, 1));
// max(...nums) ⇒ number
// Write a function max that is generalized for any amount of arguments

const max = (...nums) => {
  return nums.reduce((a, b) => {
    return a > b ? a : b;
  });
};
console.log(max(4, 6, 9, 2, 45, 78, 67));
// addRecurse(...nums) ⇒ number
// Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => {
  if (nums.lenght < 1) return 0;
  if (nums.length == 1) return nums[0];
  console.log(nums.slice(1));
  return nums[0] + addRecurse(...nums.slice(1));
};
console.log(addRecurse(5, 7, 4, 3, 2));
// mulRecurse(...nums) ⇒ number
// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
  if (nums.length < 1) return 0;
  if (nums.length == 1) return nums[0];
  return nums[0] * mulRecurse(...nums.slice(1));
};
console.log(mulRecurse(7, 2, 3));
// minRecurse(...nums) ⇒ number
// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => {
  if (nums.length < 1) return 0;
  if (nums.length == 1) return nums[0];
  return nums[0] < minRecurse(...nums.slice(1))
    ? nums[0]
    : minRecurse(...nums.slice(1));
};
console.log(minRecurse(5, 8, 4, 2));
// maxRecurse(...nums) ⇒ number
// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => {
  if (nums.length < 0) return "Empty array";
  if (nums.length === 1) return nums[0];
  return nums[0] > maxRecurse(...nums.slice(1))
    ? nums[0]
    : maxRecurse(...nums.slice(1));
};
console.log(maxRecurse(4, 9, 44, 55, 2));
// not(func) ⇒ function
// Write a function not that takes a function and returns the negation of its result
const not = x => !x;
console.log(not(maxRecurse(4, 9, 44, 55, 2)));
// acc(func, initial) ⇒ function
// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

const acc = (func, initial) => {};

// accPartial(func, start, end) ⇒ function
// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

// accRecurse(func, initial) ⇒ function
// Write a function accRecurse that does what acc does but uses recursion

// fill(num) ⇒ array
// Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = length => {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    newArray.push(randomNumber);
  }
  console.log(newArray);
};
fill(9);

// fillRecurse(num) ⇒ array
// Write a function fillRecurse that does what fill does but uses recursion
let newArray = [];
let fillRecurse = length => {
  let randomNumber = Math.ceil(Math.random() * 100);
  newArray.push(randomNumber);
  if (length > 1) fillRecurse(length - 1);
};
fillRecurse(7);
console.log(newArray);
// set(...args) ⇒ array
// Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => {
  args.sort((a, b) => {
    return a - b;
  });
  let newArray = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== args[i + 1]) newArray.push(args[i]);
  }
  console.log(args);
  console.log(newArray);
};
set(3, 5, 3, 7, 2, 7, 9, 4, 7, 1, 3);
// identityf(x) ⇒ function
// Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = x => {
  const y = x;
  const second = () => {
    console.log(y);
  };
  return second;
};
const newFunc = identityf(555);
newFunc();
// addf(a) ⇒ function
// Write a function addf that adds from two invocations

// liftf(binary) ⇒ function
// Write a function liftf that takes a binary function, and makes it callable with two invocations

// pure(x, y) ⇒ array
// Write a pure function pure that is a wrapper arround the impure function impure

// function impure(x) {
//   y++;
//   z = x * y;
// }
// var y = 5, z;

// impure(20);
// z; // 120

// impure(25);
// z; // 175

// curryb(binary, a) ⇒ function
// Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument

// curry(func, ...outer) ⇒ function
// Write a function curry that is generalized for any amount of arguments

// inc(x) ⇒ number
// Without writting any new functions, show multiple ways to create the inc function

// twiceUnary(binary) ⇒ function
// Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice

// doubl(x) ⇒ number
// Use the function twiceUnary to create the doubl function

// square(x) ⇒ number
// Use the function twiceUnary to create the square function

// twice(x) ⇒ any
// Write a function twice that is generalized for any amount of arguments

// reverseb(binary) ⇒ function
// Write a function reverseb that reverses the arguments of a binary function

// reverse(func) ⇒ function
// Write a function reverse that is generalized for any amount of arguments

// composeuTwo(unary1, unary2) ⇒ function
// Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both

// composeu(...funcs) ⇒ any
// Write a function composeu that is generalized for any amount of arguments

// composeb(binary1, binary2) ⇒ function
// Write a function composeb that takes two binary functions and returns a function that calls them both

// composeTwo(func1, func2) ⇒ function
// Write a function composeTwo that takes two functions and returns a function that calls them both

// compose(...funcs) ⇒ function
// Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on

// limitb(binary, lmt) ⇒ function
// Write a function limitb that allows a binary function to be called a limited number of times

// limit(func, lmt) ⇒ function
// Write a function limit that is generalized for any amount of arguments

// genFrom(x) ⇒ function
// Write a function genFrom that produces a generator that will produces a series of values

// genTo(gen, lmt) ⇒ function
// Write a function genTo that takes a generator and an end limit, and returns a generator that will produce numbers up to that limit

// genFromTo(start, end) ⇒ function
// Write a function genFromTo that produces a generator that will produce values in a range

// elementGen(array, gen) ⇒ function
// Write a function elementGen that takes an array and a generator and returns a generator that will produce elements from the array

// element(array, gen) ⇒ function
// Write a function element that is a modified elementGen function so that the generator argument is optional. If a generator is not provided, then each of the elements of the array will be produced.

// collect(gen, array) ⇒ function
// Write a function collect that takes a generator and an array and produces a function that will collect the results in the array

// filter(gen, predicate) ⇒ function
// Write a function filter that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate

// filterTail(gen, predicate) ⇒ function
// Write a function filterTail that uses tail-recursion to perform the filtering

// concatTwo(gen1, gen2) ⇒ function
// Write a function concatTwo that takes two generators and produces a generator that combines the sequences

// concat(...gens) ⇒ function
// Write a function concat that is generalized for any amount of arguments

// concatTail(...gens) ⇒ function
// Write a function concatTail that uses tail-recursion to perform the concating

// gensymf(symbol) ⇒ function
// Write a function gensymf that makes a function that generates unique symbols

// gensymff(unary, seed) ⇒ function
// Write a function gensymff that takes a unary function and a seed and returns a gensymf

// fibonaccif(first, second) ⇒ function
// Write a function fibonaccif that returns a generator that will return the next fibonacci number

// counter(i) ⇒ object
// Write a function counter that returns an object containing two functions that implement an up/down counter, hiding the counter

// revocableb(binary) ⇒ object
// Write a function revocableb that takes a binary function, and returns an object containing an invoke function that can invoke a function and a revoke function that disables the invoke function

// revocable(func) ⇒ object
// Write a function revocable that is generalized for any amount of arguments

// extract(array, prop) ⇒ array
// Write a function extract that takes an array of objects and an object property name and converts each object in the array by extracting that property

// m(value, source) ⇒ object
// Write a function m that takes a value and an optional source string and returns them in an object

// addmTwo(m1, m2) ⇒ object
// Write a function addmTwo that adds two m objects and returns an m object

// addm(...ms) ⇒ object
// Write a function addm that is generalized for any amount of arguments

// liftmbM(binary, op) ⇒ object
// Write a function liftmbM that takes a binary function and a string and returns a function that acts on m objects

// liftmb(binary, op) ⇒ object
// Write a function liftmb that is a modified function liftmbM that can accept arguments that are either numbers or m objects

// liftm(func, op) ⇒ object
// Write a function liftm that is generalized for any amount of arguments

// exp(value) ⇒ any
// Write a function exp that evaluates simple array expressions

// expn(value) ⇒ any
// Write a function expn that is a modified exp that can evaluate nested array expressions

// addg(value) ⇒ number | undefined
// Write a function addg that adds from many invocations, until it sees an empty invocation

// liftg(binary) ⇒ function
// Write a function liftg that will take a binary function and apply it to many invocations

// arrayg(value) ⇒ array
// Write a function arrayg that will build an array from many invocations

// continuizeu(unary) ⇒ function
// Write a function continuizeu that takes a unary function and returns a function that takes a callback and an argument

// continuize(any) ⇒ function
// Write a function continuize that takes a function and returns a function that takes a callback and an argument

// vector()
// Make an array wrapper object with methods get, store, and append, such that an attacker cannot get access to the private array

// exploitVector()
// Let's assume your vector implementation looks like something like this:

// function vector() {
//   var array = [];
//   return {
//     append: function append(v) {
//       array.push(v);
//     },
//     get: function get(i) {
//       return array[i];
//     },
//     store: function store(i, v) {
//       array[i] = v;
//     }
//   };
// }
// Can you spot any security concerns with this approach? Mainly, can we get access to the array outside of vector? Note: the issue has nothing to do with prototypes and we can assume that global prototypes cannot be altered. Hint: Think about using this in a method invocation. Can we override a method of vector?

// vectorSafe()
// How would you rewrite vector to deal with the issue from above?

// pubsub()
// Make a function pubsub that makes a publish/subscribe object. It will reliably deliver all publications to all subscribers in the right order.

// mapRecurse(array, predicate) ⇒ array
// Make a function mapRecurse that performs a transformation for each element of a given array, recursively

// filterRecurse(array, predicate) ⇒ array
// Make a function filterRecurse that takes in an array and a predicate function and returns a new array by filtering out all items using the predicate, recursively.
