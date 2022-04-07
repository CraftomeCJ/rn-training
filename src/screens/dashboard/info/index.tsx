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
