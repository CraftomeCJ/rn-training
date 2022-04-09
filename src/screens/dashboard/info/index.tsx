import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Info: React.FC = () =>
  // realtime reporting TS error
  // const a: string = "a";
  // const num: number = "num";
  (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this page
      </Text>
    </View>
  );
export default Info;


//LEARN========= Arrow Function: A Walk-Through ===========
//Demo with two argument, no argument & one argument

//example Two arguments
//1. This is our function we want to transform:
function demoSum(num1: number, num2: number): number {
  return num1 + num2;
}

const variableAdd //<== 2. Arrow functions are anonymous so in order to preserve the "name", we need a variable:
=                 //<== put an "=" between the name
(num1: number, num2: number):number => //<== and the arguments, and a "=>" between the arguments
{                  //<== and the open curly brackets
return num1 + num2 //<== return statement
}                  //<== and the close curly brackets

//note in arrow function
//However, since the body of the function has only line, we can write it like this:
const normArrowSumFunc = (num1: number, num2: number): number => {return num1 + num2}

//simplified arrow function
const simplifyArrowFuncSum = (num1: number, num2: number): number => num1 + num2
console.log(simplifyArrowFuncSum(10,20));
//WHAT?! NO RETURN?! Yes. Putting it simply, you need a return statement as soon as there are {} in the picture — and you need {} as soon as you have more than 1 line of function body.

//You need "{}"" when the function body is not just one expression, that is, when you need additional statements before the return value. You can easily write something like:
const noCurlyBracketFunc = (array: any[]):any[] =>
array.reduce((acc, curr) => acc + curr)
//but you can't do it
//const cannotDoThis = (a,b) => a += b; a+b //<==error

//example No arguments
//If you have no arguments, here's how you can go about it. This is the function we want to be transformed:
function helloWorld(): void {
  console.log("Hi")
}

//make it into this:
const normArrowHelloWorld = (): void => console.log("Hi")
normArrowHelloWorld();

//example One argument
//When it comes to just one argument:
function myName(name: string): void {
  console.log(`Hi, my name is ${name}`)
}

//can be:
const arrowFuncMyName = (name: string): void => console.log(`Hi, my name is ${name}`)
arrowFuncMyName("CJ, " + "my age is " + simplifyArrowFuncSum(10,20));


//note When it comes to arrow functions, suffice it to say for now that there are, really, two main gotchas:
//arrow functions saved to a variable are function expression and as such cannot be hoisted;
//arrow functions do not have their own binding of this and this represents an object in which the arrow function has that defined it.

//exercise [1] Two arguments
//Transform this function:
function exe1Sum(num1:number, num2:number): number{
    return num1 + num2;
}
exe1Sum(40,2);
exe1Sum(42,0);
console.log("the answer to everything is", exe1Sum(42,0));

//solution
const sol1Sum = (num1: number, num2:number): number => num1 + num2;
sol1Sum(10,2);
sol1Sum(62,8);
console.log("the answer to everything is", sol1Sum(55,10));

//exercise [2] One argument
//Transform this function that tells you how long a string is:
function stringLength(str){
  console.log(`the length of "${str}" is:`, str.length)
}
let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
stringLength(longestCityNameInTheWorld);

const exe2stringLength = (str: string): void =>
console.log(`the length of "${str}" is:`, str.length);
let longestCityNameInTheWorld2 = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
exe2stringLength(longestCityNameInTheWorld2);

//exercise [3] One argument, pt.2
//Let's change the previous function a bit to include a variable and a return statement:
function stringLength3(str: string): number{
  let length = str.length
  console.log(`the length of "${str}" is:`, length)
  return str.length
}
stringLength("willynilly")

//solution
const exe3stringLength3 = (str: string): number => {
  let length = str.length
  console.log(`the length of "${str}" is:`, length)
  return str.length
}
exe3stringLength3("christophe javier ho");

/*
//exercise [4] One argument
//Transform this function that selects a random element from the array and concatenates it to your name:
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name: string): void{
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}
showAlert("you ball of fluff")

//solution
const exe4ShowAlert = (name: string): void => {
  let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
  console.log(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}
exe4ShowAlert("you ball of fluff");
*/

/*
//exercise [5] Nested functions
//Transform this function that rotates elements in your browser + remember about transforming also the traditional function in the .map:
function oneTwoThreeRotate(){
  Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
      tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
  })
}
oneTwoThreeRotate()

//solution
const exe5oneTwoThreeRotate = (): void => {
  Array.prototype.slice.call( document.querySelectorAll('div,p,span,img,a,body')).map
  (tag => tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)'
    )
}
console.log(exe5oneTwoThreeRotate());
//Here we need the curly brackets because we have a multiline method but we don't need a return statement because we are not returning anything.
*/

