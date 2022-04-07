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



//learn Functions

/* Functions are the primary means of passing data around JS.
TS allow me to specify the types of both the input & output values of functions.
*/

//note Parameter type Annotations
// :string <== This is a parameter type annotations that go after the parameter name.
function        //function keyword
greet           // function name
(
  name          //<== parameter name
  : string      //<== parameter type annotation
  ):void        //<== return type annotation
{
  console.log("Hello, " + name.toUpperCase() + "!!");
}
//when parameter has a type annotation, arguments to that function will be checked
//greet(42); //<==runtime error "type" is string not number
greet("John"); //no error
//important even if i don't have type annotations on my parameter, TS will still check that I passed the right number of arguments.

//note Return Type Annotations
//Return type annotations appear after the parameter list
function getFavoriteNumber(): number //<== return type annotations
{
  return 7;
}
/*like much variable type annotations, i don't need a return annotation because TS will infer(figure out) the return type based on the return statements.
The example above don't change anything. Some codebases will explicitly specify the return type for documentation purposes, to prevent accidental changes, or just for personal preference.

//learn Anonymous Functions
/*Anonymous Functions are a little different from function declarations. When a function appears in a place where TS can determine how it's going to be called, the parameter of that function are automatically given types.*/
//example:
//No type annotation here,but TS can spot the bug
const names = ["Alice", "Bob", "Eve"];

/*
//Contextual typing for function
names.forEach(function(s) {
  console.log(s.toUppercase()); //<== error
});
*/
/*
//Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase()) //<== error
});
*/
/*
even though the parameter (s) didn't have a type annotation, TS used the types of the forEach function, along with the inferred type of the array to determine the type (s) will have.
This process is called "contextual typing"
*/

//note Function Return Types & "Void"
function add (n1: number, n2: number): number //<== the colon after the parameter list show the return type of the function, we can explicitly assign a return type but  ==> must match type in parentheses
{
  return n1 + n2;
}

//any type that TS can infer(figure out) no need to write the type
//use void when you don't have a  return statement
function printResult(num: number) {
  console.log('Result: ' + num);
}

printResult(add(5, 12));


//note Function as Types
//Function Types are types that describe a function regarding the parameter and return value of that function
//A function type is created with Arrow function annotation from JS
//function types allow us to describe which type of function specifically we want to use somewhere and expect value in a parameter for created a function with some callback or like here a variables.
let combinedValues: (a: number, b: number) => number;

combinedValues = add;
//combinedValues = printResult;
//combinedValues = 5;

console.log(combinedValues(8, 8));
//undefined is a valid type in TS
//let someValue: undefined;


//note Functions Types & Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => { //<== this's a callback function
  console.log(result);
})

/*
//note The "unknown" Type
let userInput: unknown; //<== we use unknown because we don't know what user going to input
let userName: string; //<== will run into problem
//unknown is more restrictive than "any" type

userInput = 5;
userInput = 'Max'; //no error
//userName = userInput; //<== error
//use an extra type check to ensure that userInput is a string
if (typeof userInput === 'string') {
  userName = userInput;
} //<== no more error
*/

/*
//note The "never" Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);
*/

//learn Normal Functions
//Understanding how to create a TypeScript function and what are the mandatory part of the function.
//example:
function          //function keyword
minimal           //function name
(
  a: number,      //<== parameter name & Type
  b: number
  ): number       //<== parameter type annotation
  {
    return a < b ? a : b; //return statement with ternary operator
  }
  console.log(minimal(15, 10)); //<== no error
  //console.log(minimal("10", "5")); //<== will show type error of: Argument of type "string" is not assignable to parameter of type "number"

  //learn Arrow Function
  //Used very often in the real world and it can remove the boilerplate function keyword and make the code neater.
  //also it can avoid the bind for this in normal function
  //example:
  const minimal2 = (a: string, b: string): string =>
  {
    return a < b ? a : b;
  }
console.log(minimal2("100", "50")); //<== no error

//example
//original function
// function adding(a: number, b: number):number {
//   return a + b;
// }
//arrow function
const adding = (a:number, b: number): number => {
  return a + b;
}
//if only one expression you can do this:
const adding2 = (a:number, b: number): number => a + b;

//if only one parameter you can do this:
const printOutput: (a:number | string) => void = output => console.log(output);

//important If you got NO parameters, you HAVE TO use an empty pair of parentheses: () => {. . .}

/*
// note arrow function with a "if" check statement on DOM element
const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', event =>
    console.log(event));
  };
*/
console.log(adding(12, 15));
console.log(adding2(30,50));
printOutput(add(5,7));


//learn Generic Functions
//Define type relations between input parameters and output
//example:
//if we want to make add function for two strings, we can create add2
//BUT what if we want the same add function to work for both string and number?
//we use generic function
//example:
//note If you're in a .tsx file you cannot just write <T>
//Workaround: Use extends on the generic parameter to hint the compiler that it's a generic, e.g.:
//const foo = <T extends unknown>(x: T) => x;

const minimal3 = <T,>(a: T, b: T): T => {
  return a < b ? a : b;
}
console.log("minimal", minimal(1234, 5678));
console.log("minimal", minimal("6", "d"));

//learn Guidelines for writing Good Generic Functions
//writing generic functions is fun, but can easily get carried away for having too many parameters or using constraints where they aren't needed can make inference less efficient.
//note Push Type Parameters Down
//here are 2 ways to writing a function that appear similar:
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

//a: number (good)
const a = firstElement1([1,2,3]);
//b: string (bad)
const b = firstElement2([1,2,3]);
//This might seem identical at first glance, but "firstElement1" is a better written function. It inferred return type is "Type", but firstElement2 inferred return type is "any".
//Because TS have to resolve arr[0] expression using the constraint type, rather "waiting" to resolve the element during call.
//important When possible, use the type parameter itself rather than constraining it

//note Use Fewer Type Parameters
//another pair of similar functions (bad):
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
  ): Type[] {
  return arr.filter(func);
}
//We create a type parameter "Func" that doesn't relate two values. That is always a red flag, because it means callers wanting to specify type arguments have to manually specify an extra type argument for no reason. "Func" doesn't do anything but make the function harder to read and reason about!
//important Always use as few type parameters as possible.

//note Type Parameters Should Appear Twice
//Sometimes we forget that function might not need to be generic:
// //example (bad)
// function greet<Str extends String>(s: Str) {
//   console.log("Hello, " + s);
// }
//example (good)
function greet1(s: string) {
  console.log("Hello, " + s);
}
greet1("World");
//Remember, type parameters are for relating the types of multiple values. If a type parameter is only used once in the function signature, it's not relating anything.
//important If a type parameter only appears in one location, strongly reconsider if you actually need it.
