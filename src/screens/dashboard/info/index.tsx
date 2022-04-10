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


//learn Object Types - Classes
////TypeScript offers full support for the class keyword introduced in ES2015.

//As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.

//note What are classes?
//A class is a blueprint for creating objects.
//A template for creating objects.
//Encapsulate data with code to work on that data.
////Classes & Instances
//Objects <===== Classes
////Objects: "The things I'm working with in code"
////Objects: Instances of classes (=bases on classes)
////Objects: Class-based creation is an alternative to using object literals!!
//Classes:   "Blueprints for objects"
//Classes:   Define how objects look like, which properties and methods they have
//Classes:   Classes make creation of multiple, similar objects much easier

//note Defining classes
//Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

//note What is Object-oriented Programming (OOP)?
//Object-oriented programming (OOP) is a programming paradigm that uses objects as the primary way of representing data and functionality in a computer program.
//Work with (real-life) Entities in my code

//example Creating a First Class
////Class declarations
//One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Point" here).

// ==>Class Members
//Here's the most basic class - an empty one:
 class //<== Class keyword
 Point //<== Class Name

 //This class isn't very useful yet, so let's start adding some members.
////Fields
//A field declaration creates a public writeable property on a class:
{     //<== class body
  //<===== class field =====>
x: number; //<== property declaration with type annotation
y: number; //<== property aka variable in a class

////Constructors can aka functions
//Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

//Normal signature with defaults
constructor //<== constructor declaration
(x=10, y=20) //<== constructor parameters with type annotation
{     //<== constructor body
  this.x = x; //<== an "instance" with this. keyword inside
  this.y = y; //<== constructor body
}
/*
class Point {
  //// Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
*/
}

const pt = new Point();
pt.x = 10;
pt.y = 20;

//As with other locations, the type annotation is optional, but will be an implicit any if not specified.

//Fields can also have initializers; these will run automatically when the class is instantiated:

//print 10, 20
console.log(`${pt.x}, ${pt.y}`);

/*
//note Just like with const, let, and var, the initializer of a class property will be used to infer its type:
const pt = new Point();
pt.x = "0"; //<== error
//Type 'string' is not assignable to type 'number'.
*/
/*
//important --strictPropertyInitialization
The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.

class BadGreeter {
  name: string; //<== error
Property 'name' has no initializer and is not definitely assigned in the constructor.
}
*/
//example
/*
class GoodGreeter {
  name: string;

  constructor() {
    this.name = "hello";
  }
}
*/
//Note that the field needs to be initialized in the constructor itself. TypeScript does not analyze methods you invoke from the constructor to detect initializations, because a derived class might override those methods and fail to initialize the members.
//If you intend to definitely initialize a field through means other than the constructor (for example, maybe an external library is filling in part of your class for you), you can use the definite assignment assertion operator, !:
//example
/*
class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
*/

//note readonly
//Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.
//example
/*
class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = "not ok";
//Cannot assign to 'name' because it is a read-only property.
  }
}
const g = new Greeter();
g.name = "also not ok";
//Cannot assign to 'name' because it is a read-only property.
*/

//note Constructors
//There are just a few differences between class constructor signatures and function signatures:

// ==>Constructors can't have type parameters - these belong on the outer class declaration, which we'll learn about later

// ==>Constructors can't have return type annotations - the class instance type is always what's returned

//note Super Calls

//Just as in JavaScript, if you have a base class, you'll need to call super(); in your constructor body before using any this. members:
//example
/*
class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
////'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }
}
//Forgetting to call super is an easy mistake to make in JavaScript, but TypeScript will tell you when it’s necessary.
*/


