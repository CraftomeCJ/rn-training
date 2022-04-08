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
//arrow function multiple expression
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

//note Default Function parameters
const adding1 = (a:number, b: number = 20): number => a + b;

console.log(adding1(2));

//note The Spread Operator {...}
const hobbies = ['Sports', 'Cooking'];
const userHobbies = ['Hiking'];

//userHobbies.push(hobbies[0], hobbies[1]); //<== cumbersome
//use spread operator function for arrays or objects
userHobbies.push(...hobbies);
console.log(hobbies);
console.log(userHobbies);

const person = {
  firstName: 'John',
  age: 30
};

const copiedPerson = { ...person};
console.log(copiedPerson);

// learn REST Parameter ...
//relate to spread operator {...}
//other than using "optional" parameters or overloads to make functions that can accept a variety of argument counts, we can define functions that take an unbounded number of arguments using rest parameters
//A rest parameter appears after all other parameters, and use the ==> ...syntax
//example 1
const add1 = (
  //a: number, b: number, c: number, d: number //<== can use spread operator
  ...numbers: number[]
  ) => {
//we can work it a number of way
//for loop, .reduce method etc
return numbers.reduce((curResult, curValue):number => {
  return curResult + curValue;
 }, 0);
};
const addNumbers = add1(5, 10, 2, 3.7);
console.log(addNumbers);

//example 2
const printRest = (first: number, second: number, ...rest: number[]) => {
  console.log('first: ', first);
  console.log('second: ', first);
};
printRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [x, y, ...rest] = array;
console.log(x, y, rest);

//example 3
function multiply(n: number, ...m: number []):number[] {
  return m.map((x) => n * x);
}
// 'f' get the value [10, 20, 30, 40]
const f = multiply(10, 5, 3, 4, 8);
console.log(f);
//In TS, type annotation on these parameters is implicitly 'any[]' instead of 'any' and any annotation given must be 'Array<T> or T[], or Tuple type

