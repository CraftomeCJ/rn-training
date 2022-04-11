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



//LEARN Typescript Basics: Object Types

//note interface as Object Type
//In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.
//As we've seen, they can be anonymous:
function greet(person: {
  name: string;
  age: number
})
{
  return "Hello " + person.name;
}

//note they can be named by using either an interface as Object Type
interface InterfacePerson {
  name: string;
  age: number;
}
const greetThere = (person: InterfacePerson): string => {
  return "Hello " + person.name;
}

//note Type as Object Type
//or a type alias
type TypePerson = {
  name: string;
  age: number;
};
const greets = (person: TypePerson): string => {
  return "Hello " + person.name;
}

const jerry: TypePerson = {
  name: "Jerry",
  age: 23
};
console.log(greet(jerry));

//note In all three examples above, we've written functions that take objects that contain the property name (which must be a string) and age (which must be a number).


//learn Property Modifiers
//Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

//note 1. Optional Properties
/*
//Much of the time, we'll find ourselves dealing with objects that might have a property set.
//In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names.
interface PaintOptions {
  shape: Shape;
  xPos?: number; // <== optional property with a "?"
  yPos?: number;
}
const paintShape = (opts: PaintOptions) => {
  return somethingInFunction;
}
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

//note In this example, both xPos and yPos are considered optional. We can choose to provide either of them, so every call above to paintShape is valid.
//All optionality really says is that if the property is set, it better have a specific type.
*/

/*
//We can also read from those properties - but when we do under strictNullChecks, TypeScript will tell us they're potentially undefined.
function paintShape1(opts: PaintOptions) {
  let xPos = opts.xPos;
//(property) PaintOptions.xPos?: number | undefined
  let yPos = opts.yPos;
//(property) PaintOptions.yPos?: number | undefined
  // ...
}

//In JavaScript, even if the property has never been set, we can still access it - it's just going to give us the value undefined. We can just handle undefined specially.
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
//let xPos: number
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
//let yPos: number
  // ...
}
//note that this pattern of setting defaults for unspecified values is so common that JavaScript has syntax to support it.
*/

/*
function paintShape2({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
//(parameter) xPos: number
  console.log("y coordinate at", yPos);
//(parameter) yPos: number
  // ...
}
//Here we used a destructuring pattern for paintShape's parameter, and provided default values for xPos and yPos. Now xPos and yPos are both definitely present within the body of paintShape, but optional for any callers to paintShape.

//important Note that there is currently no way to place type annotations within destructuring patterns. This is because the following syntax already means something different in JavaScript.
*/

/*
function draw({ shape: Shape, xPos: number = 100 ... }) {
  render(shape);
//Cannot find name 'shape'. Did you mean 'Shape'?
  render(xPos);
//Cannot find name 'xPos'.
}
//In an object destructuring pattern, shape: Shape means ==> grab the property shape and redefine it locally as a variable named Shape. Likewise xPos: number creates a variable named number whose value is based on the parameter's xPos.

//Using mapping modifiers, you can remove optional attributes.
*/

//note readonly Properties
/*
//Properties can also be marked as readonly for TypeScript. While it won't change any behavior at runtime, a property marked as readonly can't be written to during type-checking.
interface SomeReadOnlyType {
  readonly prop: string;
}

function doSomething(obj: SomeReadOnlyType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = "hello"; //<== error
//Cannot assign to 'prop' because it is a read-only property.
}
*/

/*
//Using the readonly modifier doesn't necessarily imply that a value is totally immutable - or in other words, that its internal contents can't be changed. It just means the property itself can't be re-written to.
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}

function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
//Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };
}
*/
//important It's important to manage expectations of what "readonly" implies. It's useful to signal intent during development time for TypeScript on how an object should be used. TypeScript doesn't factor in whether properties on two types are readonly when checking whether those types are compatible, so readonly properties can also change via aliasing.
interface Person {
  name: string;
  age: number;
}
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
//Using mapping modifiers, you can remove readonly attributes.


//note Index Signatures
//Sometimes you don't know all the names of a type's properties ahead of time, but you do know the shape of the values.

//In those cases you can use an index signature to describe the types of possible values,
/*
//example:
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
//const secondItem: string

//Above, we have a StringArray interface which has an index signature. This index signature states that when a StringArray is indexed with a number, it will return a string.
//An index signature property type must be either 'string' or 'number'.
*/

//note It is possible to support both types of indexers...
/*
//1. While string index signatures are a powerful way to describe the "dictionary" pattern, they also enforce that all properties match their return type. This is because a string index declares that obj.property is also available as obj["property"]. In the following example, name’s type does not match the string index's type, and the type checker gives an error:

interface NumberDictionary {
  [index: string]: number;

  length: number; // ok
  name: string;
//Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}
*/
/*
//2. It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object. That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!

interface NotOkay {
  [x: number]: Animal;
// 'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.

  [x: string]: Dog;
}
*/

/*
//While string index signatures are a powerful way to describe the "dictionary" pattern, they also enforce that all properties match their return type.

This is because a string index declares that obj.property is also available as obj["property"].

In the following example, name's type does not match the string index's type, and the type checker gives an error:

interface NumberDictionary {
  [index: string]: number;

  length: number; // ok
  name: string;
//Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}
*/

//However, properties of different types are acceptable if the index signature is a union of the property types:
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

/*
//Finally, you can make index signatures readonly in order to prevent assignment to their indices:
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
//Index signature in type 'ReadonlyStringArray' only permits reading.

//note You can't set myArray[2] because the index signature is readonly.
*/


//learn Extending Types
//It's pretty common to have types that might be more specific versions of other types.
//example, we might have a BasicAddress type that describes the fields necessary for sending letters and packages in the U.S.
//note interface as Object Type with Optional Property
interface BasicAddress {
  name?: string;  //<== optional property
  street: string; //<== object property
  city: string;
  country: string;
  postalCode: string;
}

//In some situations that's enough, but addresses often have a unit number associated with them if the building at an address has multiple units. We can then describe an AddressWithUnit.
interface AddressWithUnit {
  name?: string;
  unit: number;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

//This does the job, but the downside here is that we had to repeat all the other fields from BasicAddress when our changes were purely additive.
//note Instead, we can extend the original BasicAddress type and just add the new fields that are unique to AddressWithUnit.
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  units: number;
}

//The extends keyword on an interface allows us to effectively copy members from other named types, and add whatever new members we want.
//This can be useful for cutting down the amount of type declaration boilerplate we have to write, and for signaling intent that several different declarations of the same property might be related.
//example, AddressWithUnit didn’t need to repeat the street property, and because street originates from BasicAddress, a reader will know that those two types are related in some way.

//interfaces can also extend from multiple types.
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};


//learn Intersection Types &
//interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

//An intersection type is defined using the & operator.
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type IntersectionColorfulCircle = Colorful & Circle;

//Here, we've intersected Colorful and Circle to produce a new type that has all the members of Colorful and Circle.
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: "blue", radius: 42 });
 /*
// oops!! error
draw({ color: "red", raidus: 42 });
//Argument of type '{ color: string; raidus: number; }' is not assignable to parameter of type 'Colorful & Circle'.
  //Object literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?
*/

//learn Interfaces vs. Intersections
//We just looked at two ways to combine types which are similar, but are actually subtly different. With interfaces, we could use an extends clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias. The principle difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you'd pick one over the other between an interface and a type alias of an intersection type.