//learn Define a class And create instance
class Department {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const who = new Department('CJ', 20);
console.log(who.name);
console.log(who.age);
console.log(who.name, who.age);
console.log(`${who.name}, ${who.age}` + " is assigned to here.");


//note Methods aka functions in a class
//A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors:
//example
class Methods {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
//Other than the standard type annotations, TypeScript doesn't add anything else new to methods.

//note that inside a method body, it is still mandatory to access fields and other methods via this.. An unqualified name in a method body will always refer to something in the enclosing scope:
//example
/*
let x: number = 0;
class C {
  x: string = "hello";

  m() {
    // This is trying to modify 'x' from line 1, not the class property
    x = "world"; //<== error
//Type 'string' is not assignable to type 'number'.
  }
}
*/

//learn Method And create instance
class Method {
  x: number = 10; // "=" with value => initialize field
  y: number = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

const style = new Method();
style.scale(20); //<== default values
console.log(style.x, style.y);


//learn Getters/Setters
//Classes can also have accessors:
//example
class GetterSetter {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
//important Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It's fine to expose public fields if you don't need to add additional logic during the get/set operations.

//note TypeScript has some special inference rules for accessors:
// =>If get exists but no set, the property is automatically readonly
// =>If the type of the setter parameter is not specified, it is inferred from the return type of the getter
// =>Getters and setters must have the same Member Visibility

////Since TypeScript 4.3, it is possible to have accessors with different types for getting and setting.
//example
class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }
  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
    this._size = num;
  }
}

//note Index Signatures
//Classes can declare index signatures; these work the same as Index Signatures for other object types:
//example
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}


//note Class Heritage
//Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.

//learn implements Clauses
//You can use an implements clause to check that a class satisfies a particular interface. An error will be issued if a class fails to correctly implement it:

/*
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable { // <== error
//Class 'Ball' incorrectly implements interface 'Pingable'.
  //Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.

  pong() {
    console.log("pong!");
  }
}
*/
//Classes may also implement multiple interfaces, e.g. class C implements A, B {.

////Cautions
//important It's important to understand that an implements clause is only a check that the class can be treated as the interface type. It doesn't change the type of the class or its methods at all. A common source of error is to assume that an implements clause will change the class type - it doesn't!
//example
/*
interface Checkable {
  check(name: string): boolean;
}
class NameChecker implements Checkable {
  check(s) { //<== error
//Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    return s.toLowercse() === "ok";
  }
}
*/
//In above example, we perhaps expected that (s)'s type would be influenced by the name: string parameter of check. It is not - implements clauses don't change how the class body is checked or its type inferred.

//Similarly, implementing an interface with an optional property doesn't create that property:
//example
/*
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10; // <== error
//Property 'y' does not exist on type 'C'.
*/

//learn Class can implement interface
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

const sonar = new Sonar();
sonar.ping();


//learn extends Clauses
//Class can extend base class
//Classes may extend from a base class. A derived class called "sub-class" has all the properties and methods of its base class, and also define additional members.
//example
class Animal {
  move() {
    console.log("roaming the earth...");
  }
}

class Dog extends Animal {
  bark(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("Woof!");
    }
  }
}

const dog = new Dog();
//Base class method
dog.move();
//Sub class method
dog.bark(3);


//learn Overriding Methods
//A sub class can also override a base class field or property. You can use the "super." syntax to access base class methods.

//note that because JavaScript classes are a simple lookup object, there is no notion of a "super field".

//TypeScript enforces that a derived class is always a subtype of its base class.

//example, here's a legal way to override a method:
class Base {
  greet() {
    console.log("Hello there!!");
  }
}

class subClass extends Base {
  greet(name?: string) {
    // if (name === undefined) {
    //   super.greet();
    // }else {
    //   console.log(`Hello, + ${name.toUpperCase()}`);
    // }
    //rewrite with ternary operator
    (name === undefined) ? super.greet() : console.log (`Hello, + ${name.toUpperCase()}`);
  }
}

const human = new subClass();
human.greet();
human.greet("Bobby");

//important It's important that a derived (sub)class follow its base class contract. Remember that it's very common (and always legal!) to refer to a derived class instance through a base class reference:
//Alias the derived subclass instance through a base class reference
const derived: Base = human;
//No problem
derived.greet();

////what if Derived didn't follow Base's contract?
//example
/*
class notFollowBase {
  greet() {
    console.log("Hello there!!");
  }
}
class Derived extends notFollowBase {
  //Make this parameter required
  greet(name: string) {   //<== error
   //Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
  //Type '(name: string) => void' is not assignable to type '() => void'.
  console.log(`Hello, ${name.toUpperCase()}`);
}
}
//If we compiled this code despite the error, this sample would then crash:
const b: Base = new Derived();
// Crashes because "name" will be undefined
b.greet();
*/