//note Rest arguments
//we can provide variable number of arguments from an array using the spread syntax.
//example using .push method of arrays takes any number of arguments
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
const arr3 = [8, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.push(...arr3);
console.log(arr1);
console.log(arr2);

//note TS does not assume that arrays are immutable, this can lead to some surprise behaviors
//Inferred type is number[] -- "an array with zero or more number"
//not specifically two numbers
/*
const args = [8,5];
const angle = Math.atan2(...args); //<==error
//A spread argument must either have a tuple type or be passed to a rest parameter.
*/
//to fix this situation depends on my code, but generally a const context is the most straightforward solution:
//solution:
//inferred as 2-length tuple
const args = [8,5] as const;
const angle = Math.atan2(...args)
console.log(Math.floor(angle));


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
//console.log("minimal", minimal("6", "d"));

//It's common to write a function where the types of the input relate to the type of the output,
//or where the types of two inputs are related in some way. /Let's consider for a moment a function that returns the first element of an array:
function firstElement(arr: any[]) {
return arr[0];
}

//This function does its job, but unfortunately has the return type any.
//It'd be better if the function returned the type of the array element.

//In TypeScript, generics are used when we want to describe a correspondence between two values.
//We do this by declaring a type parameter in the function signature:
function firstElement0<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

//By adding a type parameter "Type" to this function and using it in two places, we've created a link between the input of the function (the array) and the output (the return value).
//Now when we call it, a more specific type comes out:
//s is of type 'string'
const s = firstElement0(['a', 'b', 'c']);
//n is of type 'number'
const n = firstElement0([1, 2, 3]);
//u is of type 'undefined'
const u = firstElement0([]);

//note Generic fn working with inference
//we didn't have to specify 'Type' in this sample.
//The type was inferred - chosen automatically - by TypeScript.

//We can use multiple type parameters as well.
//example, a standalone version of map would look like this:
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
//Parameter 'n' is of type 'string'
//'parsed' is of type 'number[]'
const parsed = map(['1', '2', '3'], (n: string) => parseInt(n, 10));
//note that in this example, TS could infer both the type of the Input type parameter (from the given string array), as well as the Output type parameter based on the return value of the function expression (number).

//note Generic fn working with constraints
//We've written some generic functions that can work on any kind of value.
//Sometimes we want to relate two values, but can only operate on a certain subset of values.
//In this case, we can use a constraint to limit the kinds of types that a type parameter can accept.

//Let's write a function that returns the longer of two values.
//To do this, we need a length property that's a number.
//We constrain the type parameter to that type by writing an extends clause:
function longest<Type extends { length: number } > (a: Type, b: Type) {
  return a.length >= b.length ? a : b; //<==ternary operator
  //replaced by ternary operator
  // if (a.length >= b.length) {
  //   return a;
  // } else {
  //   return b;
  // }
}
//longerArray is of type 'number[]'
const longerArray = longest([90, 2, 30, 4, 5, 6, 7, 8, 9, 10], [4, 5, 6, 7 ,8]);
console.log(longerArray);
//longerString is of type 'alice' | 'bob'
const longerString = longest('alice', 'christopher');
console.log(longerString);
//Error!! Numbers don't have a 'length' property.
// const notOK = longest(10, 100); //<== error
//Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
//note There are a few interesting things to note example above.
//We allowed TypeScript to infer the return type of longest.
//Return type inference also works on generic functions.

//Because we constrained Type to { length: number }, we were allowed to access the .length property of the a and b parameters.
//Without the type constraint, we wouldn't be able to access those properties because the values might have been some other type without a length property.

//The types of longerArray and longerString were inferred based on the arguments.
//Remember, generics are all about relating two or more values with the same type!

//Finally, just as we'd like, the call to longest(10, 100) is rejected because the number type doesn't have a .length property.

//note Working with Constrained Values
//Here's a common error when working with generic constraints:

//example
// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum }; //<==error
// /*Type '{ length: number; }' is not assignable to type 'Type'.
//   '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
// Type '{ length: number; }' is not assignable to type 'Type'.
//   '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.*/
//   }
// }

//learn It might look like this function is OK - Type is constrained to { length: number }, and the function either returns Type or a value matching that constraint. The problem is that the function promises to return the same kind of object as was passed in, not just some object matching the constraint. If this code were legal, you could write code that definitely wouldn't work:
/* //won't work code
//'arr' gets value {length: 6}
// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));
*/

//note Specifying Type Arguments
//TypeScript can usually infer the intended type arguments in a generic call, but not always.
//example, let’s say you wrote a function to combine two arrays:
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

//Normally it would be an error to call this function with mismatched arrays:
//const arr = combine([1, 2, 3], ["hello"]); //<== error
//Type 'string' is not assignable to type 'number'.

//If you intended to do this, however, you could manually specify Type:
const arr = combine<string | number>([1, 2, 3], ["hello"]);


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

//learn Parameter Destructuring
//Array Destructuring
//const hobby1 = hobbies[0];
//const hobby2 = hobbies[1];
//can use array destructuring allow us to shorten it
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

//note Object Destructuring
//If I pass in an object as parameter to a function, I can destructure the property of the object.
//example
const {firstName: userName, age} = person;
console.log(userName, age, person);

const sum = ({h, i, j}: {h: number; i: number; j: number}): void => {
  console.log(h + i + j);
}

sum({h: 10, i: 20, j: 30});

//example
//I can use parameter destructuring to conveniently unpack objects provided as an argument into one or more local variables in the function body.
/*
//In JS, it looks like this:
function sum2({k, l, m}) {
  console.log(k + l + m);
}
sum2({k: 10, l: 20, m: 30});
*/

//A type annotation for the object goes after the destructuring syntax:
function sum3({k, l, m}: {k: number; l: number; m: number}): void {
  console.log(k + l + m);
}
sum3({k: 20, l: 20, m: 60});

//this can look verbose, but I can use a named type here:
//same as prior example
type KLM = {k: number; l: number; m: number};
function sum4({k, l, m}: KLM): void {
  console.log(k + l + m);
}

//note Optional Parameters "?"
//Function in JS often take a variable number of arguments.
//example the .toFixed() method of number takes an optional digit count:
function g(n: number): void {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}
g(5);
//we can remodel it in TS by marking the parameter as optional with '?':
//example
//although the parameter is specified as type 'number', the x parameter actually have union type 'number | undefined' because unspecified parameters in JS get the value 'undefined'

function g1(x?: number): void {
  //...
};
g1(); //ok
g1(10); //ok

//I can also provide a parameter default value:

//example function h1(x = 10 <== default value) {
//Now in the body of p1, x will have type 'number' because any 'undefined' argument will be replaced with default value '10'

//note when a parameter is optional, callers can always pass 'undefined', as tis simply simulates a 'missing' argument
/*bug to fix later
declare function d(x?: number): void
//cut
//All OK
d();
d(10);
d(undefined);
*/

//example
const print = (sentence?: string) => {
  console.log(sentence ? sentence : "nothing to print");
}
print();
print("I tell you a secret");

//example Optional Chaining
const fetchUserData = {
  id: 'ul',
  name: 'John',
  job: {title: 'developer', company: 'Google'}
};
//console.log(fetchUserData.job && fetchUserData.job.title);
//with TS I can use ? optional chaining operator to check if the property exists
console.log(fetchUserData?.job?.title);

//note Optional Parameters in Callbacks
//very easy to make following mistakes when writing functions that invoke callbacks:
//example (not good)
// function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }

//What people usually intend when writing index? as an optional parameter is that they want both of these calls to be legal:
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));

