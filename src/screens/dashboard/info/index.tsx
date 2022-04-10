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

//note Type-only Field Declarations
//When target >= ES2022 or useDefineForClassFields is true, class fields are initialized after the parent class constructor completes, overwriting any value set by the parent class.
//This can be a problem when you only want to re-declare a more accurate type for an inherited field.
//To handle these cases, you can write declare to indicate to TypeScript that there should be no runtime effect for this field declaration.
//example
/*
interface Animal {  //<== can be use as : type
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;

  constructor(animal: Animal) {
    //use this. syntax to call class property assign to constructor's parameter name
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  //does not emit JS code,
  //only ensures the types are correct
  declare resident: Dog;

  constructor(dog: Dog) {
    super(dog);
  }
}
*/

//note Initialization Order
//The order that JavaScript classes initialize can be surprising in some cases. Let's consider this code:
class initialOrderBase {
  name = "base";

  constructor() {
    console.log("My name is " + this.name);
  }
}

class Derived extends initialOrderBase {
  name = "derived";
}

//prints "base", not "derived"
const d = new Derived();
/*
What happened here?

The order of class initialization, as defined by JavaScript, is:

1. The base class fields are initialized
2. The base class constructor runs
3. The derived class fields are initialized
4. The derived class constructor runs

This means that the base class constructor saw its own value for name during its own constructor, because the derived class field initializations hadn't run yet.
*/

//note Inheriting Built-in Types

//note: If you don't plan to inherit from built-in types like Array, Error, Map, etc. or your compilation target is explicitly set to ES6/ES2015 or above, you may skip this section

//In ES2015, constructors which return an object implicitly substitute the value of this for any callers of super(...). It is necessary for generated constructor code to capture any potential return value of super(...) and replace it with this.

//As a result, subclassing Error, Array, and others may no longer work as expected. This is due to the fact that constructor functions for Error, Array, and the like use ECMAScript 6's new.target to adjust the prototype chain; however, there is no way to ensure a value for new.target when invoking a constructor in ECMAScript 5. Other downlevel compilers generally have the same limitation by default.

//example For a subclass like the following:
/*
class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}
*/

// you may find that:

//methods may be undefined on objects returned by constructing these subclasses, so calling sayHello will result in an error.

//instanceof will be broken between instances of the subclass and their instances, so (new MsgError()) instanceof MsgError will return false.

//As a recommendation, you can manually adjust the prototype immediately after any super(...) calls.
//example
class MsgError extends Error {
  constructor(m: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MsgError.prototype);
  }

  sayHello() {
    return "hello " + this.message;
  }
}
//However, any subclass of MsgError will have to manually set the prototype as well. For runtime that don't support Object.setPrototypeOf, you may instead be able to use __proto__.

//Unfortunately, these workarounds will not work on Internet Explorer 10 and prior. One can manually copy methods from the prototype onto the instance itself (i.e. MsgError.prototype onto this), but the prototype chain itself cannot be fixed.

//learn Member Visibility
//You can use TypeScript to control whether certain methods or properties are visible to code outside the class.

//note public: all
//The default visibility of class members is public. A public member can be accessed anywhere:
//example
class Greeter {
  public greet() {
    console.log("Hello")
  }
}

const nameForClass = new Greeter();
nameForClass.greet();
//Because public is already the default visibility modifier, you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.

//note protected: sub-class
//protected members are only visible to subclasses of the class they're declared in.
class ProtectedGreeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends ProtectedGreeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName(); //<== error
////Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

//note Exposure of protected members

//Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities. This includes making protected members public:
class ProtectedBase {
  protected m = 10;
}
class PublicDerived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d1 = new PublicDerived();
console.log(d1.m); // OK

//note that PublicDerived was already able to freely read and write m, so this doesn't meaningfully alter the "security" of this situation. The main thing to note here is that in the derived (sub)class, we need to be careful to repeat the protected modifier if this exposure isn't intentional.

//note Cross-hierarchy protected access

//Different OOP languages disagree about whether it’s legal to access a protected member through a base class reference:
//example with error
/*
class CrossHierarchyBase {
  protected x: number = 1;
}
class Derived1 extends CrossHierarchyBase {
  protected x: number = 5;
}
class Derived2 extends CrossHierarchyBase {
  f1(other: Derived2) {
    other.x = 10;
  }
  f2(other: CrossHierarchyBase) {
    other.x = 10; //<== error
//Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.
  }
}
*/
/*
Java, for example, considers this to be legal. On the other hand, C# and C++ chose that this code should be illegal.

TypeScript sides with C# and C++ here, because accessing x in Derived2 should only be legal from Derived2's subclasses, and Derived1 isn't one of them. Moreover, if accessing x through a Derived1 reference is illegal (which it certainly should be!), then accessing it through a base class reference should never improve the situation.
*/