//LEARN 5 ways to refactor if/else statements in JS functions
//example 1. Default parameters
//You know that feeling when you're working with inconsistent API and your code breaks because some values are undefined?
let sumFunctionThatMayBreak = (a:number, b:number, inconsistentParameter: any): number => a+b+inconsistentParameter;
console.log(sumFunctionThatMayBreak(1,39,2)); // => 42
console.log(sumFunctionThatMayBreak(2,40, undefined)); // => NaN

//possible solution:
let sumFunctionWithIf = (a:number, b:number, inconsistentParameter: any): unknown => {
  if (inconsistentParameter === undefined){
    return a+b
  } else {
   return a+b+inconsistentParameter
  }
}
console.log(sumFunctionWithIf(10,39,2)); // => 51
console.log(sumFunctionWithIf(12,40, undefined));// => 52 but result still NaN

//best solution:
//I could simplify the above function and do away with the if/else logic by implementing default parameters:
let simplifiedSumFunction = (a: number, b: number, inconsistentParameter: any = 0): any => a+b+inconsistentParameter;
console.log(simplifiedSumFunction(1,2,3)); // => 6
console.log(simplifiedSumFunction(1,2,undefined)); // => 3


//example 2. OR operator
//The above problem not always can be solved with default parameters. Sometimes, you may be in a situation when you need to use an if-else logic, especially when trying to build conditional rendering feature. In this case, the above problem would be typically solved in this way:

//possible solution:
let sumFunctionWithIfElse = (a:number, b:number, inconsistentParameter: any): any => {
  if (inconsistentParameter === undefined || inconsistentParameter === null || inconsistentParameter === false){
    return a+b
  } else {
   return a+b+inconsistentParameter
  };
}
console.log(sumFunctionWithIfElse(1, 39, 2)); // => 42
console.log(sumFunctionWithIfElse(2, 40, undefined)) // => 42
console.log(sumFunctionWithIfElse(2, 40, null)) // => 42
console.log(sumFunctionWithIfElse(2, 40, false)) // => 42
console.log(sumFunctionWithIfElse(2, 40, 0)) // => 42
/// 🚨🚨🚨 but:
console.log(sumFunctionWithIfElse('yes', 39, 'no')) // => "40"

//best solution with Ternary Operators
let sumFunctionWithTernary = (a: number, b: number, inconsistentParameter: any = 0): any =>
//Ternary #1
// (inconsistentParameter === undefined || inconsistentParameter === null || inconsistentParameter === false) ? a+b : a+b+inconsistentParameter;
{
  //best way to write ternary
  inconsistentParameter = !!inconsistentParameter ? inconsistentParameter : 0;
  return a+b+inconsistentParameter;
}
console.log(sumFunctionWithTernary(10,39,2)); // => 51
console.log(sumFunctionWithTernary(20, 40, undefined)); // => 62
console.log(sumFunctionWithTernary(29, 40, null) );// => 49
console.log(sumFunctionWithTernary(28, 40, false)); // => 68
console.log(sumFunctionWithTernary(17, 39, '')); // => 46
console.log(sumFunctionWithTernary(26, 40, 0)); // => 66

//However, you could simplify it even more so by using the OR (||) operator. The || operator works in the following way:
//it returns the right-hand side when the left-side is a falsey value;
//and returns the left-side if it's truthy.
//The solution could then look as following:
let sumFunctionWithOr = (a:number, b:number, inconsistentParameter: any): number => {
  inconsistentParameter = inconsistentParameter || 0
  return a+b+inconsistentParameter
}

console.log(sumFunctionWithOr(1,39,2) );// => 42
console.log(sumFunctionWithOr(2,40, undefined)); // => 42
console.log(sumFunctionWithOr(2,40, null)); // => 42
console.log(sumFunctionWithOr(2,40, false) );// => 42
console.log(sumFunctionWithOr(2,40, '')); // => 42
console.log(sumFunctionWithOr(2, 40, 0) );// => 42

//example 3. Nullish coalescing
//Sometimes, however, you do want to preserve 0 or '' as valid arguments and you cannot do that with the || operator, as visible in the above example.
//Fortunately, starting with this year,
//TypeScript use the ?? (nullish coalescing) operator, which returns the right side only when the left side is null or undefined.
//This means that if your argument is 0 or '', it will be treated as such. Let's see this in action:
let sumFunctionWithNullish = (a:number, b:number, inconsistentParameter: any): number => {
  inconsistentParameter = inconsistentParameter ?? 0.424242
  return a+b+inconsistentParameter
}

console.log(sumFunctionWithNullish(2, 40, undefined)); // => 42.424242
console.log(sumFunctionWithNullish(2, 40, null) );// => 42.424242
/// 🚨🚨🚨 but:
console.log(sumFunctionWithNullish(1, 39, 2) );// => 42
console.log(sumFunctionWithNullish(2, 40, false)); // => 42
console.log(sumFunctionWithNullish(2, 40, '')); // => "42"
console.log(sumFunctionWithNullish(2, 40, 0)); // => 42