//What this actually means is that callback might get invoked with one argument. In other words, the function definition says that the implementation might look like this:
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    //I don't feel like providing the index today
    callback(arr[i]);
  }
}
/*
//In turn, TypeScript will enforce this meaning and issue errors that aren't really possible:
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed()) //<== error
  //Object is possibly 'undefined'.
});
*/

//note In JavaScript, if you call a function with more arguments than there are parameters, the extra arguments are simply ignored. TypeScript behaves the same way. Functions with fewer parameters (of the same types) can always take the place of functions with more parameters.

//important when writing a function type for a callback, never write an optional parameter unless I intend to call the function without passing that argument

//learn Function Overloads
//Some JavaScript functions can be called in a variety of argument counts and types.
//For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

//In TypeScript, we can specify a function that can be called in different ways by writing overload signatures.
//To do this, write some number of function signatures (usually two or more), followed by the body of the function:
function makeDate(timestamp: number): Date;
function makeDate(month: number, day: number, year: number): Date;
function makeDate(moreTimestamp: number, day?: number, year?: number): Date {
  //ternary operator
  // day !== undefined && year !== undefined ? new Date(year, moreTimestamp, day) : new Date(moreTimestamp);
  //replace by ternary operator
  if (day !== undefined && year !== undefined) {
    return new Date(year, moreTimestamp, day);
  } else {
    return new Date(moreTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
//const d3 = makeDate(1, 3); //<== error
//No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
console.log(d1);
console.log(d2);
//In above example, we wrote two overloads: one accepting one argument, and another accepting three arguments.
//These first two signatures are called the "overload signatures".

//Then, we wrote a function implementation with a compatible signature.
//Functions have an implementation signature, but this signature can't be called directly.
//Even though we wrote a function with two optional parameters after the required one, it can't be called with two parameters!

//Learn Overload Signatures and the Implementation Signature
//This is a common source of confusion. Often people will write code like this and not understand why there is an error:
function fn1(x: string): void;
function fn1() {
  // ...
}
// Expected to be able to call with zero arguments
//fn1(); //<== error
//Expected 1 arguments, but got 0.
//the signature used to write the function body can't be "seen" from the outside

//important.The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function
/*
//The implementation signature must also be compatible with the overload signatures.
//For example, these functions have errors because the implementation signature doesn't match the overloads in a correct way:
function fn2(x: boolean): void;
// Argument type isn't right
function fn2(x: string): void; //<== error
// This overload signature is not compatible with its implementation signature.
function fn2(x: boolean) {}
*/
/*
function fn3(x: string): string;
// Return type isn't right
function fn3(x: number): boolean; //<== error
// This overload signature is not compatible with its implementation signature.
function fn3(x: string | number) {
  return "oops";
}
*/

//learn Writing Good Overloads
//Like generics, there are a few guidelines you should follow when using function overloads.
//Following these principles will make your function easier to call, easier to understand, and easier to implement.

//Let's consider a function that returns the length of a string or an array:
//example
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
//This function is fine; we can invoke it with strings or arrays. However, we can't invoke it with a value that might be a string or an array, because TypeScript can only resolve a function call to a single overload:
len(""); // OK
len([0]); // OK
//len(Math.random() > 0.5 ? "hello" : [0]); //<==error
// No overload matches this call.
//   Overload 1 of 2, '(s: string): number', gave the following error.
//     Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
//       Type 'number[]' is not assignable to type 'string'.
//   Overload 2 of 2, '(arr: any[]): number', gave the following error.
//     Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
//       Type 'string' is not assignable to type 'any[]'.

//Because both overloads have the same argument count and same return type, we can instead write a non-overloaded version of the function with union type:
function len1(x: any[] | string):number {
  return x.length;
}
//Callers can invoke this with either sort of value, and as an added bonus, we don't have to figure out a correct implementation signature.
//important Always prefer parameters with union types instead of overloads when possible

//Declaring this. keyword in a Function
//TypeScript will infer what the "this." keyword should be in a function via code flow analysis,
//example in the following:
const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
//TypeScript understands that the function
//"user.becomeAdmin" has a corresponding this which is the outer object 'user'.
//"this.", heh, can be enough for a lot of cases, but there are a lot of cases where you need more control over what object "this" represents.
//The JavaScript specification states that you cannot have a parameter called "this", and so TypeScript uses that syntax space to let you declare the type for this in the function body.
/*
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

//This pattern is common with callback-style APIs, where another object typically controls when your function is called.
*/

//note that you need to use function and not arrow functions to get this behavior:
/*
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(() => this.admin);
// The containing arrow function captures the global value of 'this'.
// Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
*/

//note Call Signatures
//Add extra property to the function
//example
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

const myDescFn: DescribableFunction = (someArg: number) =>
someArg > 10;
myDescFn.description = "This is a DescribableFunction to check if number is larger than 10";

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(10));
}

doSomething(myDescFn);

//note the syntax is slightly different compared to a function type expression - use : between the parameter list and the return type rather than =>.

//Construction Signatures
//JavaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because they usually create a new object. You can write a construct signature by adding the new keyword in front of a call signature:
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

//Some objects, like JavaScript's Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

//learn Other Types to Know About
//There are some additional types you'll want to recognize that appear often when working with function types.
//Like all types, you can use them everywhere, but these are especially relevant in the context of functions.

//note void

//void represents the return value of functions which don't return a value.
//It's the inferred type any time a function doesn't have any return statements,
//or doesn't return any explicit value from those return statements:
//example The inferred return type is void
function noop() {
  return;
}
//In JavaScript, a function that doesn't return any value will implicitly return the value undefined.
//However, void and undefined are not the same thing in TypeScript.
//There are further details at the end of this chapter.

//important void is not the same as undefined.

//note object

//The special type object refers to any value that isn't a primitive (string, number, bigint, boolean, symbol, null, or undefined).
//This is different from the empty object type { }, and also different from the global type Object.
//It’s very likely you will never use Object.

//important object is not Object. Always use object!

//note that in JavaScript, function values are objects: They have properties, have Object.prototype in their prototype chain, are instanceof Object, you can call Object.keys on them, and so on.
//For this reason, function types are considered to be objects in TypeScript.

//note unknown

//The unknown type represents any value.
//This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:
function f1(a: any) {
  a.b(); // OK
}
/*
function f2(a: unknown) {
  a.b();            // Error!
//Object is of type 'unknown'.
}
*/

//This is useful when describing function types because you can describe functions that accept any value without having any values in your function body.
/*
//Conversely, you can describe a function that returns a value of unknown type:
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
// Need to be careful with 'obj'!
const obj = safeParse(someRandomString);
*/

//note never
//Some functions never return a value:
function fail(msg: string): never {
  throw new Error(msg);
}

//The never type represents values which are never observed.
//In a return type, this means that the function throws an exception or terminates execution of the program.

//never also appears when TypeScript determines there's nothing left in a union.
//example
function fn5(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