//note private: self only
//private is like protected, but doesn't allow access to the member even from subclasses:
//example with error
/*
class PrivateBase {
  private x = 0;
}
const b = new Base();
//can't access from the outside the class
console.log(b,x); //<==error
//Property 'x' is private and only accessible within class 'Base'.

class Derived2 extends PrivateBase {
showX() {
  //can't access in subclasses
  console.log(this.x); //<==error
  //Property 'x' is private and only accessible within class 'Base'.
}
}

//Because private members aren’t visible to derived classes, a derived class can’t increase its visibility:

class PrivateBase1 {
  private x = 0;
}
class Derived3 extends PrivateBase1 {
//Class 'Derived' incorrectly extends base class 'Base'.
  //Property 'x' is private in type 'Base' but not in type 'Derived'.
  x = 1;
}
*/

//note Cross-instance private access

//Different OOP languages disagree about whether different instances of the same class may access each others' private members. While languages like Java, C#, C++, Swift, and PHP allow this, Ruby does not.

//TypeScript does allow cross-instance private access:
class A {
  private x = 10;

  public sameAs(other: A) {
    //no error
    return other.x === this.x
  }
}

//note Caveats
//Like other aspects of TypeScript's type system, private and protected are only enforced during type checking.

//This means that JavaScript runtime constructs like in or simple property lookup can still access a private or protected member:
class MySafe {
  private secretKey = 12345;
}
// In a JavaScript file...
const s = new MySafe();
// Will print 12345
//console.log(s.secretKey); //<== error
//Property 'secretKey' is private and only accessible within class 'MySafe'.

//private also allows access using bracket notation during type checking. This makes private-declared fields potentially easier to access for things like unit tests, with the drawback that these fields are soft private and don't strictly enforce privacy.
// OK
console.log(s["secretKey"]);

//Unlike TypeScripts's private, JavaScript's private fields (#) remain private after compilation and do not provide the previously mentioned escape hatches like bracket notation access, making them hard private.
//example TyprScript:
class Doggy {
  #barkAmount = 0;
  personality = "happy";

  constructor() {}
}
//example JavaScript
// "use strict";
// class Doggy {
//     #barkAmount = 0;
//     personality = "happy";
//     constructor() { }
// }

//When compiling to ES2021 or less, TypeScript will use WeakMaps in place of #.
/*
"use strict";
var _Dog_barkAmount;
class Dog {
    constructor() {
        _Dog_barkAmount.set(this, 0);
        this.personality = "happy";
    }
}
_Dog_barkAmount = new WeakMap();
*/

//If you need to protect values in your class from malicious actors, you should use mechanisms that offer hard runtime privacy, such as closures, WeakMaps, or private fields.
//note that these added privacy checks during runtime could affect performance.


//learn Static Members

//Classes may have static members. These members aren't associated with a particular instance of the class. They can be accessed through the class constructor object itself:
//example
/*
class MyStaticClass {
  static x = 0;

  static printX() {
    console.log(MyClass.x); //<== error
  }
}
console.log(MyClass.x); //<== error
MyClass.printX(); //<== error
*/

//noteStatic members can also use the same public, protected, and private visibility modifiers:
/*
class MyStaticClass1 {
  private static x = 0;
}
console.log(MyClass.x); //<== error
//Property 'x' is private and only accessible within class 'MyClass'.
*/

//noteStatic members are also inherited:
//example
class StaticBase {
  static getGreeting() {
    return "Hello world";
  }
}
class StaticDerived extends StaticBase {
  myGreeting = StaticDerived.getGreeting();
}

//note Special Static Names

//It's generally not safe/possible to overwrite properties from the Function prototype. Because classes are themselves functions that can be invoked with new, certain static names can't be used. Function properties like name, length, and call aren't valid to define as static members:
/*
class S {
  static name = "S!"; //<== error
//Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
}
*/

//learn Why No Static Classes?

//TypeScript (and JavaScript) don't have a construct called static class the same way as, for example, C# does.

//Those constructs only exist because those languages force all data and functions to be inside a class; because that restriction doesn't exist in TypeScript, there's no need for them.
//A class with only a single instance is typically just represented as a normal object in JavaScript/TypeScript.

//For example, we don't need a "static class" syntax in TypeScript because a regular object (or even top-level function) will do the job just as well:

// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}

// Preferred (alternative 1)
function doSomething() {}

// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};

//note static Blocks in Classes
//Static blocks allow you to write a sequence of statements with their own scope that can access private fields within the containing class.
//This means that we can write initialization code with all the capabilities of writing statements, no leakage of variables, and full access to our class's internals.

class Foo {
    static #count = 0;

    get count() {
        return Foo.#count;
    }

    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
}

