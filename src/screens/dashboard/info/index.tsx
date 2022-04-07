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



//learn TypeScript's type system only helps you during development
// (ie before the code gets compiled)
function add(n1: number, n2: number, showResult: boolean, phase: string) //<== after :number is special keyword fot TS
{
  //in vanilla javascript
  //a non TS way of ensuring we can't call the function
  //it is better to fail at runtime it is better to fail here then showing incorrect output than before
  //a way to check the input in JS not need TS to do it
  //downside ==> sometime only can validate certain input in runtime, we check sometime can be avoid during development with TS
  //note The key difference between JS & TS ==>
  // JS uses "dynamic types" (resolved at runtime);
  // TS uses "static types" (set during development).

  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error("Incorrect input!");
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phase + result);
  } else {
    return result;
  }
}

const number1 = 5; //same as 5.0
const number2  = 2.8;
const printResult = true;
const resultPhase = 'Result is: ';

add(number1, number2, printResult, resultPhase);

//important: Type Casing
/*In TypeScript, you work with types like "string" or number
all the times.
==> IMPORTANT: It is lowercase "string" and "number",
NOT pascalcase "String" and "Number" etc.. <==
The core primitive types in TypeScript are all lowercase */

/*
//note OBJECT TYPES
const person: { // <==TS representation of an object type that helps TS understand the objects I'm working with
  name: string;
  age: number;
} = {
  */
/*
const person: { //<== explicitly set object type on here
name: string;
age: number;
hobbies: string[];
role: [number, string]; //<==this marked a Tuple Type here
} = { //<== this is a better syntax
  name: 'Max',
  age: 27,

  //note Arrays Types
  hobbies: ['Sports', 'Cooking'], //<==Array Types example
//Tuple Types another type of "Array"
//==> a fixed length & fixed types kind of Array
role: [2, 'author'],
};
*/

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//enum is one of many custom types in TS
//important: Often you'll see enums with all-uppercase values but that's not a "must-do". You can go with ANY value names.
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 200 };

const person = {
    name: 'Max',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
  };

// person.role.push('admin');
// person.role[1] = 10;

//person.role =[0, 'admin', 'user']; //empty array is not allowed
//2 element match the target tuple allow, 3 is not

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map); //<== this would get an error
}

// if check on certain condition
if (person.role === Role.ADMIN) {
console.log('is admin');
}


//important: Nested Objects & Types
/*Of course "object types" can also be created
for "nested objects".

Let's say I have a JS object:*/
const product =
{
  id: '123',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red  Carpet',
    description: 'A great carpet - almost brand-new!'
    }
}
console.log(product.tags[0]);

//note This would be the "type" of such an object:
// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
// }
// }
//So you have an object type in an object type so to say.<==


//note Numeric enums
//A numeric enum where 'Up' is init with '1'.
//All the following members are auto-incremented from this point on.
//auto-incrementing behaviour is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.
// enum Direction {
//   UP = 1,
//   DOWN,
//   LEFT,
//   RIGHT,
// }

//or without the initializer
// enum Direction {
//   UP = 1,
//   DOWN,
//   LEFT,
//   RIGHT,
// }


//note Using enum is simple:
//just assess any member as a property off of the enum itself, declare types using the name of the enum:
enum UserResponse {
  NO = 0,
  YES = 1,
}

function respond(recipient: string, message: UserResponse): void {
  //...
}

respond("Princess Caroline", UserResponse.YES);

//important: enums without initializer either need to be first, or have to come after numeric enums initializer with numeric constants or other constant enum members.
//for example:
// enum E {
//   A = getSomeValue(), //<== //This is not allowed
//   B,
// }

//String enums
//In string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

//String enums don't have auto-incrementing behaviour, they have benefit that they "serialize" well.

/*
//note "any" Types
//a special type "any" that i can use whenever I don't want a particular value to cause typechecking errors.
let obj: any = { x: 0};
//none of the following lines of code will throw compile errors.
//Using "any" disables all further type checking, and it is assumed you know the environment better than TypeScript
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;
//The 'any' type is useful when you don't want to write out a long type just to convince TypeScript that a particular line of code is okay.
*/

//important: Type Aliases & Object Types
//Type aliases can be used to create own types.
//I'm not limited to storing union types though - I can also use them to create a (possibly more) object types.
//For example:
type user = {
  name: string;
  age: number;
};

const u1: user = {
  name: 'John',
  age: 27,
}; //<==this works!!
//This allow me to avoid unnecessary repetition and manage types centrally.

//For example 2:
// function greet(
//   user: {
//     name: string;
//     age: number;
//   }) {
//   console.log('Hi, I am '+ user.name);
// }

// function isOlder(
//   user: {
//     name: string;
//     age: number;
//   },
//   checkAge: number
// ) {
//   return checkAge > user.age;
// }
//simplify above code to this:
type User = {
  name: string;
  age: number;
};

