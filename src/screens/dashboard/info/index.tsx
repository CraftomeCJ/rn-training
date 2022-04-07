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
//Function Return Types & "Void"
function add (n1: number, n2: number): number //<== the return type of the function must match type in parentheses
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

//let someValue: undefined;
