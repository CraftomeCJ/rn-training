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

// TypeScript's type system only helps you during development
// (ie before the code gets compiled)
function add(n1: number, n2: number, showResult: boolean, phase: string) //<== after :number is special keyword fot TS
{
  //in vanilla javascript
  //a non TS way of ensuring we can't call the function
  //it is better to fail at runtime it is better to fail here then showing incorrect output than before
  //a way to check the input in JS not need TS to do it
  //downside ==> sometime only can validate certain input in runtime, we check sometime can be avoid during development with TS
  //The key difference between JS & TS ==>
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

// Important: Type Casing
/*In TypeScript, you work with types like "string" or number
all the times.
==> IMPORTANT: It is lowercase "string" and "number",
NOT "String" and "Number" etc.. <==
The core primitive types in TypeScript are all lowercase */

/*
//OBJECT TYPES
const person: { // <==TS representation of an object type that helps TS understand the objects I am working with
  name: string;
  age: number;
} = {*/
const person = { //<== this is a better syntax
  name: 'Max',
  age: 27
};

console.log(person.name);