function greet(user: User) {
  console.log('Hi, I am '+ user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
/*
//learn aliases are only aliases - i cannot use type aliases to create different /distinct "versions" of the same type.
//For example:
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
//create a sanitize input
let userInput = sanitizeInput(getInput());
//can still be re-assigned with a string though
userInput = 'hello';
*/

//note Type Aliases:  are just a way to give a name to a type.
//It is useful if I want to use the same type more than once and refer to it by a single name.
type Combinable = number | string; //<==type aliases

//learn Union Types
//TypeScript allow us to build new types out of existing ones using a large variety of operators.
//Combine types 1 ==> Union Type
//It is a type form from 2 or more other types, representing values that may be any one of those types.
//example 1:
function combine(
  input1: Combinable, //<== can be replace by type aliases
  input2: Combinable)
{
  //note this is a runtime check with "typeof" type guard
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
   result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
    return result;
  }

  const combinedAges = combine(30, 26);
  console.log(combinedAges);

  const combinedNames = combine('Max', 'Anna');
  console.log(combinedNames);

  //example 2:
  function printId(id: number | string) {
    console.log('Your ID is: ' + id);
  }
//okay
printId(101);
//okay
printId(202);
//error
//printId({myID: 22342});

//note working with Union Types
//TS only allow an operation if it is valid for every member of the union.

//example 3:
function printIdA(id: number | string) {
//console.log(id.toUpperCase()); //<== Error can't use method on string | string type

//The solution narrow the union with code.
//note check with "typeof" type guard
if (typeof id === 'string') {
  //In this branch, id is of type 'string'
  console.log(id.toUpperCase());
} else {
  //here, id is of type 'number'
  console.log(id);
}
}

//example 4:
//note use runtime check with "typeof" type guard
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    //here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "))
  } else {
    //here: 'x' is 'string'
    console.log("Welcome lone traveler, " + x);
  }
}

//note sometimes union have all the members have something in common, if it is so, you can use that property without narrowing
//example 5:
//return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

//note Literal Types
//example 1:
function combineA(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
  ){
  //note this is a runtime check with "typeof" type guard
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
   result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  }

  const combinedAge = combineA(30, 26, 'as-number');
  console.log(combinedAge);

  const combinedStringAge = combineA('30', '26', 'as-number');
  console.log(combinedStringAge);

  const combinedName = combineA('Max', 'Anna', 'as-text');
  console.log(combinedName);

  //example 2:
  let changingString = 'Hello World';
  changingString = 'Ola Mundo';
  //because `changingSting` can represent  any possible string, that is how TS describes it in the type system
  changingString;

  const constantString = 'Hello World';
  //because `constantString` can only represent 1 possible string, it has a literal type representation
  constantString;

  //note by themselves, literal types are not very useful.
  let x: 'hello' = 'hello';
  //OK
  x = 'hello';
  // ...
  //x = 'howdy'; //<== not assignable error

  //note by combining literals into unions, we can create a new type that represents all the possible values of the literals.
function printText(
  s: string,
  alignment: 'left' | 'right' | 'center') {
    // ...
}
printText('Hello, world', 'left');
//printText("G'day, mate", "centre"); //<== not assignable error
/*

//numeric literal types work the same
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

//combine with non-literal types
interface Options {
  width: number;
}
function configure(x: Options | 'auto') {
  // . . .
}
configure({ width: 100 });
configure('auto');

function sanitize(str: string): string {
  throw new Error('Function not implemented.');
}

function getInput(): string {
  throw new Error('Function not implemented.');
}
//configure('automatic'); //<== not assignable error
*/

//note one more kind of literal type:
//boolean literals with only 2 boolean literal types 'true' | 'false'.
//the type boolean itself is actually just as alias for the union true | false

/*
//note Literal Interface
//When I initialize a variable with an object, TS assumes that the properties of the object might change values later.
//example:
const obj = { counter: 0};
if (someCondition) {
  obj.counter = 1;
}
// TS don't assume the assignment of 1 to a field which previously had 0 is an error
//because types are used to determine both reading and writing behavior
*/

/*
//note it also applies to string
const req = {
  url: 'https://example.com',
  method: 'GET'
};
handleRequest(req.url, req.method);
*/

/*
//note There is 2 ways to work around this
//Way 1: I can change the inference by adding a type assertion in either location:
//change 1: I intend for req.method to always have literal type 'GET', preventing the possible assignment of 'GUESS' to the field after
const req = {
  url: 'https://example.com',
  method: 'GET' as 'GET'
};
//change 2: I know for other reasons that req.method has the value 'GET'
handleRequest(req.url, req.method as 'GET');
*/

/*
//note I can also use "const" to convert the entire object to be type literals
const req = {
  url: 'https://example.com',
  method: 'GET'
} as const;
handleRequest(req.url, req.method);
*/
