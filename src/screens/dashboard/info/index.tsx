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