//example 4. Optional chaining
//Lastly, when dealing with inconsistent data structure, it is a pain to trust that each object will have the same keys. See here:
let functionThatBreaks = (object: any): any => {
  return object.name.firstName
}

console.log(functionThatBreaks({name: {firstName: "Tom", lasName: "Jerry"}, id:1})); // ✅ "Tom"
//console.log(functionThatBreaks({id:2})); // 🚨 Uncaught TypeError: Cannot read property 'firstName' of undefined 🚨
//This happens because object.name is undefined and so we cannot call firstName on it.

/*
//Many folks approach such a situation in the following way:
let functionWithIf = (object: string): void => {
  if (object && object.name && object.name.firstName) {
    return object.name.firstName
  }
}
functionWithIf({name: {firstName: "Tom", lasName: "Jerry"}, id:1) // "Jerry"
functionWithIf({name: {lasName: "Jerry"}, id:2}) // undefined
functionWithIf({id:3}) // undefined
functionWithIf() // undefined

//You can simplify the above with: optional chaining. Optional chaining checks at every step whether the return value is undefined and if so, it returns just that instead of throwing an error.
*/
/*
let functionWithChaining = (object) => object?.name?.firstName

functionWithChaining({name: {firstName: "Sylwia", lasName: "Vargas"}, id:1}) // "Sylwia"
functionWithChaining({name: {lasName: "Vargas"}, id:2}) // undefined
functionWithChaining({id:3}) // undefined
functionWithChaining() // undefined
*/

//example 2
//The arrow function is good and effective. I'm' trying to get the optional first name from a optional name property of the object. otherwise give undefined
// to write the function effectively, I give it a more obvious name and put the type of the parameter and return type too.
//like this
const getFirstName = (person?: Person): string | undefined => person?.name?.firstName

console.log(getFirstName({name: {firstName: "James", lasName: "Jerry"}, id:1})); // "Tom"
console.log(getFirstName({name: {lasName: "Jerry"}, id:2})); // undefined
console.log(getFirstName({name: {id:3} })); // undefined
console.log(getFirstName()); // undefined

//example 3
//or something like this:
const getLastName = (person?: Person): string => person?.name?.lastName ?? ''

console.log(getLastName({name: {firstName: "James", lasName: "Jerry"}, id:1})); // "Tom"
console.log(getLastName({name: {lasName: "Jerry"}, id:2})); // undefined
console.log(getLastName({name: {id:3} })); // undefined
console.log(getLastName()); // undefined

//the name of the function, the input type and output type is good enough for others to understand what you are doing even without commenting.

//example 5. No-else-returns and guard clauses
//Last solution to clunky if/else statements, especially those nested ones, are no-else-return statements and guard clauses.
//So, imagine we have this function:
let nestedIfElseHell = (str: string): any => {
  if (typeof str == "string"){
    if (str.length > 1) {
      return str.slice(0,-1)
    } else {
      return null
    }
  } else {
    return null
  }
}
console.log(nestedIfElseHell("")); // => null
console.log(nestedIfElseHell("h")); // => null
console.log(nestedIfElseHell("hello!")); // => "hello"

//note no-else-return <== do this for good practice
//Now, we could simplify this function with the no-else-return statement since all we are returning is null anyway:
let noElseReturns = (str: string): any => {
  if (typeof str == "string"){
    if (str.length > 1) {
      return str.slice(0,-1)
    }
  }
  return; //<== would be undefine
  //return null;
}
console.log(noElseReturns("")); // => null
console.log(noElseReturns("h")); // => null
console.log(noElseReturns("hello!")); // => "hello"
//The benefit of the no-else-return statement is that if the condition is not met, the function ends the execution of the if-else and jumps to the next line. You could even do without the last line (return null) and then the return would be undefined.

//==>psst: I actually used a no-else-return function in the previous example 👀

//note guard clauses <== do this for good practice
//Now we could take it a step further and set up type guards that would end the code execution even earlier:
let guardClauseFun = (str: string): any => {
  // ✅ first guard: check the type
  //if (typeof str !== "string") return null
  typeof str !== 'string' ? null : //<== use ternary operator
  // ✅ second guard: check for the length
  //if (str.length <= 3) console.warn("your string should be at least 3 characters long and its length is", str.length)
  str.length <= 3 ? console.warn("your string should be at least 3 characters long and its length is", str.length) :
  // otherwise:
  //return str.slice(0,-1)
  str.slice(0,-1);
}

