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

/*
const person: { //<== explicitly set object type on here
name: string;
age: number;
hobbies: string[];
role: [number, string]; //<==this marked a Tuple Type here
} = { //<== this is a better syntax
  name: 'Max',
  age: 27,

  //Arrays Types
  hobbies: ['Sports', 'Cooking'],
//Tuple Types another type of "Array"
//==> a fixed length fixed types of Array
role: [2, 'author'],
};
*/

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//enum is one of many custom types in TS
//Important: Often you'll see enums with all-uppercase values but that's not a "must-do". You can go with ANY value names.
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
  //console.log(hobby.map); //<== this I would get an error
}

// if check on certain condition
if (person.role === Role.ADMIN) {
console.log('is admin');
}

//Important: Nested Objects & Types
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

//This would be the "type" of such an object:
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


//Numeric enums
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


//Using enum is simple:
//just assess any member as a property off of the enum itself, declare types using the name of the enum:
enum UserResponse {
  NO = 0,
  YES = 1,
}

function respond(recipient: string, message: UserResponse): void {
  //...
}

respond("Princess Caroline", UserResponse.YES);

//enums without initializer either need to be first, or have to come after numeric enums initializer with numeric constants or other constant enum members.
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