console.log(guardClauseFun("h"));// => undefined with a warning
console.log(guardClauseFun("hello!")); // => "hello"
console.log(guardClauseFun(5)); // => null
console.log(guardClauseFun("yo!")); // => undefined with a warning
console.log(guardClauseFun("you!")); // => "you"

//learn Cheatsheet: JS loops (forEach, for/in, for/of)
/*
the best use for these loops is as follows:

arrays: use for... of (or forEach)
objects: use for... in
==> if you work with arrays and need an access to indexes, use for or forEach

==> remember this as
=>A ray of sunshine and foreign objects in the sky, which reminds me that:
Array -> for/of
Object -> for/in
*/

//example for... in loop
//This loop was introduced in ES6, as a tool to use with enumerables
//===> to iterate over the properties of the object:
let person = {name: "SpongeBob", lastName: "SquarePants", age:  34}

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}

///// RESULT:
// "name: SpongeBob"
// "lastName: SquarePants"
// "age: 34"

//note Now, you can iterate over an array with this tool but that doesn't mean you should. It works because in JS arrays inherit from the Object and because of that, the bracket notation ([]) will have a similar effect if you call this looping tool on an array as it has on an object. However, there are two caveats:                        arrays impact on speed and situations when you're dealing with a NodeList or just inconsistent data in an array.    As for speed, the situation is clear:                   when iterating over arrays, for... in is much slower than the for... of loop that is specific to arrays, strings and NodeLists.

//Now, in order to understand the issues with inconsistent data, you need to remember that Array is an Object and as such, you can assign to it properties (which should not happen but may):
let students = ["SpongeBob", "Patrick"]
students.name = "Mr. Krabs"

console.log(students);
console.log(students.name);
students;
// ["SpongeBob", "Patrick", name: "Mr. Krabs"]

//Now, this is an example of inconsistent data and we would wish that our loop would just disregard it. However, for... in was created to iterate over properties and so it will do just that:
let students1 = ["SpongeBob", "Patrick"]
students1.name = "Mr. Krabs"

for (let index in students1){
  console.log(`${index} is ${students1[index]}`)
}
//// RESULTS
// "0 is SpongeBob"
// "1 is Patrick"
// "name is Mr. Krabs"

//note Now, this is especially important when it comes to e.g. NodeLists that look like an array but in fact also hold a bunch of other elements (e.g. methods) and it's best if they were skipped altogether.

//example for... of loop
//for... of is specific to iterables: arrays, strings, NodeLists, sets and maps. It comes with a great set of features:

//// 1. it checks whether an element is iterable (using GetIterator operation) and throws an appropriate TypeError if it's not:
// let num = 3
// for (let i of num){
//  console.log("hi")
// }
//// RESULT:
// Uncaught TypeError: num is not iterable

//Compare it with for... in (which you should not use on arrays):
// let num = 3
// for (let i in num){
//  console.log(i)
// }
//// RESULT:
// undefined

////2. It supports all kinds of control flow in the loop body, like continue, break, yield and await

////3. It's faster than forEach (stats will be added here :) ).

//example forEach
/*
Now, there's this syntactic sugar: forEach, which takes up to three arguments:

arr.forEach(callback(currentElement, index, array) {
  // do something <- this is a callback
});

which are:

==> currentElement - the element that's being acted on (this one is the only mandatory one),
==> index - the current index of the element,
==> array - the array that's being iterated over

So, a benefit to forEach is that you do have an access to the index, which for... of does not give you
(well, there is a lengthy way of obtaining one but it's an overkill).
Also, this is a finite loop by definition and so it will end at some point, even if you don't factor in a break statement for an edge-case situation.

There's another, more obscure benefit:
the temporary variable
(currentElement in the example above) is locally-scoped, whereas it is not so in the for... of loop.
*/

//note See here:
let num = 4;
let arr = [5, 6, 7];

////////////////// forEach
arr.forEach(num => {
  console.log(num);
});
// returns 5, 6, 7
console.log(num)
// 4

////////////////// for... of
for(num of arr){
 console.log(num)
}
// returns 5, 6, 7

console.log(num)
// 7

//note In the above example, we can see that forEach has not overwritten the value of the num variable declared outside of its scope, whereas that was not the case with for... of loop. However, if you can't name your variables in a more descriptive way, there still is a fix for that: use let inside of the for... of array.
let number = 4;
let arrayList = [5, 6, 7];

for(let number of arrayList){
 console.log(number)
}
// returns 5, 6, 7

console.log(number)
// 4


//example for loop
//This loop is just the oldest and most-widely supported for loop in JS. You can always rely on it. It also allows you to be more intentional about which is the starting/ending element, or which direction the iteration should go.

// However, the dev experience is not perfect because its syntax is not straightforward so feel free to use for... in (when dealing with objects) or for... of (when dealing with arrays, strings, sets, nodeLists and maps) instead where appropriate.
